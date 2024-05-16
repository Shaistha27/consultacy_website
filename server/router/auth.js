const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");
const cookieParser = require('cookie-parser');

router.use(cookieParser())
router.get("/profile", authenticate, (req, res) => {
    console.log("About");
    res.send(req.rootUser);
  });
  
  router.get("/getData", authenticate, (req, res) => {
    res.json(req.rootUser);
    // console.log(req.rootUser.name);
  });

  module.exports = router;