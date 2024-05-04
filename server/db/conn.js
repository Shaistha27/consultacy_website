const mongoose = require("mongoose");
const DB = "mongodb+srv://sana2:sana%402004@cluster0.lsixo8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // authSource: "admin",
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
