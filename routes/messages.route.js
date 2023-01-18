const { Router } = require("express");

const { MessagesController } = require("../controllers/messages.controller");
const router = Router();

router.get("/", MessagesController.getmessage);
router.post("/", MessagesController.postmessage);
module.exports = router;
