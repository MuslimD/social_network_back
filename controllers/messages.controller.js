const Message = require("../model/message.model");
module.exports.MessagesController = {
  getmessage: async (req, res) => {
    try {
      const messages = await Message.find({sender: req.params.id} || {recipient: req.params.id});
      return res.json(messages);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postmessage: async (req, res) => {
    try {
      const message = await Message.create({
        sender: req.params.sender,
        recipient: req.body.recipient,
        text: req.body.text,
        data: req.body.data,
      });
      return res.json(message);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
