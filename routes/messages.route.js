const { Router } = require("express");

const { MessagesController } = require("../controllers/messages.controller");
const router = Router();

router.get("/:chatsid", MessagesController.getmessage);
router.post("/:chatsid", MessagesController.postmessage);
module.exports = router;
