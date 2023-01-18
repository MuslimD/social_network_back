const mongoose = require("mongoose");
const MessageSchema = mongoose.Schema({
  sender: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  recipient: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  data: String,
});
const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
