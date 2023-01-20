const Comment = require("../model/comment.model");
module.exports.CommentsController = {
  getcomments: async (req, res) => {
    try {
      const comment = await Comment.find({userid: req.params.userid});
      return res.json(comment);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postcomments: async (req, res) => {
    try {
      const comment = await Comment.create({
        userid: req.body.userid,
        postsid: req.params.postsid,
        commentText: req.body.commenText
      });
      return res.json(comment);
    } catch (error) {
      return res.json(error.message);
    }
  },
};