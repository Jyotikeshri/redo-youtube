import React from "react";
import Comment from "./Comment";

const CommentBar = ({ commentList, videoId }) => {
  console.log("comment bar lits", commentList);
  return (
    <>
      {commentList
        .filter((q) => q.videoId === videoId)
        .map((c) => {
          return <Comment key={c.id} comment={c} />;
        })}
      {commentList.length === 0 && <p>No comments yet</p>}
    </>
  );
};

export default CommentBar;
