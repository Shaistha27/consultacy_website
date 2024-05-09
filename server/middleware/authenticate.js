const User = require("../models/user.models.js");
const Admin = require("../models/admin.models.js");
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ _id: verifyToken._id });
    const admin = await Admin.findOne({ _id: verifyToken._id });

    if (!user && !admin) {
      throw new Error("User not found");
    }

    if (user) {
      req.token = token;
      req.user = user;
      req.userID = user._id;
    } else {
      req.token = token;
      req.admin = admin;
      req.adminID = admin._id;
    }

    next();
  } catch (err) {
    res.status(401).send("Unauthorized : No token found");
    console.log(err);
  }
};
