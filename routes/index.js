const { Router } = require("express");

const router = Router();

router.use("/followers", require("./followers.route"));
router.use("/follows", require("./follows.route"));
router.use("/messages", require("./messages.route"))
router.use("/users", require("./users.route"));
router.use("/posts", require("./posts.route"))
router.use("/comments", require("./comments.route"))
module.exports = router;
