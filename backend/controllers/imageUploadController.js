const grid = require("gridfs-stream");
const mongoose = require("mongoose");

const url = "http://localhost:8000";

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

exports.uploadImage = (req, res) => {
  if (!req.file) return res.status(404).json("File not found");

  const imageUrl = `${url}/file/${req.file.filename}`;

  res.status(200).json(imageUrl);
};

exports.getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
