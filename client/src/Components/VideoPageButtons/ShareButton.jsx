import React from "react";
import { IoIosShareAlt } from "react-icons/io";

const ShareButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <button className="px-3 py-2 bg-greey text-white text-md flex justify-center items-center gap-3 rounded-full">
        <IoIosShareAlt size={22} />
        Share
      </button>
    </div>
  );
};

export default ShareButton;
