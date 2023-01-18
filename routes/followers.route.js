const { Router } = require("express");

const { FollowersController } = require("../controllers/followers.controller");
const router = Router();

router.get("/:userid", FollowersController.getfollowers);
router.post("/:userid", FollowersController.postfollower);

module.exports = router;