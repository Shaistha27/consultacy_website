const jwt = require("jsonwebtoken");
const User = require("../models/user_schema.js");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.teken": token,
    });
    if (!rootUser) {
      {
        throw new Error("User not found");
      }
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    }
  } catch (err) {
    res.status(401).send("Unauthorized : No token found");
    console.log(err);
  }
};
module.exports = authenticate;
