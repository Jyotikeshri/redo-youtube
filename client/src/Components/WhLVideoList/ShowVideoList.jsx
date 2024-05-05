import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import vid from "../../Pages/HomePage/vid.mp4";
import { useSelector } from "react-redux";

const ShowVideoList = ({ videoId, isToggleSidebar }) => {
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
  const VideoList = useSelector((state) => state?.videoReducer?.data)?.filter(
    (q) => q._id === videoId
  );

  console.log("video id", videoId);
  return (
    <div
      className="flex flex-wrap p-5 relative videos-container gap-6 flex-col ms-10  left-[0px] overflow-y-auto overflow-x-hidden lg:left-[500px]"
      style={{ top: isToggleSidebar ? "40px" : "" }}
    >
      {VideoList.map((video) => (
        <ShowVideo Video={video} key={video._id} />
      ))}
    </div>
  );
};

export default ShowVideoList;
