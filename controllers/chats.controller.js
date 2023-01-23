const Chat = require("../model/chat.model");
module.exports.ChatsController = {
  getchats: async (req, res) => {
    try {
      const chats = await Chat.find({
        $or: [{ recipient: req.params.userid }, { sender: req.params.userid }],
      }).populate("recipient").populate("sender")
      return res.json(chats);
      
    } catch (error) {
      return res.json(error.message);
    }
  },
  postchat: async (req, res) => {
    try {
      const chat = await Chat.create({
        sender: req.params.sender,
        recipient: req.body.recipient,

      });
      return res.json(chat);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
