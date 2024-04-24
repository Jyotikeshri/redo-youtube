import React from "react";
import ShareButton from "./ShareButton";
import DownloadButton from "./DownloadButton";
import LikeDislikeButton from "./LikeDislikeButton";
import SaveWatchLaterButton from "./SaveWatchLaterButton";

const VideoPageButtons = ({ video }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-7">
      <LikeDislikeButton video={video} />
      <ShareButton />
      <DownloadButton />
      <SaveWatchLaterButton video={video} />
    </div>
  );
};

export default VideoPageButtons;
