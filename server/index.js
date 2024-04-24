import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";
import videoRoutes from "./Routes/VideoRoutes.js";
import path from "path";
import CommentRoutes from "./Routes/CommentRoutes.js";

dotenv.config();
import { main } from "./DB/ConnectDB.js";

const app = express();

app.use(bodyParser.json());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));

app.use(cors());

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", CommentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

main();
