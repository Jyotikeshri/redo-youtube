import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import vid from "../../Pages/HomePage/vid.mp4";

const ShowVideoList = ({ videoId }) => {
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
    <div className="flex flex-wrap p-5 relative videos-container gap-6 flex-col">
      {console.log("videos ", videos, videoId)}
      {videos
        .filter((q) => q._id === videoId)
        .map((video) => (
          <ShowVideo Video={video} key={video._id} />
        ))}
    </div>
  );
};

export default ShowVideoList;
