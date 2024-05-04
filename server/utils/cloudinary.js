import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dwoxvpgr3",
  api_key: "459769312621715",
  api_secret: "mA4WSbRRdBbxSYSVJKTzOwIXF34",
});

const uploadOnClousinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file is uploaded successfully
    console.log("file uploaded succesfully on cloudinary", (await response).url);
    return response;

  } catch (error) {
fs.unlinkSync(localFilePath)  //remove locally saved temp files as the upload operation got failed
return null;
  }
};

export {uploadOnClousinary}

