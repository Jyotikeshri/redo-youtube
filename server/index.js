// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import bodyParser from "body-parser";
// import userRoutes from "./Routes/userRoutes.js";
// import videoRoutes from "./Routes/VideoRoutes.js";
// import path from "path";
// import CommentRoutes from "./Routes/CommentRoutes.js";

// dotenv.config();
// import { main } from "./DB/ConnectDB.js";

// const app = express();

// app.use(bodyParser.json());
// app.use(express.json({ limit: "100mb" }));
// app.use(express.urlencoded({ limit: "100mb", extended: true }));
// app.use("/uploads", express.static(path.join("uploads")));

// app.use(cors());

// app.use("/user", userRoutes);
// app.use("/video", videoRoutes);
// app.use("/comment", CommentRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

// main();

"use strict";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";
import videoRoutes from "./Routes/VideoRoutes.js";
import path from "path";
import CommentRoutes from "./Routes/CommentRoutes.js";

import multer from "multer";

dotenv.config();
import { main } from "./DB/ConnectDB.js";

const app = express();

// Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// Multer upload middleware
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "uploads",
//     allowed_formats: ["mp4"],
//     format: async (req, file) => "mp4",
//     public_id: (req, file) => file.originalname,
//   },
// });
// const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join("uploads")));

app.use(cors());

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", CommentRoutes);

// Route for uploading video to Cloudinary
// app.post("/uploadVideo", upload.single("video"), async (req, res) => {
//   try {
//     if (!req.file || !req.file.originalname.endsWith(".mp4")) {
//       return res.status(400).json({ message: "Please upload a '.mp4' video file" });
//     }

//     // You can save the file metadata or other relevant data to your database here

//     res.status(200).json({ message: "File uploaded successfully", url: req.file.path });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "An error occurred during file upload" });
//   }
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

main();
