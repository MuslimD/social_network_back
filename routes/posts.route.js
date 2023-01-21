const { Router } = require("express");

const { PostsController } = require("../controllers/posts.controller");
const router = Router();

router.get("/", PostsController.getposts);
router.get("/:userid", PostsController.getpostsuserid);
router.post("/:userid", PostsController.createposts);
module.exports = router;