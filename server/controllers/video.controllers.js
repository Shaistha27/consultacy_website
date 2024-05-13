// const Video = require("../models/video.models");

// const createVideo = async(req, res, next)=> {
//     const {videoUrl} = req.body;

//     if(!videoUrl){
//         res.status(400);
//         return next(new Error("videoUrl field is required!"));
//     }
//     try {
//         const video = await Video.create({
//             videoUrl
//         });

//         res.status(201).json({success: true, video});
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//         next(error);
//     }
// }
// module.exports = createVideo;

const Video = require("../models/video.models");

// const createVideo = async (req, res, next) => {
//     const { title, description, videoUrl } = req.body;

//     // Check if videoUrl is provided
//     if (!videoUrl) {
//         res.status(400);
//         return next(new Error("videoUrl field is required!"));
//     }

//     try {
//         // Create a new video document
//         const video = await Video.create({
//             title,
//             description,
//             videoUrl
//         });

//         // Send success response with the created video document
//         res.status(201).json({ success: true, video });
//     } catch (error) {
//         console.log(error);
//         // Send error response
//         res.status(500).json({ success: false, error: "Failed to create video" });
//         // Pass error to the error handling middleware
//         next(error);
//     }
// };

// module.exports = createVideo;

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
  
  module.exports = createVideo;