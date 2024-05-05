import DislikedComment from "../Models/DisLikedCommentModel.js";
import mongoose from "mongoose";

export const DislikeCommentController2 = async (req, res) => {
  const DislikedCommentData = req.body;

  const addToDislikedComment = new DislikedComment(DislikedCommentData);

  try {
    await addToDislikedComment.save();
    const commentList = await DislikedComment.find();
    res.status(200).json(commentList);
    // console.log("DOne")
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllDislikeCommentController = async (req, res) => {
  try {
    const files = await DislikedComment.find();

    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteDislikeCommentController = async (req, res) => {
  const { CommentId: CommentId, Viewer: Viewer } = req.params;

  try {
    await DislikedComment.findOneAndDelete({
      CommentId: CommentId,
      Viewer: Viewer,
    });
    console.log("comment dislike removed");
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
