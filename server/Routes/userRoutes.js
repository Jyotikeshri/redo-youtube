import express from "express";
const router = express.Router();

import { login } from "../Controllers/authController.js";
import {
  getAllChannels,
  updateChannelData,
} from "../Controllers/ChannelController.js";
import { getAlllikeVideoController } from "../Controllers/LikeVideoController.js";

router.get("/getAllChannels", getAllChannels);

router.post("/login", login);

router.patch("/updateChannel/:id", updateChannelData);
router.get("/api", (req, res) => {
  res.send("user routes working");
});

router.get("/getAlllikeVideo", getAlllikeVideoController);

export default router;
