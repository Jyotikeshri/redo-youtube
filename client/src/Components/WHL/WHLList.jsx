import React from "react";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import WHLVideoList from "../WhLVideoList/WHLVideoList";

const WHL = ({ name, videos, isToggleSidebar, currUser }) => {
  return (
    <div className="conatiner-pages text-white ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <h1
        className="
     
      
      text-center text-xl whl_heading  left-[20px]  relative mb-[100px]"
        style={{ top: isToggleSidebar ? "90px" : "90px" }}
      >
        Your {name} Shown Here
      </h1>
      <WHLVideoList
        VideoList={videos}
        currUser={currUser}
        isToggleSidebar={isToggleSidebar}
      />
    </div>
  );
};

export default WHL;
