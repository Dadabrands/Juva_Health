
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Server } = require("socket.io");


dotenv.config({ path: './config.env' });
const app = require('./app');


// Use middleware, routes, and other configurations for the Express app

// Connect to MongoDB
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
    console.log('DB connection successful');
});


// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

// Initializing Socket.IO with the HTTP server
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit('getMessage', data)
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})






// Handle unhandled rejections and exceptions
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down.....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down.....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Export io and httpServer for external use
module.exports = { io };