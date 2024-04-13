import React from "react";
import ShareButton from "./ShareButton";
import DownloadButton from "./DownloadButton";
import LikeDislikeButton from "./LikeDislikeButton";
import SaveWatchLaterButton from "./SaveWatchLaterButton";

const VideoPageButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-7">
      <LikeDislikeButton />
      <ShareButton />
      <DownloadButton />
      <SaveWatchLaterButton />
    </div>
  );
};

export default VideoPageButtons;
