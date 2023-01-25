const Followers = require("../model/followers.model");
module.exports.FollowersController = {
  getfollowers: async (req, res) => {
    try {
      const followers = await Followers.findOne({
        userid: req.params.userid,
      }).populate("followers");
      return res.json(followers);
    } catch (error) {
      return res.json(error.message);
    }
  },
  postfollower: async (req, res) => {
    try {
      const follower = await Followers.create({
        userid: req.params.userid,
        followers: req.body.followers,
      });
      return res.json(follower);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
