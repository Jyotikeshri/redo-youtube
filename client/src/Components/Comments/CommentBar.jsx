import React, { useState } from "react";

import Comment from "./Comment";

const CommentBar = ({ commentList }) => {
  return (
    <>
      {commentList.map((c) => {
        return <Comment comment={c} />;
      })}
    </>
  );
};

export default CommentBar;
