const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true }
);

const Video = mongoose.model("VIDEO", videoSchema);
module.exports = Video;
