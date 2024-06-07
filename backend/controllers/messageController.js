
// const mongoose = require("mongoose");
// const Conversation = require("../models/conversationModel.js");
// const Message = require("../models/messageModel.js");
// const { io, userSocketMap } = require("../server.js");


// const determineReceiverType = async (receiverId) => {

//     const Patient = require("../models/patientModel.js");
//     const Doctor = require("../models/doctorModel.js");
//     const Admin = require("../models/adminModel.js");

//     // Check if the receiver is a Patient
//     const patient = await Patient.findOne({ _id: receiverId });
//     if (patient) {
//         return "Patient";
//     }

//     // Check if the receiver is a Doctor
//     const doctor = await Doctor.findOne({ _id: receiverId });
//     if (doctor) {
//         return "Doctor";
//     }

//     // Check if the receiver is an Admin
//     const admin = await Admin.findOne({ _id: receiverId });
//     if (admin) {
//         return "Admin";
//     }
//     return null;
// };



// exports.sendMessage = async (req, res) => {
//     // Function to get sender ID based on user's role
//     const getSenderID = (req) => {
//         if (req.patient) {
//             return req.patient.id; // If user is a patient
//         } else if (req.doctor) {
//             return req.doctor.id; // If user is a doctor
//         } else if (req.admin) {
//             return req.admin.id; // If user is an admin
//         } else {
//             return null; // If user role is not recognized
//         }
//     };

//     try {
//         const { message } = req.body;
//         const { id: receiverId } = req.params;
//         const senderId = getSenderID(req); // Get sender ID dynamically based on role
//         const senderType = req.patient ? "Patient" : req.doctor ? "Doctor" : req.admin ? "Admin" : null;

//         if (!senderId || !senderType) {
//             return res.status(403).json({ error: "Invalid user role" });
//         }

//         // Determine the receiver's type dynamically
//         const receiverType = await determineReceiverType(receiverId);

//         // Create the message
//         const newMessage = new Message({
//             sender: senderId,
//             receiver: receiverId,
//             message: message,
//             senderType: senderType,
//             receiverType: receiverType,
//         });

//         // Save the message
//         const savedMessage = await newMessage.save();

//         // Get the receiver's socket ID based on receiver type
//         const receiverSocketId = getReceiverSocketId(receiverId, receiverType);

//         // Emit the new message event to the receiver's socket if the socket ID exists
//         if (receiverSocketId) {
//             io.to(receiverSocketId).emit("newMessage", savedMessage);
//         }

//         // Check if a conversation already exists between the sender and receiver
//         let conversation = await Conversation.findOne({
//             "participants.userId": { $all: [senderId, receiverId] },
//         });

//         if (!conversation) {
//             // If no conversation exists, create a new one
//             conversation = await Conversation.create({
//                 participants: [{ userId: senderId, userType: senderType }, { userId: receiverId, userType: receiverType }],
//                 messages: [savedMessage._id],
//             });
//         } else {
//             // If conversation exists, push the new message to the existing conversation
//             conversation.messages.push(savedMessage._id);
//             await conversation.save();
//         }

//         // Send success response
//         res.status(201).json(savedMessage);
//     } catch (error) {
//         console.log("Error in sendMessage controller: ", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };


// exports.sendMessage = async (req, res) => {

//     console.log(`${req}`)
//     // Function to get sender ID based on user's role
//     const getSenderID = (req) => {
//         if (req.patient) {
//             return req.patient.id; // If user is a patient
//         } else if (req.doctor) {
//             return req.doctor.id; // If user is a doctor
//         } else if (req.admin) {
//             return req.admin.id; // If user is an admin
//         } else {
//             return null; // If user role is not recognized
//         }
//     };

//     try {
//         const { message } = req.body;
//         const { id: receiverId } = req.params;
//         if (!receiverId) {
//             return res.status(400).json({ error: "Receiver ID is missing" });
//         }
//         const senderId = getSenderID(req);
//         const senderType = req.patient ? "Patient" : req.doctor ? "Doctor" : req.admin ? "Admin" : null;

//         if (!senderId || !senderType) {
//             return res.status(403).json({ error: "Invalid user role" });
//         }

//         // Determine the receiver's type dynamically
//         const receiverType = await determineReceiverType(receiverId);

//         let conversation = await Conversation.findOne({
//             participants: { $all: [{ userId: senderId }, { userId: receiverId }] },
//         });

//         if (!conversation) {
//             // Determine the user types
//             const senderType = req.patient ? "Patient" : req.doctor ? "Doctor" : req.admin ? "Admin" : null;
//             const receiverType = "Patient"; // Assuming receiver is always a patient for now

//             // Create the conversation with participant details including userType
//             conversation = await Conversation.create({
//                 participants: [
//                     { userId: senderId, userType: senderType },
//                     { userId: receiverId, userType: receiverType }
//                 ],
//             });
//         }

//         const newMessage = new Message({
//             senderId,
//             receiverId,
//             message,
//             senderType: senderType, // Include senderType
//             receiverType: receiverType, // Include receiverType
//         });

//         if (newMessage) {
//             conversation.messages.push(newMessage._id);
//         }


//         // this will run in parallel
//         await Promise.all([conversation.save(), newMessage.save()]);

//         // SOCKET IO FUNCTIONALITY WILL GO HERE
//         const receiverSocketId = userSocketMap[receiverId]
//         if (receiverSocketId) {
//             // io.to(<socket_id>).emit() used to send events to specific client
//             io.to(receiverSocketId).emit("newMessage", newMessage);
//         }

//         res.status(201).json(newMessage);
//     } catch (error) {
//         console.log("Error in sendMessage controller: ", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };




// exports.getMessages = async (req, res) => {
//     try {
//         const { id: userToChatId } = req.params;
//         const senderId = req.user._id;

//         const conversation = await Conversation.findOne({
//             participants: { $all: [senderId, userToChatId] },
//         }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

//         if (!conversation) return res.status(200).json([]);

//         const messages = conversation.messages;

//         res.status(200).json(messages);
//     } catch (error) {
//         console.log("Error in getMessages controller: ", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };



const Message = require("../models/messageModel.js");
const Conversation  = require('../models/conversationModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

exports.sendMessage = catchAsync(async (req, res, next) => {
    const { body } = req;
    const newMessage = new Message(body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(body.conversationId, { message: body.text });
  
    if (!newMessage) {
      return next(new AppError('Failed to send message', 500));
    }
  
    res.status(200).json("Message has been sent successfully");
  });
  
  exports.getMessage = catchAsync(async (req, res, next) => {
    const messages = await Message.find({ conversationId: req.params.id });
  
    if (!messages) {
      return next(new AppError('Messages not found', 404));
    }
  
    res.status(200).json(messages);
  });