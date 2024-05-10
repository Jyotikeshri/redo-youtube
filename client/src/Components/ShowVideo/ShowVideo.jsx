import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const ShowVideo = ({ Video }) => {
  {
    console.log("show video", Video);
  }
  return (
    <NavLink
      to={`/videopage/${Video._id}`}
      className="flex-col justify-start me-2 ms-2 video-container "
    >
      <video
        src={`http://localhost:8080/${Video.filePath}`}
        width={"350px"}
        height={"300px"}
        className="rounded-lg z-0 "
      ></video>
      <div className="flex justify-start items-center flex-row">
        <div className="channel-logo flex justify-start items-center p-2 m-2 ">
          <img
            src={Video.image}
            alt=""
            className="rounded-full "
            width={"50px "}
            height={"50px"}
          />
        </div>
        <div className="text-white font-bold text-lg flex items-center  flex-wrap">
          {Video.videoTitle}
        </div>
      </div>
      <div className="flex justify-start items-start text-cream text-md -mt-3 relative left-20">
        {Video.Uploader}
      </div>
      <div className="flex-row flex justify-start gap-7 items-center text-cream text-md  relative left-20">
        <div className="flex justify-center items-center">
          {Video.Views} Views
        </div>
        <div className="flex justify-center items-center">
          {moment(Video.createdAt).fromNow()}{" "}
        </div>
      </div>
    </NavLink>
  );
};

export default ShowVideo;
