import mongoose from "mongoose";

const DislikedCommentSchema = mongoose.Schema({
  CommentId: { type: String, require: true },
  Viewer: { type: String, require: true },
  DislikedOn: { type: Date, default: Date.now },
});

export default mongoose.model("DislikedComment", DislikedCommentSchema);
