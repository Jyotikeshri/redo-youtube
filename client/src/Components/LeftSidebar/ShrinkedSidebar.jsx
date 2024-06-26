import React from "react";
import { GoVideo } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShrinkedSidebar = () => {
  const User = useSelector((state) => state.currentUserReducer);
  return (
    <div className="flex-col text-white w-100 h-100 lg:flex sm:flex md:flex  xsm:z-10 fixed top-[50px] hidden ">
      <div className="flex-col justify-center p-1">
        <Link
          to={`/`}
          className="flex-col flex justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg"
        >
          <div className="flex justify-center items-center">
            <IoHome size={22} />
          </div>
          <div className="flex justify-center items-center">Home</div>
        </Link>
        <Link className="flex-col flex justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
          <div className="flex justify-center items-center">
            <LuUserSquare2 size={22} />
          </div>
          <div className="flex justify-center items-center">Shorts</div>
        </Link>
        <Link
          to={`/channel/${User._id}`}
          className="flex-col flex justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg"
        >
          <div className="flex justify-center items-center">
            <SiYoutubeshorts size={22} />
          </div>
          <div className="flex justify-center items-center">You</div>
        </Link>
        <div className="flex-col flex justify-center  gap-4 items-center m-2 hover:bg-greey cursor-pointer p-2 rounded-lg">
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
