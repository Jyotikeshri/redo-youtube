"use strict";
import multer from "multer";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

import fs from "fs";

const uploadToCloudinary = async (file) => {
  try {
    // Save the buffer to a temporary file
    const filePath = `./uploads/${file.originalname}`;
    fs.writeFileSync(filePath, file.buffer);

    // Upload the file to Cloudinary
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: "video",
      folder: "video",
      public_id: file.originalname,
    });

    // Remove the temporary file
    fs.unlinkSync(filePath);

    console.log("Cloudinary upload result", result);
    return result.secure_url;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to upload file to Cloudinary");
  }
};

export { upload, uploadToCloudinary };
