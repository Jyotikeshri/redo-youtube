import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import vid from "./vid.mp4";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import NavListBar from "./NavListBar";
import { useSelector } from "react-redux";

const HomePage = ({ isToggleSidebar }) => {
  const videos = useSelector((state) => state?.videoReducer)
    ?.data?.filter((q) => q)
    .reverse();
  console.log("all videos", videos);
  const NavList = ["video", "gaming", "animation", "sports", "news", "coding"];
  return (
    <div className="conatiner-pages text-white flex flex-wrap lg:w-[100vw] md:w-[900px] sm:w-[700px] xsm:w-[300px] h-100 ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <ShowVideoGrid
        videos={videos}
        isToggleSidebar={isToggleSidebar}
        List={NavList}
      />
    </div>
  );
};

export default HomePage;
