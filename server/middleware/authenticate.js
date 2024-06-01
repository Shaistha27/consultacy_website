const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const authenticate = async (req, res, next) => {
  try {
    const token =
      req.cookies.jwtoken ||
      (req.headers.authorization &&
        req.headers.authorization.replace("Bearer ", ""));
    // console.log("token", token);
    // console.log("process.env.SECRET_KEY", process.env.SECRET_KEY);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    // console.log("rootUser", rootUser);
    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized : No token found");
    console.log(err);
  }
};

module.exports = authenticate;
