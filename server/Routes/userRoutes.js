import express from "express";
const router = express.Router();

import { login } from "../Controllers/authController.js";
import {
  getAllChannels,
  updateChannelData,
} from "../Controllers/ChannelController.js";

router.post("/login", login);

// router.patch("/updateChannel/:id", updateChannelData);
// router.get("/api", (req, res) => {
//   res.send("user routes working");
// });
// router.get("/getAllChannels", getAllChannels);

// router.patch("/login/:id", updateChanelData);
{
  console.log("user routes updated");
}

export default router;
