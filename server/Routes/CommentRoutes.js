import express from "express";
import {
  DislikeCommentController,
  deleteComment,
  editComment,
  getComment,
  likeCommentController,
  postComment,
} from "../Controllers/CommentController.js";
import {
  deleteLikeCommentController,
  getAlllikeCommentController,
  likeCommentController2,
} from "../Controllers/LikedCommentController.js";
import {
  DislikeCommentController2,
  deleteDislikeCommentController,
  getAllDislikeCommentController,
} from "../Controllers/DislikedCommentController.js";

// import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/post", postComment);
router.get("/get", getComment);
router.delete("/delete/:id", deleteComment);
router.patch("/edit/:id", editComment);
router.post("/like/:id", likeCommentController);

router.post("/likeComment", likeCommentController2);
router.get("/getAlllikeComment", getAlllikeCommentController);

router.delete(
  "/deleteLikedComment/:CommentId/:Viewer",

  deleteLikeCommentController
);

router.post("/Dislike/:id", DislikeCommentController);

router.post("/DislikeComment", DislikeCommentController2);
router.get("/getAllDislikeComment", getAllDislikeCommentController);

router.delete(
  "/deleteDislikedComment/:CommentId/:Viewer",

  deleteDislikeCommentController
);

export default router;
