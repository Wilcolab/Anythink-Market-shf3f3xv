/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 *
 * Endpoints:
 * - GET /api/comments: Retrieve all comments.
 * - DELETE /api/comments/:id: Delete a comment by its ID.
 *
 * @requires express
 * @requires mongoose
 * @requires Comment (Mongoose model)
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey Github Copliot, please write the following endpoints for comments:
// 1. GET /api/comments - Get all comments
// 2. GET /api/comments/:id - Get a comment by ID
// 3. POST /api/comments - Create a new comment
// 4. PUT /api/comments/:id - Update a comment by ID
// 5. DELETE /api/comments/:id - Delete a comment by ID

// 1. GET /api/comments - Get all comments
router.get("/", async (req, res) => {
    Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(500).json({ error: "Failed to fetch comments" }));
}); // <-- Fixed missing parenthesis

// add another endpoint for deleting a comment

router.delete("/:id", async (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Comment deleted" }))
    .catch(err => res.status(500).json({ error: "Failed to delete comment" }));
}); // <-- Fixed missing parenthesis