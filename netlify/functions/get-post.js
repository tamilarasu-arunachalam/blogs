const {
  jsonResponse,
  verifyAuth,
  fetchGitHubFile,
  buildPostMetadata,
  getDraftFromFirestore
} = require("./helpers");

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "GET") {
      return jsonResponse(405, { message: "Method not allowed." });
    }

    await verifyAuth(event);
    const params = event.queryStringParameters || {};

    if (params.draftId) {
      const draft = await getDraftFromFirestore(params.draftId);
      return jsonResponse(200, { post: draft });
    }

    if (!params.post) {
      return jsonResponse(400, { message: "Missing post identifier." });
    }

    const fileData = await fetchGitHubFile(params.post);
    const decoded = Buffer.from(fileData.content, "base64").toString("utf8");
    const metadata = buildPostMetadata(params.post, decoded);
    return jsonResponse(200, { post: { ...metadata, rawContent: decoded } });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return jsonResponse(statusCode, { message: error.message || "Unable to fetch post." });
  }
};
