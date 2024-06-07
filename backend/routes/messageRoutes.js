const express = require("express");
const {
  getMessage,
  sendMessage,
} = require("../controllers/messageController.js");
// const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// Message routes
router.route("/get/:id").get(getMessage);

router.route("/send").post(sendMessage);

// the id of the person we are sending the message to will be here the message will be in the body.

module.exports = router;
