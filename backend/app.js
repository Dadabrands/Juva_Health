const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
// const hpp = require('hpp');

const AppError = require("./utils/appError");
const vitalsRouter = require("./routes/vitalsRoutes");
const patientRouter = require("./routes/patientRoutes");
const profileRouter = require("./routes/profileRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const messageRouter = require("./routes/messageRoutes.js");
const conversationRouter = require("./routes/conversationRoutes.js");
const imageUploadRouter = require("./routes/imageUploadRoutes.js");

const app = express();

// Apply helmet middleware to set security http headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate Limiting
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});
app.use("/api", limiter);

// body parser || reading data from bosy into req.body
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.json({ limit: "10kb" }));

//Data sanitization against noSQL injection using MongoDB Sanitizer middleware
app.use(mongoSanitize());

//Data sanitization against xxs
app.use(xss());
// cors
app.use(cors());
// Use hpp middleware to prevent parameter pollution
// app.use(hpp());

// test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers)
  next();
});

//routes
app.use("/api/v1/vitals", vitalsRouter);
app.use("/api/v1/patient", patientRouter);
app.use("/api/v1/profiles", profileRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/conversation", conversationRouter);
app.use("/api/v1/file", imageUploadRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
