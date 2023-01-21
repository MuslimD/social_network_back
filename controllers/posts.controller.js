const Post = require("../model/post.model");
module.exports.PostsController = {
  getpostsuserid: async (req, res) => {
    try {
      const posts = await Post.find({ userid: req.params.userid });
      return res.json(posts);
    } catch (error) {
      return res.json(error.message);
    }
  },
  getposts: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      return res.json(error.message);
    }
  },
  createposts: async (req, res) => {
    try {
      const post = await Post.create({
        userid: req.params.userid,
        photo: req.body.photo,
        text: req.body.text,
        likes: req.body.likes
      });
      return res.json(post);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
