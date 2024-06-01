const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");
const {
  createProductController,
} = require("../controllers/product.controllers.js");
const {
  getAllCourses,
  enrollInProduct,
} = require("../controllers/product.controllers.js");
const { getUserEnrollmentStatus } = require("../controllers/users.controllers");

console.log("createProductController:", createProductController);

router.use(express.json());

router.post(
  "/create",
  (req, res, next) => {
    console.log("POST /create endpoint hit");
    next();
  },
  authenticate,
  createProductController
);

router.get("/getCourse", getAllCourses);
router.post("/enroll/:id", authenticate, enrollInProduct);

router.get("/enrollmentStatus", authenticate, getUserEnrollmentStatus);

module.exports = router;
