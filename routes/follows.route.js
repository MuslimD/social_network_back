const { Router } = require("express");

const { FollowsController } = require("../controllers/follows.controller");
const router = Router();

router.get("/:userid", FollowsController.getfollows);
router.post("/:userid", FollowsController.postfollow);
module.exports = router;