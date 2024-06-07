// const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema(
//     {
//         participants: [
//             {
//                 userId: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     required: true,
//                 },
//                 userType: {
//                     type: String,
//                     enum: ["Patient", "Doctor", "Admin"], // Add enum values for user type
//                     required: true,
//                 },
//             },
//         ],
//         messages: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Message",
//             },
//         ],
//     },
//     { timestamps: true }
// );

// const Conversation = mongoose.model("Conversation", conversationSchema);

// module.exports = Conversation;

// const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema(
//     {
//         participants: [
//             {
//                 userId: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     refPath: 'participants.userType',
//                     required: true,
//                 },
//                 // userType: {
//                 //     type: String,
//                 //     enum: ['Patient', 'Doctor', 'Admin'], // Add enum values for user type
//                 //     required: true,
//                 // },
//             },
//         ],
//         messages: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Message',
//             },
//         ],
//     },
//     { timestamps: true }
// );

// const Conversation = mongoose.model('Conversation', conversationSchema);

// module.exports = Conversation;

const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;
