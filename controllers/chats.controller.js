const Chat = require("../model/chat.model");
module.exports.ChatsController = {
  getchats: async (req, res) => {
    try {
      const chats = await Chat.find({
        $or: [{ recipient: req.params.userid }, { sender: req.params.userid }],
      })
        .populate("recipient")
        .populate("sender");
      return res.json(chats);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postchat: async (req, res) => {
    try {
      const chat = await Chat.findOne({
        $and: [
          { recipient: [req.params.sender, req.body.recipient] },
          { sender: [req.params.sender, req.body.recipient] },
        ],
      })
        .populate("recipient")
        .populate("sender");
      if (chat) {
        return res.json(chat);
      }
      const newchat = await Chat.create({
        sender: req.params.sender,
        recipient: req.body.recipient,
      })
        .populate("recipient")
        .populate("sender");
      return await res.json(newchat);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
