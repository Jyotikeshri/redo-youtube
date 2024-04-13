import React, { useRef, useState } from "react";
import vid from "../HomePage/vid.mp4";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { FaRegUserCircle } from "react-icons/fa";
import VideoPageButtons from "../../Components/VideoPageButtons/VideoPageButtons";
import Comments from "../../Components/Comments/Comments";

const VideoPage = ({ isToggleSidebar }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };
  const handleShow = () => {
    setIsShow(!isShow);
  };
  // const videoRef = useRef(null);
  // const [selectedQuality, setSelectedQuality] = useState(qualities[0]);

  // const handleQualityChange = (quality) => {
  //   setSelectedQuality(quality);
  //   videoRef.current.load();
  // };
  return (
    <div className="flex conatiner-pages bg-black ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />
      <div className="p-3 flex-col " style={{ left: "150px" }}>
        <div className="w-1200 h-700 flex justify-center items-center">
          <video
            src={vid}
            // ref={videoRef}
            className="w-1200 h-700 rounded-lg"
            controls
            autoPlay
          >
            {/* {qualities.map((quality) => (
              <source key={quality} src={src[quality]} type="video/mp4" />
            ))}
            Your browser does not support the video tag. */}
          </video>
          {/* <div>
            <span>Quality:</span>
            <select
              value={selectedQuality}
              onChange={(e) => handleQualityChange(e.target.value)}
            >
              {qualities.map((quality) => (
                <option key={quality} value={quality}>
                  {quality}
                </option>
              ))}
            </select>
          </div> */}
        </div>
        <div className="flex justify-start items-start text-white text-xl font-bold">
          Title
        </div>
        <div className="flex-row flex justify-between items-center mt-5">
          <div className="flex-row flex justify-center gap-7 items-center">
            <div className="flex justify-center items-center ">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Purple_flower_%284764445139%29.jpg/581px-Purple_flower_%284764445139%29.jpg?20120905142317"
                alt=""
                className="rounded-full"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="flex-col justify-start">
              <div className="flex items-center justify-center text-white text-lg ">
                Dhiru Monchik
              </div>
              <div className="flex items-center justify-center text-cream text-md">
                1200 Subscribers
              </div>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              {isSubscribed ? (
                <button
                  className="bg-greey text-slate-200 px-4 py-2 rounded-full font-serif cursor-pointer"
                  onClick={handleSubscribe}
                >
                  Subscribed
                </button>
              ) : (
                <button
                  className="bg-slate-200 text-black px-4 py-2 rounded-full font-serif cursor-pointer"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>
          <VideoPageButtons />
        </div>

        {isShow ? (
          <div className="flex flex-col bg-blac rounded-lg p-5 mt-10 w-1200">
            <div className="flex flex-row font-bold text-white text-md items-center justify-start gap-5">
              <div className="flex items-center justify-center">24K Views</div>
              <div className="flex items-center justify-center">
                24 Oct 2024
              </div>
            </div>
            <div className="flex items-center justify-start mt-3 text-white text-md font-bold">
              Title
            </div>

            <div
              className="flex justify-end items-center text-white text-md cursor-pointer"
              onClick={handleShow}
            >
              {" "}
              Show More ..
            </div>
          </div>
        ) : (
          <div className="flex flex-col bg-blac rounded-lg p-5 mt-10 w-1200">
            <div className="flex flex-row font-bold text-white text-md items-center justify-start gap-5">
              <div className="flex items-center justify-center">24K Views</div>
              <div className="flex items-center justify-center">
                24 Oct 2024
              </div>
            </div>
            <div className="flex items-center justify-start mt-3 text-white text-md font-bold">
              Title
            </div>
            <div className="text-cream  text-md flex justify-start flex-col flex-wrap ">
              gucuguifgeuigfiygrygeuygfydfhychjbhj
            </div>
            <div className="flex-row flex justify-between items-center mt-9">
              <div className="flex-row flex justify-center gap-7 items-center">
                <div className="flex justify-center items-center ">
                  {" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Purple_flower_%284764445139%29.jpg/581px-Purple_flower_%284764445139%29.jpg?20120905142317"
                    alt=""
                    className="rounded-full"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="flex-col justify-start">
                  <div className="flex items-center justify-center text-white text-lg ">
                    Dhiru Monchik
                  </div>
                  <div className="flex items-center justify-center text-cream text-md">
                    1200 Subscribers
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {" "}
                  {isSubscribed ? (
                    <button
                      className="bg-greey text-slate-200 px-4 py-2 rounded-full font-serif cursor-pointer"
                      onClick={handleSubscribe}
                    >
                      Subscribed
                    </button>
                  ) : (
                    <button
                      className="bg-slate-200 text-black px-4 py-2 rounded-full font-serif cursor-pointer"
                      onClick={handleSubscribe}
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mt-5">
              <button className="rounded-full border border-gray-500 border-1 hover:bg-greey flex justify-center items-center gap-4 text-cream px-4 py-2 cursor-pointer">
                <FaRegUserCircle size={22} />
                About
              </button>
            </div>

            <div
              className="flex justify-end items-center text-white text-md cursor-pointer"
              onClick={handleShow}
            >
              {" "}
              Show Less ..
            </div>
          </div>
        )}
        <Comments />
      </div>
    </div>
  );
};

export default VideoPage;
