const {
  jsonResponse,
  verifyAuth,
  getGitHubFilesInDirectory,
  fetchGitHubFile,
  buildPostMetadata,
  getAllDrafts
} = require("./helpers");

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "GET") {
      return jsonResponse(405, { message: "Method not allowed." });
    }

    await verifyAuth(event);
    const files = await getGitHubFilesInDirectory("_posts");
    const posts = await Promise.all(
      files
        .filter((file) => file.type === "file" && file.name.endsWith(".md"))
        .map(async (file) => {
          const fileData = await fetchGitHubFile(file.path);
          const decoded = Buffer.from(fileData.content, "base64").toString("utf8");
          return buildPostMetadata(file.path, decoded);
        })
    );

    const drafts = await getAllDrafts();
    const draftPosts = drafts.map((draft) => ({
      title: draft.title || "Draft",
      fileName: draft.id,
      status: "draft",
      updatedAt: draft.updatedAt || draft.createdAt,
      categories: draft.categories || [],
      tags: draft.tags || []
    }));

    return jsonResponse(200, {
      posts: [...draftPosts, ...posts]
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return jsonResponse(statusCode, { message: error.message || "Unable to fetch posts." });
  }
};
