const Video = require("../models/video.models");

const createVideo = async (req, res, next) => {
  const { title, description, videoUrl } = req.body;

  if (!videoUrl) {
    res.status(400);
    return next(new Error("videoUrl field is required!"));
  }

  const existingVideo = await Video.findOne({ title });
  if (existingVideo) {
    res.status(400);
    return next(new Error("A video with this title already exists!"));
  }

  try {
    const video = await Video.create({
      title,
      description,
      videoUrl,
    });

    res.status(201).json({ success: true, video });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Failed to create video" });

    next(error);
  }
};

const deleteVideo = async (req, res, next) => {
  const videoId = req.params.videoId;

  try {
    const deletedVideo = await Video.findByIdAndDelete(videoId);
    if (!deletedVideo) {
      res.status(404);
      return next(new Error("Video not found"));
    }
    res.json({ success: true, message: "Video deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to delete video" });
    next(error);
  }
};

const updateVideo = async (req, res, next) => {
  const { videoId } = req.params;
  const { title, description } = req.body;

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { title, description },
      { new: true }
    );

    if (!updatedVideo) {
      res.status(404);
      return next(new Error("Video not found"));
    }
    res.json({ success: true, video: updatedVideo });
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(500).json({ success: false, error: "Failed to update video" });
    // Pass error to the error handling middleware
    next(error);
  }
};

module.exports = { createVideo, deleteVideo, updateVideo };
