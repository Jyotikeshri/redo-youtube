import express from "express";
import { getAllvideos, uploadVideo } from "../Controllers/VideoController.js";
import { upload } from "../Helpers/FileHelper.js";
import { likeController } from "../Controllers/LikeController.js";
import {
  deleteLikeVideoController,
  getAlllikeVideoController,
  likeVideoController,
} from "../Controllers/LikeVideoController.js";
import {
  deletewatchLaterController,
  getAllwatchLaterController,
  watchLaterController,
} from "../Controllers/WatchLaterController.js";
import { viewController } from "../Controllers/ViewsController.js";
import {
  HistoryController,
  deleteHistoryController,
  getAllHistoryController,
} from "../Controllers/HistoryController.js";

const routes = express.Router();

routes.get("/getAlllikeVideo", getAlllikeVideoController);

routes.post(
  "/uploadVideo",

  upload.single("file"),
  (req, res, next) => {
    console.log("upload route triggered after file", req.file);
    next(); // Call next() to pass the request to the next middleware
  },
  uploadVideo
);

routes.get("/getvideos", getAllvideos);
routes.patch("/like/:id", likeController);
routes.patch("/view/:id", viewController);

routes.post("/likeVideo", likeVideoController);

routes.delete(
  "/deleteLikedVideo/:videoId/:Viewer",

  deleteLikeVideoController
);

routes.post("/watchLater", watchLaterController);
routes.get("/getAllwatchLater", getAllwatchLaterController);
routes.delete(
  "/deleteWatchlater/:videoId/:Viewer",

  deletewatchLaterController
);

routes.post("/History", HistoryController);
routes.get("/getAllHistory", getAllHistoryController);
routes.delete("/deleteHistory/:userId", deleteHistoryController);

export default routes;
