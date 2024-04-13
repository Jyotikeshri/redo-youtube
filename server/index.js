import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();
import { main } from "./DB/ConnectDB.js";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

main();
