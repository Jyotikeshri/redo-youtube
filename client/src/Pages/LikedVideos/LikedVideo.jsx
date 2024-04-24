import React from "react";
import WHL from "../../Components/WHL/WHLList";
import vid from "../HomePage/vid.mp4";
import { useSelector } from "react-redux";

const LikedVideo = ({ isToggleSidebar, currUser }) => {
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
  const likedvideos = useSelector((state) => state?.likedVideo);
  console.log("your liked video", likedvideos);
  return (
    <WHL
      name={"Liked Video"}
      videos={likedvideos}
      isToggleSidebar={isToggleSidebar}
      currUser={currUser}
    />
  );
};

export default LikedVideo;
