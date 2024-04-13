import React from "react";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import WHLVideoList from "../WhLVideoList/WHLVideoList";

const WHL = ({ name, videos, isToggleSidebar }) => {
  return (
    <div className="conatiner-pages text-white ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <h1 className="flex justify-center items-center text-3xl whl_heading">
        Your {name} Shown Here
      </h1>
      <WHLVideoList VideoList={videos} />
    </div>
  );
};

export default WHL;
