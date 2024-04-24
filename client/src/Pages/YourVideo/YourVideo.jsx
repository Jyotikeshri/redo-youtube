import React from "react";
// import vid from "../HomePage/vid.mp4";
import WHL from "../../Components/WHL/WHLList.jsx";
import { useSelector } from "react-redux";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar.jsx";

const YourVideo = ({ isToggleSidebar }) => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const videos = useSelector((state) => state?.videoReducer)?.data.filter(
    (q) => q.videoChannel === CurrentUser._id
  );

  return (
    <>
      <LeftSidebar isToggleSidebar={isToggleSidebar} />
      <h1
        className="text-3xl text-white font-bold items-center "
        style={{
          position: "relative",
          left: "250px",
          top: "-900px",
        }}
      >
        Your Videos Shown here
      </h1>

      <ShowVideoGrid
        videos={videos}
        isToggleSidebar={isToggleSidebar}
        style={{
          position: "relative",
          left: "250px",
          top: "-900px",
        }}
      />
    </>
  );
};

export default YourVideo;
