import React from "react";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import WHLVideoList from "../WhLVideoList/WHLVideoList";

const WHL = ({ name, videos, isToggleSidebar, currUser }) => {
  console.log("whl", name, videos, currUser);
  return (
    <div className="conatiner-pages text-white ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <h1
        className="
     
      
      text-center text-3xl whl_heading"
        style={{ width: "900px", position: "relative", left: "250px" }}
      >
        Your {name} Shown Here
      </h1>
      <WHLVideoList VideoList={videos} currUser={currUser} />
    </div>
  );
};

export default WHL;
