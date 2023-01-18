const { Router } = require("express");

const { UsersController } = require("../controllers/users.controller");
const router = Router();

router.post("/", UsersController.userscreate);
router.post("/login", UsersController.login);
router.get("/:id", UsersController.getuser);
module.exports = router;