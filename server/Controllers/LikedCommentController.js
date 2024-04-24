import likedComment from "../Models/LikeCommentModel.js";
import mongoose from "mongoose";

export const likeCommentController2 = async (req, res) => {
  const likedCommentData = req.body;

  const addToLikedComment = new likedComment(likedCommentData);

  try {
    await addToLikedComment.save();
    const commentList = await likedComment.find();
    res.status(200).json(commentList);
    // console.log("DOne")
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAlllikeCommentController = async (req, res) => {
  try {
    const files = await likedComment.find();

    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteLikeCommentController = async (req, res) => {
  const { CommentId: CommentId, Viewer: Viewer } = req.params;

  try {
    await likedComment.findOneAndDelete({
      CommentId: CommentId,
      Viewer: Viewer,
    });
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
