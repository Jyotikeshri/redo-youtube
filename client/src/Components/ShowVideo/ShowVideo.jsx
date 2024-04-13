import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const ShowVideo = ({ Video }) => {
  return (
    <NavLink
      to={`/videopage/${Video._id}`}
      className="flex-col justify-start me-2 ms-2 video-container"
    >
      {console.log(Video)}
      <video
        src={Video?.src}
        width={"350px"}
        height={"300px"}
        className="rounded-lg z-0"
      ></video>
      <div className="flex justify-start items-center flex-row">
        <div className="channel-logo flex justify-start items-center p-2 m-2">
          <img
            src="https://usualcom.net/wp-content/uploads/2017/09/12364849-Planet-Earth-and-human-eye-Stock-Photo-300x283.jpg"
            alt=""
            className="rounded-full "
            width={"50px "}
            height={"50px"}
          />
        </div>
        <div className="text-white font-bold text-lg flex items-center  flex-wrap">
          {Video.title}
        </div>
      </div>
      <div className="flex justify-start items-start text-cream text-md -mt-3 relative left-20">
        {Video.channel_name}
      </div>
      <div className="flex-row flex justify-start gap-7 items-center text-cream text-md  relative left-20">
        <div className="flex justify-center items-center">24K views</div>
        <div className="flex justify-center items-center">1h ago</div>
      </div>
    </NavLink>
  );
};

export default ShowVideo;
