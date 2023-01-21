const Comment = require("../model/comment.model");
module.exports.CommentsController = {
  getcomments: async (req, res) => {
    try {
      const comment = await Comment.find({
        postsid: req.params.postsid,
      }).populate("userid");
      return res.json(comment);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postcomments: async (req, res) => {
    try {
      const comments = await Comment.create({
        userid: req.body.userid,
        postsid: req.params.postsid,
        commentText: req.body.commentText,
      });
      const comment = await comments.populate("userid");
      res.json(comment);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
