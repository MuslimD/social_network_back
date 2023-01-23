const Message = require("../model/message.model");
module.exports.MessagesController = {
  getmessage: async (req, res) => {
    
    try {
      const messages = await Message.find({
        chatsid: req.params.chatsid,
        
      });
      return res.json(messages);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postmessage: async (req, res) => {
    try {
      const message = await Message.create({
        chatsid: req.params.chatsid,
        text: req.body.text,
        data: req.body.data,
      });
      return res.json(message);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
