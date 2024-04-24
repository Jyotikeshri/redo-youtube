import React, { useEffect, useState } from "react";
import { RiPlayListAddLine } from "react-icons/ri";

import { MdOutlinePlaylistAddCheck } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { addTowatchLater, deleteWatchLater } from "../../Actions/WatchLater.js";

const SaveWatchLaterButton = ({ video }) => {
  const [isSave, setIsSave] = useState(false);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const watchLater = useSelector((state) => state.WatchLater);
  useEffect(() => {
    watchLater?.data
      .filter((q) => q?.videoId === vid && q?.Viewer === CurrentUser._id)
      .map((m) => setIsSave(true));

    console.log("useEffect like");
  }, []);
  const vid = video._id;

  const dispatch = useDispatch();
  const save_toggle = () => {
    if (CurrentUser) {
      if (isSave) {
        setIsSave(false);
        dispatch(
          deleteWatchLater({
            videoId: vid,
            Viewer: CurrentUser._id,
          })
        );
      } else {
        setIsSave(true);
        dispatch(
          addTowatchLater({
            videoId: vid,
            Viewer: CurrentUser._id,
          })
        );
      }
    } else {
      alert("Plz Login To save the video !");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        className="px-3 py-2 bg-greey text-white text-md flex justify-center items-center gap-3 rounded-full"
        onClick={save_toggle}
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
    </div>
  );
};

export default SaveWatchLaterButton;
