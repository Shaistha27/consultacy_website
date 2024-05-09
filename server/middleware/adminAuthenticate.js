const adminAuthenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    // Check if the user is an admin
    const isAdmin = await User.findOne({ _id: user._id, isAdmin: true });
    if (!isAdmin) {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};