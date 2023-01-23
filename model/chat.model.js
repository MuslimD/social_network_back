const mongoose = require("mongoose");
const ChatShema = mongoose.Schema({
  sender: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  recipient: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});
const Chat = mongoose.model("Chat", ChatShema);

module.exports = Chat;
