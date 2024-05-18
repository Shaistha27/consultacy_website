const express = require('express');
const {createVideo, deleteVideo, updateVideo} = require("../controllers/video.controllers")
const { getAllVideos } = require("../controllers/fetchVideo.controllers");
const router = express.Router(); 

router.post("/", createVideo);
router.get("/", getAllVideos);
router.put("/:videoId", updateVideo);
router.delete("/:videoId", deleteVideo);

module.exports = router;