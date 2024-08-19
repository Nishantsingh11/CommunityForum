import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_USER_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET
});

const uploadImage = async(localFilePath)=>{
    try{
        if(!localFilePath) return null; 
        // upload file to cloudinary
        const res = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })
        // if file is uploaded successfully then remove the local file
        // remove the file from the local storage
        console.log("File uploaded successfully",res);
        fs.unlinkSync(localFilePath)
        return res.url

    }
    catch(error){
        fs.unlinkSync(localFilePath) //// remove the locally saved temporary file as the upload operation got failed
        return null
    }
}
export {uploadImage}