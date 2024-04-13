import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Comment = ({ comment }) => {
  const [commentBody, setCommentBody] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };
  const handleLike = () => {
    if (isLike) {
      setIsLike(false);
    } else {
      if (isDislike) {
        setIsDislike(false);
      }
      setIsLike(true);
    }
  };
  const handleDisLike = () => {
    if (isDislike) {
      setIsDislike(false);
    } else {
      if (isLike) {
        setIsLike(false);
      }
      setIsDislike(true);
    }
  };

  const handleEdit = (cId, ctBdy) => {
    setIsEdit(true);
    setCommentBody(ctBdy);
  };
  return (
    <div className="flex flex-col justify-start gap-5 relative mb-5">
      {isEdit && (
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Add a Comment"
              className="bg-black border-b border-white border-1 outline-none px-3 py-2 text-white"
              style={{ width: "1100px" }}
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <button
              className="flex justify-center items-center px-3 py-2 text-white bg-greey rounded-full relative"
              style={{ top: "60px", left: "-150px" }}
            >
              Edit
            </button>
          </div>
        </form>
      )}
      <div className="flex flex-row justify-start items-center gap-4 ">
        <div className="flex justify-center items-center">
          <img
            src="https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/ganesh-2.jpg?resize=1024%2C768&ssl=1"
            alt=""
            width={"50px"}
            height={"50px"}
            className="rounded-full"
          />
        </div>
        <div className="text-white flex justify-center items-center text-lg">
          {comment.username}
        </div>
        <div className="flex justify-center items-center text-md text-cream">
          {comment.posted}
        </div>
      </div>
      <div
        className="flex text-white text-lg justify-start items-center flex-wrap relative"
        style={{ width: "900px", left: "70px" }}
      >
        {comment.text}
      </div>
      <div
        className="flex justify-start items-center flex-row gap-5 relative"
        style={{ left: "70px" }}
      >
        <div
          className="flex justify-center items-center text-white"
          onClick={handleLike}
        >
          {isLike ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
        </div>
        <div
          className="flex justify-center items-center text-white"
          onClick={handleDisLike}
        >
          {isDislike ? <BiSolidDislike size={22} /> : <BiDislike size={22} />}
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            className="py-2 px-3 text-white rounded-full"
            onClick={() => handleEdit(comment._id, comment.text)}
          >
            Edit
          </button>
          <button className="py-2 px-3 text-white rounded-full">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
