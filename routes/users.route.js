const { Router } = require("express");

const { UsersController } = require("../controllers/users.controller");
const router = Router();
router.post("/upload/avatar", UsersController.uploadavatar)
router.get("/:id", UsersController.getuser);
router.patch("/:id", UsersController.patchuser);
router.post("/", UsersController.userscreate);
router.post("/login", UsersController.login);

module.exports = router;