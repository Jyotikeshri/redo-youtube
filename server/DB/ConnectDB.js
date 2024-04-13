import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db_url = process.env.MONGO_URI;

export const main = () => {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("error connecting to mongoose", err);
    });
};
