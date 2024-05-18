// const Video = require("../models/video.models");

// const createVideo = async (req, res, next) => {
//     const { title, description, videoUrl } = req.body;
  
//     // Check if videoUrl is provided
//     if (!videoUrl) {
//       res.status(400);
//       return next(new Error("videoUrl field is required!"));
//     }
  
//     // Check if the title is unique
//     const existingVideo = await Video.findOne({ title });
//     if (existingVideo) {
//       res.status(400);
//       return next(new Error("A video with this title already exists!"));
//     }
  
//     try {
//       // Create a new video document
//       const video = await Video.create({
//         title,
//         description,
//         videoUrl
//       });
  
//       // Send success response with the created video document
//       res.status(201).json({ success: true, video });
//     } catch (error) {
//       console.log(error);
//       // Send error response
//       res.status(500).json({ success: false, error: "Failed to create video" });
//       // Pass error to the error handling middleware
//       next(error);
//     }
//   };
  
//   module.exports = createVideo;

const Video = require("../models/video.models");

const createVideo = async (req, res, next) => {
    const { title, description, videoUrl } = req.body;
  
    // Check if videoUrl is provided
    if (!videoUrl) {
      res.status(400);
      return next(new Error("videoUrl field is required!"));
    }
  
    // Check if the title is unique
    const existingVideo = await Video.findOne({ title });
    if (existingVideo) {
      res.status(400);
      return next(new Error("A video with this title already exists!"));
    }
  
    try {
      // Create a new video document
      const video = await Video.create({
        title,
        description,
        videoUrl
      });
  
      // Send success response with the created video document
      res.status(201).json({ success: true, video });
    } catch (error) {
      console.log(error);
      // Send error response
      res.status(500).json({ success: false, error: "Failed to create video" });
      // Pass error to the error handling middleware
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
    // Find the video by its ID and update its title and description
    const updatedVideo = await Video.findByIdAndUpdate(videoId, { title, description }, { new: true });

    // Check if the video exists and was updated successfully
    if (!updatedVideo) {
      res.status(404);
      return next(new Error("Video not found"));
    }

    // Send success response with the updated video document
    res.json({ success: true, video: updatedVideo });
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(500).json({ success: false, error: "Failed to update video" });
    // Pass error to the error handling middleware
    next(error);
  }
};

  
  module.exports = {createVideo,deleteVideo, updateVideo};