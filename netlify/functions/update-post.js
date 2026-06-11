const {
  jsonResponse,
  verifyAuth,
  fetchGitHubFile,
  createGitHubFile,
  updateGitHubFile,
  saveDraftToFirestore,
  deleteDraftFromFirestore
} = require("./helpers");

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return jsonResponse(405, { message: "Method not allowed." });
    }

    await verifyAuth(event);
    const payload = JSON.parse(event.body || "{}");
    const { fileName, content, status, metadata, draftId } = payload;

    if (status === "draft") {
      if (!metadata) {
        return jsonResponse(400, { message: "Draft metadata is required." });
      }
      const finalDraftId = draftId || fileName || `draft-${metadata.slug || Date.now()}`;
      await saveDraftToFirestore(finalDraftId, metadata);
      return jsonResponse(200, { message: "Draft saved successfully.", draftId: finalDraftId });
    }

    if (!fileName || !content) {
      return jsonResponse(400, { message: "fileName and content are required for publishing." });
    }

    try {
      const existing = await fetchGitHubFile(fileName);
      await updateGitHubFile(fileName, content, existing.sha, `Update post ${fileName}`);
    } catch (error) {
      await createGitHubFile(fileName, content, `Create post ${fileName}`);
    }

    if (draftId) {
      await deleteDraftFromFirestore(draftId);
    }

    return jsonResponse(200, { message: "Post updated successfully." });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return jsonResponse(statusCode, { message: error.message || "Unable to update post." });
  }
};
