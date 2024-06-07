const express = require("express");
const {
  getConversation,
  newConversation,
} = require("../controllers/conversationController");

const router = express.Router();

// Routes for appointments
router.route("/add").post(newConversation); // Create a new conversation

router.route("/get").get(getConversation); // Get Conversation

module.exports = router;
