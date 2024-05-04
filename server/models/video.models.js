const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cloudinaryUrl: {
    type: String,
    required: true
  },
  uploadedByAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;

