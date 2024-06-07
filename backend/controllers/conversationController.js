const Conversation = require("../models/conversationModel.js");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync.js");

// Create a new conversation
exports.newConversation = catchAsync(async (req, res, next) => {
  const { senderId, receiverId } = req.body;

  const existingConversation = await Conversation.findOne({
    members: { $all: [receiverId, senderId] },
  });

  if (existingConversation) {
    return next(new AppError("Conversation already exists", 400));
  }

  const newConversation = new Conversation({
    members: [senderId, receiverId],
  });

  const savedConversation = await newConversation.save();
  res.status(200).json(savedConversation);
});

// Get conversation
exports.getConversation = catchAsync(async (req, res, next) => {
  const { senderId, receiverId } = req.body;

  const conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    return next(new AppError("Conversation not found", 404));
  }

  res.status(200).json(conversation);
});
