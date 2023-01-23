const { Router } = require("express");

const { ChatsController } = require("../controllers/chats.controller");
const router = Router();

router.get("/:userid", ChatsController.getchats);
router.post("/:sender", ChatsController.postchat);
module.exports = router;