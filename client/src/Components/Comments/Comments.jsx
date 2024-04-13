import React from "react";
import CommentBar from "./CommentBar";

const Comments = () => {
  const commentList = [
    {
      username: "sapna",
      user_id: "1",
      text: "nice video",
      _id: 1,
      likes: 1,
      dislikes: 2,
      posted: "1 hour ago",
    },
    {
      username: "sapna",
      user_id: "1",
      text: "nice video",
      _id: 2,
      likes: 1,
      dislikes: 2,
      posted: "1 hour ago",
    },
    {
      username: "sapna",
      user_id: "1",
      text: "nice video",
      _id: 3,
      likes: 1,
      dislikes: 2,
      posted: "1 hour ago",
    },
    {
      username: "sapna",
      user_id: "1",
      text: "nice video",
      _id: 4,
      likes: 1,
      dislikes: 2,
      posted: "1 hour ago",
    },
  ];
  return (
    <div className="flex flex-col justify-start gap-7 mt-7">
      <div className="text-2xl font-bold text-white flex justify-start items-center">
        Comments
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-start gap-7 mb-8">
          <div className="flex justify-center items-center">
            {" "}
            <img
              src="https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/ganesh-2.jpg?resize=1024%2C768&ssl=1"
              alt=""
              className="rounded-full object-cover"
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Add a Comment"
              className="bg-black border-b border-white border-1 outline-none px-3 py-2 text-white"
              style={{ width: "1100px" }}
            />
            <button
              className="flex justify-center items-center px-3 py-2 text-white bg-greey rounded-full relative"
              style={{ top: "60px", left: "-150px" }}
            >
              Comment
            </button>
          </div>
        </div>

        <CommentBar commentList={commentList} />
      </div>
    </div>
  );
};

export default Comments;
