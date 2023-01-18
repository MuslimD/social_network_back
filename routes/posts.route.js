const { Router } = require("express");

const { PostsController } = require("../controllers/posts.controller");
const router = Router();

router.get("/:userid", PostsController.getposts);
router.post("/:userid", PostsController.createposts);
module.exports = router;