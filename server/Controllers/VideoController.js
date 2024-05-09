import videoFiles from "../Models/VideoFile.js";
import { videoTranscoder } from "../uploads/TranscodeVideoController.js";
export const uploadVideo = async (req, res, next) => {
  if (req.file === undefined) {
    res.status(404).json({ message: "plz Upload a '.mp4' video file only " });
  } else {
    try {
      await videoTranscoder(req.file.originalname, req.file.path);
      const file = new videoFiles({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        videoChannel: req.body.channel,
        Uploader: req.body.Uploader,
        image: req.body.image,
        desc: req.body.desc,
        dislike: req.body.dislike,
      });
      console.log(file);
      await file.save();

      res.status(200).send("File uploded successfully");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

export const getAllvideos = async (req, res) => {
  try {
    const files = await videoFiles.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// import cloudinary from "cloudinary";
// import videoFiles from "../Models/VideoFile.js";
// import dotenv from "dotenv";

// dotenv.config();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// export const uploadVideo = async (req, res, next) => {
//   if (req.file === undefined) {
//     res.status(404).json({ message: "Please upload a '.mp4' video file only" });
//   } else {
//     try {
//       console.log("requested video", req.file);
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         resource_type: "video",
//         folder: "video",
//         public_id: req.file.originalname.split(".")[0], // Optional: Specify a folder in Cloudinary to store the video
//       });

//       console.log("cloudinary result", result);

//       const file = new videoFiles({
//         videoTitle: req.body.title,
//         fileName: req.file.originalname,
//         filePath: result.secure_url, // Use the secure URL provided by Cloudinary
//         fileType: req.file.mimetype,
//         fileSize: req.file.size,
//         videoChannel: req.body.channel,
//         Uploader: req.body.Uploader,
//         image: req.body.image,
//         desc: req.body.desc,
//         dislike: req.body.dislike,
//       });
//       console.log(file);
//       await file.save();

//       res.status(200).send("File uploaded successfully");
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   }
//   next();
// };

// export const getAllvideos = async (req, res) => {
//   try {
//     const files = await videoFiles.find();
//     res.status(200).send(files);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// };
