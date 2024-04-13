import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
const LikeDislikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
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

  return (
    <div className="flex flex-row items-center justify-center">
      <button className="flex items-center justify-center flex-row bg-greey text-white gap-3 px-3 py-2 rounded-full">
        <div
          className="flex justify-center items-center gap-2"
          onClick={handleLike}
        >
          {isLike ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
          18K
        </div>
        <div className="h-6 w-1 bg-white"></div>
        <div
          className="flex justify-center items-center gap-2"
          onClick={handleDisLike}
        >
          {isDislike ? <BiSolidDislike size={22} /> : <BiDislike size={22} />}
        </div>
      </button>
    </div>
  );
};

export default LikeDislikeButton;
