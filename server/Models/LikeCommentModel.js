import mongoose from "mongoose";

const likedCommentSchema = mongoose.Schema({
  CommentId: { type: String, require: true },
  Viewer: { type: String, require: true },
  LikedOn: { type: Date, default: Date.now },
});

export default mongoose.model("LikedComment", likedCommentSchema);
