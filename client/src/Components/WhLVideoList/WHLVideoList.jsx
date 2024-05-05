import React from "react";
import ShowVideoList from "./ShowVideoList";

const WHLVideoList = ({ name, VideoList, currUser, isToggleSidebar }) => {
  return (
    <div>
      {currUser ? (
        <>
          {Array.isArray(VideoList?.data) &&
            VideoList?.data
              ?.filter((q) => q?.Viewer === currUser._id)
              .reverse()
              .map((m) => (
                <ShowVideoList
                  videoId={m.videoId}
                  key={m._id}
                  isToggleSidebar={isToggleSidebar}
                />
              ))}
        </>
      ) : (
        <>
          <h2 style={{ color: "white" }}>Plz Login To Watch Your {name} </h2>
        </>
      )}
    </div>
  );
};

export default WHLVideoList;
