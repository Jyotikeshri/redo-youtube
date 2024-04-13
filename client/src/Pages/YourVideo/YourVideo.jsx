import React from "react";
import vid from "../HomePage/vid.mp4";
import WHL from "../../Components/WHL/WHLList.jsx";

const YourVideo = ({ isToggleSidebar }) => {
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
    <WHL name={"Videos"} videos={videos} isToggleSidebar={isToggleSidebar} />
  );
};

export default YourVideo;
