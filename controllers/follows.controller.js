const Follows = require("../model/follows.model");
module.exports.FollowsController = {
  getfollows: async (req, res) => {
    try {
      const follows = await Follows.find({
        userid: req.params.userid,
      }).populate("follows");

      return res.json(follows);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postfollow: async (req, res) => {
    try {
      const follow = await Follows.create({
        userid: req.params.userid,
        follows: req.body.follows,
      });
      return res.json(follow);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
