import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import vid from "./vid.mp4";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import NavListBar from "./NavListBar";

const HomePage = ({ isToggleSidebar }) => {
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
  const NavList = ["video", "gaming", "animation", "sports", "news", "coding"];
  return (
    <div className="conatiner-pages text-white ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <ShowVideoGrid
        videos={videos}
        isToggleSidebar={isToggleSidebar}
        List={NavList}
      />
    </div>
  );
};

export default HomePage;
