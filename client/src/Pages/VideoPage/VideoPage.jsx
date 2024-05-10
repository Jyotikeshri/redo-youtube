import React, { useEffect, useRef, useState } from "react";
import vid from "../HomePage/vid.mp4";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { FaRegUserCircle } from "react-icons/fa";
import VideoPageButtons from "../../Components/VideoPageButtons/VideoPageButtons";
import Comments from "../../Components/Comments/Comments";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { viewVideo } from "../../Actions/VideoAction";
import { addToHistory } from "../../Actions/HistoryAction";

const VideoPage = ({ isToggleSidebar }) => {
  const { Vid } = useParams();
  console.log("vid", Vid);
  const videos = useSelector((state) => state?.videoReducer);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleHistory = () => {
    console.log("videopage history");
    dispatch(
      addToHistory({
        videoId: Vid,
        Viewer: CurrentUser._id,
      })
    );
    console.log("videopage history");
  };
  const handleViews = () => {
    console.log("videopage viewvideo");

    dispatch(
      viewVideo({
        id: Vid,
      })
    );
    console.log("videopage viewvideo");
  };
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
      console.log("videopage viewvideo");
    }
    handleViews();
  }, []);
  const video = videos?.data?.filter((q) => q._id === Vid)[0];
  console.log("videopage video: ", video);
  const [selectedQuality, setSelectedQuality] = useState("1080p");

  const handleQualityChange = (e) => {
    setSelectedQuality(e.target.value);
  };
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="flex conatiner-pages bg-black  ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />
      <div className="p-3 flex-col  relative left-[15px] md:left-[100px] lg:left-[250px] sm:left-[90px]">
        <div className="w-1200 h-700 flex justify-center items-center lg:w-1200 lg:h-[700px] md:w-[700px] md:h-[500px]  sm:w-[500px] sm:h-[350px] xsm:w-[370px] xsm:h-[300px] mbsm:w-[300px] mbsm:h-[300px]">
          <video
            src={`https://metube-backend.onrender.com/${video.filePath.replace(
              ".mp4",
              `-${selectedQuality}.mp4`
            )}`}
            className="w-1200 h-700 rounded-lg lg:w-[1200px] lg:h-[700px] md:w-[700px] md:h-[500px]  sm:w-[500px] sm:h-[350px] xsm:w-[370px] xsm:h-[300px] mbsm:w-[300px] mbsm:h-[300px]"
            controls
            autoPlay
          ></video>
          <div className="absolute top-[250px] left-[100px] lg:top-[650px] lg:left-[900px] md:top-[450px] md:left-[400px]">
            <span className="text-bold text-black">Quality:</span>
            <select value={selectedQuality} onChange={handleQualityChange}>
              <option value="320p">320p</option>
              <option value="480p">480p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-start text-white text-xl font-bold">
          {video.videoTitle}
        </div>
        <div className="flex-row flex justify-between items-center mt-5 lg:w-1200  md:w-[700px] ">
          <div className="flex-row flex justify-center gap-7 items-center">
            <div className="flex justify-center items-center w-[50px] h-[50px] ">
              {" "}
              <img
                src={video.image}
                alt=""
                className="rounded-full"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="flex-col justify-start">
              <div className="flex items-start justify-start text-white text-md lg:text-lg md:text-lg w-[200px]  ">
                {video.Uploader}
              </div>
              <div className="lg:flex md:flex items-center justify-start text-cream text-md flex ">
                1200 Subscribers
              </div>
            </div>
            <div className="hidden justify-center items-center lg:flex md:hidden sm:hidden ">
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
          <div className="relative flex flex-wrap -top-[50px] -left-[270px] mt-[50px] mb-[70px] lg:static md:static">
            <VideoPageButtons video={video} />
          </div>
        </div>

        {isShow ? (
          <div className="flex flex-col bg-blac rounded-lg p-5 mt-10 w-[330px] sm:w-[450px] lg:w-1200  md:w-[700px]">
            <div className="flex flex-row font-bold text-white text-md items-center justify-start gap-5">
              <div className="flex items-center justify-center">
                {video.Views} Views
              </div>
              <div className="flex items-center justify-center"></div>
            </div>
            <div className="flex items-center justify-start mt-3 text-white text-md font-bold">
              {video.videoTitle}
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
          <div className="flex flex-col bg-blac rounded-lg p-5 mt-10 w-[330px] sm:w-[450px] lg:w-1200  md:w-[700px]">
            <div className="flex flex-row font-bold text-white text-md items-center justify-start gap-5 flex-wrap">
              <div className="flex items-center justify-center">
                {video.Views} Views
              </div>
              <div className="flex items-center justify-center">
                {moment(video.createdAt).fromNow()}{" "}
              </div>
            </div>
            <div className="flex items-center justify-start mt-3 text-white text-md font-bold">
              {video.videoTitle}
            </div>
            <div className="text-cream  text-md flex justify-start flex-col flex-wrap w-[330px] sm:w-[450px] lg:w-1200  md:w-[700px]">
              {video.desc}
            </div>
            <div className="flex-row flex justify-between items-center mt-9">
              <div className="flex-row flex justify-center gap-7 items-center">
                <div className="flex justify-center items-center ">
                  {" "}
                  <img
                    src={video.image}
                    alt=""
                    className="rounded-full"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="flex-col justify-start">
                  <div className="flex items-center justify-center text-white text-lg ">
                    {video.uploader}
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
            <NavLink
              to={`/channel/${video.videoChannel}`}
              className="flex justify-start items-center mt-5"
            >
              <button className="rounded-full border border-gray-500 border-1 hover:bg-greey flex justify-center items-center gap-4 text-cream px-4 py-2 cursor-pointer">
                <FaRegUserCircle size={22} />
                About
              </button>
            </NavLink>

            <div
              className="flex justify-end items-center text-white text-md cursor-pointer"
              onClick={handleShow}
            >
              {" "}
              Show Less ..
            </div>
          </div>
        )}
        <Comments videoId={video._id} />
      </div>
    </div>
  );
};

export default VideoPage;
