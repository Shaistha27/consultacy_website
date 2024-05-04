const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const Video = require('../models/video.models.js');

// Route to upload video (only accessible to admins)
router.post('/videos', isAdmin, async (req, res) => {
  try {
    // Logic to upload video
    const { title, description, cloudinaryUrl } = req.body;
    
    // Check if the uploader is admin
    const isAdminUpload = req.user.role === 'admin';

    // Create video object
    const video = new Video({
      title,
      description,
      cloudinaryUrl,
      uploadedByAdmin: isAdminUpload
    });

    // Save video to database
    await video.save();

    res.status(201).json({ message: 'Video uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
