const {
  jsonResponse,
  verifyAuth,
  fetchGitHubFile,
  createGitHubFile,
  updateGitHubFile,
  deleteDraftFromFirestore
} = require("./helpers");

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return jsonResponse(405, { message: "Method not allowed." });
    }

    await verifyAuth(event);
    const payload = JSON.parse(event.body || "{}");
    const { fileName, content, draftId } = payload;

    if (!fileName || !content) {
      return jsonResponse(400, { message: "fileName and content are required." });
    }

    let response;
    try {
      const existing = await fetchGitHubFile(fileName);
      response = await updateGitHubFile(fileName, content, existing.sha, `Update post ${fileName}`);
    } catch (error) {
      response = await createGitHubFile(fileName, content, `Create post ${fileName}`);
    }

    if (draftId) {
      await deleteDraftFromFirestore(draftId);
    }

    return jsonResponse(200, { message: "Post published successfully.", data: response });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return jsonResponse(statusCode, { message: error.message || "Unable to publish post." });
  }
};
