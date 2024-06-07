const express = require("express");
const multer = require("multer");
const {
  uploadImage,
  getImage,
} = require("../controllers/imageUploadController");

const router = express.Router();

// Set up multer for file upload
const storage = multer.memoryStorage(); // or you can use diskStorage
const upload = multer({ storage });

// Routes for image upload and retrieval
router.route("/upload").post(upload.single("file"), uploadImage);
router.route("/:filename").get(getImage);

module.exports = router;
