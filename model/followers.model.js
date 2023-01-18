const mongoose = require("mongoose");
const FollowersSchema = mongoose.Schema({

  userid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  followers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});
const Followers = mongoose.model("Followers", FollowersSchema);

module.exports = Followers;