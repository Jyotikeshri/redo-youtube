import React from "react";
import ShowVideoList from "./ShowVideoList";

const WHLVideoList = ({ name, VideoList, CurrentUser }) => {
  return (
    <>
      {VideoList?.map((m) => (
        <ShowVideoList videoId={m._id} key={m._id} />
      ))}
    </>
  );
};

export default WHLVideoList;
