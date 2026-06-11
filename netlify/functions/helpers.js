const admin = require("firebase-admin");
const { Buffer } = require("buffer");

const requiredEnv = [
  "FIREBASE_PROJECT_ID",
  "FIREBASE_CLIENT_EMAIL",
  "FIREBASE_PRIVATE_KEY",
  "GITHUB_TOKEN",
  "GITHUB_REPOSITORY_OWNER",
  "GITHUB_REPOSITORY_NAME",
  "ALLOWED_ADMIN_EMAIL"
];

for (const env of requiredEnv) {
  if (!process.env[env]) {
    throw new Error(`Missing environment variable: ${env}`);
  }
}

const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");
const firebaseConfig = {
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey
  })
};

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}

const db = admin.firestore();
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || `${process.env.FIREBASE_PROJECT_ID}.appspot.com`;
const bucket = admin.storage().bucket(storageBucket);
const githubToken = process.env.GITHUB_TOKEN;
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepo = process.env.GITHUB_REPOSITORY_NAME;
const allowedEmail = process.env.ALLOWED_ADMIN_EMAIL.toLowerCase();

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(data)
  };
}

function getAuthorizationHeader(event) {
  return event.headers?.authorization || event.headers?.Authorization || "";
}

async function verifyAuth(event) {
  const authHeader = getAuthorizationHeader(event);
  if (!authHeader.startsWith("Bearer ")) {
    throw { statusCode: 401, message: "Missing authorization token." };
  }
  const token = authHeader.split("Bearer ")[1].trim();
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    if (!decoded.email || decoded.email.toLowerCase() !== allowedEmail) {
      throw { statusCode: 403, message: "Unauthorized user." };
    }
    return decoded;
  } catch (error) {
    throw { statusCode: 401, message: "Invalid or expired authentication token." };
  }
}

async function githubRequest(path, options = {}) {
  const url = `https://api.github.com${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${githubToken}`,
      ...(options.headers || {})
    }
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message = data?.message || "GitHub API request failed.";
    throw new Error(message);
  }
  return data;
}

function encodeContent(content) {
  return Buffer.from(content, "utf8").toString("base64");
}

function parseFrontMatter(rawText) {
  const frontMatterMatch = /^---\s*([\s\S]*?)---/m.exec(rawText);
  if (!frontMatterMatch) {
    return {};
  }

  const lines = frontMatterMatch[1].split(/\r?\n/).filter(Boolean);
  const data = {};

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (!key) continue;
    const value = rest.join(":").trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key.trim()] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      data[key.trim()] = value.replace(/^"|"$/g, "");
    }
  }

  return data;
}

function buildPostMetadata(filePath, rawContent) {
  const frontMatter = parseFrontMatter(rawContent);
  return {
    title: frontMatter.title || filePath.split("/").pop().replace(/\.md$/, ""),
    fileName: filePath,
    status: "published",
    updatedAt: frontMatter.date || null,
    categories: frontMatter.categories || [],
    tags: frontMatter.tags || [],
    excerpt: frontMatter.excerpt || "",
    image: frontMatter.image || "",
    canonicalUrl: frontMatter.canonical_url || "",
    readingTime: frontMatter.reading_time || "",
    ogTitle: frontMatter.og_title || "",
    ogDescription: frontMatter.og_description || ""
  };
}

async function getGitHubFilesInDirectory(directory) {
  return await githubRequest(`/repos/${githubOwner}/${githubRepo}/contents/${directory}`);
}

async function fetchGitHubFile(filePath) {
  return await githubRequest(`/repos/${githubOwner}/${githubRepo}/contents/${filePath}`);
}

async function createGitHubFile(filePath, content, message) {
  return await githubRequest(`/repos/${githubOwner}/${githubRepo}/contents/${filePath}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: encodeContent(content)
    })
  });
}

async function updateGitHubFile(filePath, content, sha, message) {
  return await githubRequest(`/repos/${githubOwner}/${githubRepo}/contents/${filePath}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: encodeContent(content),
      sha
    })
  });
}

async function deleteGitHubFile(filePath, sha, message) {
  return await githubRequest(`/repos/${githubOwner}/${githubRepo}/contents/${filePath}`, {
    method: "DELETE",
    body: JSON.stringify({
      message,
      sha
    })
  });
}

async function saveDraftToFirestore(draftId, data) {
  const now = new Date().toISOString();
  const docRef = db.collection("drafts").doc(draftId);
  const existing = await docRef.get();
  const payload = {
    title: data.title || "Untitled",
    slug: data.slug || "",
    content: data.content || "",
    tags: data.tags || [],
    categories: data.categories || [],
    image: data.image || "",
    status: "draft",
    createdAt: existing.exists ? existing.data().createdAt : now,
    updatedAt: now,
    metadata: data
  };
  await docRef.set(payload, { merge: true });
  return draftId;
}

async function getDraftFromFirestore(draftId) {
  const doc = await db.collection("drafts").doc(draftId).get();
  if (!doc.exists) {
    throw new Error("Draft not found.");
  }
  return { id: doc.id, ...doc.data() };
}

async function getAllDrafts() {
  const snapshot = await db.collection("drafts").orderBy("updatedAt", "desc").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function deleteDraftFromFirestore(draftId) {
  await db.collection("drafts").doc(draftId).delete();
}

async function uploadImageToStorage(fileName, contentBase64) {
  const buffer = Buffer.from(contentBase64, "base64");
  const file = bucket.file(fileName);
  await file.save(buffer, {
    metadata: {
      contentType: "image/jpeg"
    },
    public: false
  });
  const [signedUrl] = await file.getSignedUrl({
    action: "read",
    expires: new Date(Date.now() + 31536000000)
  });
  return signedUrl;
}

module.exports = {
  jsonResponse,
  verifyAuth,
  githubRequest,
  fetchGitHubFile,
  createGitHubFile,
  updateGitHubFile,
  deleteGitHubFile,
  getGitHubFilesInDirectory,
  buildPostMetadata,
  saveDraftToFirestore,
  getDraftFromFirestore,
  getAllDrafts,
  deleteDraftFromFirestore,
  uploadImageToStorage,
  parseFrontMatter
};
