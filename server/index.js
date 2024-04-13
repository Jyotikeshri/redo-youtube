import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();
import { main } from "./DB/ConnectDB.js";

const app = express();

import geoip from "geoip-lite";
const ip = "117.98.4.130"; // User's IP address

const geo = geoip.lookup(ip);
if (geo) {
  console.log("City:", geo.city);
} else {
  console.log("City not found");
}

app.use(bodyParser.json());

app.use(cors());
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  const user_ip = req.ip;
  console.log("user ip", user_ip);
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

main();
