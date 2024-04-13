import React from "react";
import { GoVideo } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";

const ShrinkedSidebar = () => {
  return (
    <div className="flex-col text-white w-100 h-100 hidden md:flex">
      <div className="flex-col justify-center p-1">
        <div className="flex-col justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
          <div className="flex justify-center items-center">
            <IoHome size={22} />
          </div>
          <div className="flex justify-center items-center">Home</div>
        </div>
        <div className="flex-col justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
          <div className="flex justify-center items-center">
            <LuUserSquare2 size={22} />
          </div>
          <div className="flex justify-center items-center">Shorts</div>
        </div>
        <div className="flex-col justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
          <div className="flex justify-center items-center">
            <SiYoutubeshorts size={22} />
          </div>
          <div className="flex justify-center items-center">You</div>
        </div>
        <div className="flex-col justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
          <div className="flex justify-center items-center">
            <GoVideo size={22} />
          </div>
          <div className="flex justify-center items-center">Videos</div>
        </div>
      </div>
    </div>
  );
};

export default ShrinkedSidebar;
