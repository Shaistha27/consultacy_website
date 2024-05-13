const cloudinary = require('cloudinary').v2;
const cloud_name = 'dwoxvpgr3';
const api_key = '459769312621715';
const api_secret = 'mA4WSbRRdBbxSYSVJKTzOwIXF34';
const secure = "true";

const generateSignature = (req, res, next)=>{
    const {folder} = req.body;

    if(!folder){
        res.status(400);
        return next(new Error("folder name is required"));
    }
    try {
        const timestamp = Math.round((new Date).getTime / 1000);
        const signature = cloudinary.utils.api_sign_request({
            timestamp,
            folder
        }, api_secret);
        res.status
    } catch (error) {
        console.log(error);
        res.status(500);
        next(error);
    }
} 

module.exports = generateSignature;