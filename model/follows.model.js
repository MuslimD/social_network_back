const mongoose = require("mongoose");
const FollowsSchema = mongoose.Schema({
  userid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  follows: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});
const Follows = mongoose.model("Follows", FollowsSchema);

module.exports = Follows;