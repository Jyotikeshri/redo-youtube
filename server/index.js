import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();
import { main } from "./DB/ConnectDB.js";

const app = express();

import geoip from "geoip-lite";

app.use(bodyParser.json());

app.use(cors());
app.use("/user", (req, res, next) => {
  user_ip = req.ip;
  console.log("user_ip", user_ip);
  next();
});
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
let user_ip;

const ip = user_ip; // User's IP address

const geo = geoip.lookup(ip);
if (geo) {
  console.log("City:", geo.city);
} else {
  console.log("City not found");
}

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

main();
