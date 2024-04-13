import React, { useState } from "react";

// import "../yourVideo/YourVideos.css";
import "./yourChannel.css";
import vid from "../HomePage/vid.mp4";

import { useSelector } from "react-redux";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import DescribeChannel from "./DescribeChannel";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";

function YourChannel({
  isToggleSidebar,
  setEditCreateChanelBtn,
  currUser,
  setUploadVideoBtn,
}) {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  //   const videos = useSelector((state) => state.videoReducer)
  //     ?.data?.filter((q) => q?.videoChannel === CurrentUser?.result?._id)
  //     .reverse();

  const videos = [
    {
      _id: 1,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 1",
      description: "roasttvhbcdbcbnd 1",
    },
    {
      _id: 2,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 2",
      description: "roasttvhbcdbcbnd 2",
    },
    {
      _id: 3,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 3",
      description: "roasttvhbcdbcbnd 3",
    },
    {
      _id: 4,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 3",
      description: "roasttvhbcdbcbnd 3",
    },
  ];

  return (
    <div className="pages-container">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />
      <div
        className="pages-container-2"
        style={{
          width: isToggleSidebar ? "calc(100vw - 90px)" : "calc(100vw - 240px)",
          marginLeft: isToggleSidebar ? "100px" : "50px",
        }}
      >
        <DescribeChannel
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          currUser={CurrentUser}
        />
        <h1
          style={{
            position: "relative",
            left: "100px",
            fontSize: "2.5rem",
            top: "50px",
          }}
        >
          Your Videos
        </h1>
        <ShowVideoGrid videos={videos} />
      </div>
    </div>
  );
}

export default YourChannel;
