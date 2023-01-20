const mongoose = require("mongoose");
const CommentShema = mongoose.Schema({
 postsid: { type: mongoose.SchemaTypes.ObjectId, ref: "Post" },
  userid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
 commentText: String
});
const Comment = mongoose.model("Comment", CommentShema);

module.exports = Comment;