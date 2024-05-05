import React, { useState } from "react";

import "./YourVideos.css";
import "./yourChannel.css";
import vid from "../HomePage/vid.mp4";

import { useSelector } from "react-redux";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import DescribeChannel from "./DescribeChannel";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { useParams } from "react-router-dom";

function YourChannel({
  isToggleSidebar,
  setEditCreateChanelBtn,
  currUser,
  setUploadVideoBtn,
}) {
  const { Cid } = useParams();

  const videos = useSelector((state) => state?.videoReducer)?.data.filter(
    (q) => q.videoChannel === Cid
  );

  //   const videos = useSelector((state) => state.videoReducer)
  //     ?.data?.filter((q) => q?.videoChannel === CurrentUser?.result?._id)
  //     .reverse();

  // const videos = [
  //   {
  //     _id: 1,
  //     src: vid,
  //     channel_name: "Dhiru Monchik",
  //     title: "roast video 1",
  //     description: "roasttvhbcdbcbnd 1",
  //   },
  //   {
  //     _id: 2,
  //     src: vid,
  //     channel_name: "Dhiru Monchik",
  //     title: "roast video 2",
  //     description: "roasttvhbcdbcbnd 2",
  //   },
  //   {
  //     _id: 3,
  //     src: vid,
  //     channel_name: "Dhiru Monchik",
  //     title: "roast video 3",
  //     description: "roasttvhbcdbcbnd 3",
  //   },
  //   {
  //     _id: 4,
  //     src: vid,
  //     channel_name: "Dhiru Monchik",
  //     title: "roast video 3",
  //     description: "roasttvhbcdbcbnd 3",
  //   },
  // ];

  console.log("current user now", videos);

  return (
    <div className="pages-container">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />
      <div
        className="pages-container-2 -ms-[50px] me-[20px]"
        style={{
          width: isToggleSidebar ? "calc(100vw - 90px)" : "calc(100vw - 240px)",
        }}
      >
        <DescribeChannel
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          currUser={currUser}
          Cid={Cid}
          setUploadVideoBtn={setUploadVideoBtn}
        />
        <h1
          style={{
            position: "relative",
            left: "200px",
            fontSize: "2.5rem",
            top: "-900px",
            color: "white",
            marginTop: "3rem",
            marginBottom: "3rem",
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
