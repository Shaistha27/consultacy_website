// video.controllers.js

const Video = require("../models/video.models");

// Controller function to fetch all videos
const getAllVideos = async (req, res) => {
  try {
    // Fetch all videos from the database
    const videos = await Video.find();

    // Send the list of videos as a response
    res.status(200).json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllVideos,
};
