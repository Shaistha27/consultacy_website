const Video = require("../models/video.models");

const getAllVideos = async (req, res) => {
  try {const videos = await Video.find();
    res.status(200).json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllVideos,
};
