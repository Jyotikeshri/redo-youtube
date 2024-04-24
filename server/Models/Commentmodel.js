import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  videoId: String,
  userId: String,
  commentBody: String,
  userCommented: String,
  City: String,
  Like: { type: Number, default: 0 },
  Dislike: { type: Number, default: 0 },
  CommentOn: { type: Date, default: Date.now },
});
export default mongoose.model("Comments", commentSchema);
