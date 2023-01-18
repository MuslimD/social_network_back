const mongoose = require("mongoose");
const PostShema = mongoose.Schema({
  userid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  photo: String,
  text: String,
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});
const Post = mongoose.model("Post", PostShema);

module.exports = Post;
