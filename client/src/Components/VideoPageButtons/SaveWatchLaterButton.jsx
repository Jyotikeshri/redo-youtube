import React, { useState } from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

const SaveWatchLaterButton = () => {
  const [isSave, setIsSave] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const handleSave = () => {
    if (isSave) {
      setIsSave(false);
    } else {
      setIsSave(true);
    }
  };

  const handleWatchLater = () => {
    if (isWatchLater) {
      setIsWatchLater(false);
    } else {
      setIsWatchLater(true);
    }
  };
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        className="px-3 py-2 bg-greey text-white text-md flex justify-center items-center gap-3 rounded-full"
        onClick={handleSave}
      >
        {isSave ? (
          <>
            <MdOutlinePlaylistAddCheck size={22} />
            Saved
          </>
        ) : (
          <>
            <RiPlayListAddLine size={22} />
            Save
          </>
        )}
      </button>
      <button
        className="px-3 py-2 bg-greey text-white text-md flex justify-center items-center gap-3 rounded-full"
        onClick={handleWatchLater}
      >
        {isWatchLater ? (
          <>
            <MdWatchLater size={22} />
            added
          </>
        ) : (
          <>
            <MdOutlineWatchLater size={22} />
            Watchlater
          </>
        )}
      </button>
    </div>
  );
};

export default SaveWatchLaterButton;
