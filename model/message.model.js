const mongoose = require("mongoose");
const MessageSchema = mongoose.Schema({
  chatsid: { type: mongoose.SchemaTypes.ObjectId, ref: "Chat" },
  text: String,
  data: String,
});
const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
