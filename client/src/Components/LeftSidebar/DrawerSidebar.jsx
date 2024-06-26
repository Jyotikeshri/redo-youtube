import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { LuHistory } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const DrawerSidebar = () => {
  const User = useSelector((state) => state.currentUserReducer);
  return (
    <div
      className=" flex flex-col w-250 h-100  bg-black overflow-y-scroll sidebar-conatiner  text-white z-20  overflow-x-hidden fixed top-[50px] px-[15px]  "
      style={{ width: "250px" }}
    >
      <div className="flex-col px-2 py-2 w-[200px]">
        <div className="nav-icons flex-col justify-center gap-6 text-md">
          <NavLink
            to={"/"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4 "
          >
            <IoHome size={22} /> Home
          </NavLink>
          <NavLink
            to={"/explore"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4"
          >
            <MdOutlineExplore size={22} /> Explore
          </NavLink>
          <NavLink
            to={"https://metube-fredio-call-xv4s.vercel.app/"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4 "
          >
            FredioCall
          </NavLink>
          {/* <NavLink
            to={`/channel/${User._id}`}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4"
          >
            <LuUserSquare2 size={22} /> Your Channel
          </NavLink> */}
          <NavLink className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4">
            <SiYoutubeshorts size={22} /> Shorts
          </NavLink>
        </div>
        <div className="bg-white h-1 m-3"></div>
        <div className="nav-icons flex-col justify-center gap-6 text-md">
          <NavLink
            to={"/history"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4 "
          >
            <LuHistory size={22} /> History
          </NavLink>
          <NavLink
            to={"/yourVideos"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4"
          >
            <GoVideo size={22} /> Your Videos
          </NavLink>
          <NavLink
            to={"/watchLater"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4"
          >
            <MdOutlineWatchLater size={22} /> Watch later
          </NavLink>
          <NavLink
            to={"/likedVideos"}
            className="flex items-center justify-start rounded-lg p-2 hover:bg-greey cursor-pointer gap-5 px-4"
          >
            <AiOutlineLike size={22} /> Liked Videos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DrawerSidebar;
