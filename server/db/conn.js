const mongoose = require("mongoose");
const DB = "mongodb+srv://sana2:sana%402004@cluster0.lsixo8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect= mongoose
  .connect(DB, {
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
 module.exports = connect;