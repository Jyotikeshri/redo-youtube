import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../Actions/VideoAction";
import { addTolikedVideo, deletelikedVideo } from "../../Actions/LikedVideo";
const LikeDislikeButton = ({ video }) => {
  const [isLike, setIsLike] = useState(false);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const vid = video._id;
  const [isDislike, setIsDislike] = useState(false);
  const likedVideoList = useSelector((state) => state.likedVideo);
  console.log("liked video list", likedVideoList);
  useEffect(() => {
    likedVideoList?.data
      .filter((q) => q?.videoId === vid && q?.Viewer === CurrentUser._id)
      .map((m) => setIsLike(true));

    likedVideoList?.data
      .filter(
        (q) =>
          q?.videoId === vid && q?.Viewer === CurrentUser._id && q?.isDislike
      )
      .map((m) => setIsDislike(true));

    console.log("useEffect like");
  }, []);

  console.log("like curr user", CurrentUser);
  const like_toggle = (e, lk) => {
    if (CurrentUser) {
      if (isLike) {
        setIsLike(false);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        dispatch(
          deletelikedVideo({
            videoId: vid,
            Viewer: CurrentUser?._id,
          })
        );
      } else {
        setIsLike(true);

        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
        dispatch(
          addTolikedVideo({
            videoId: vid,
            Viewer: CurrentUser?._id,
          })
        );
        setIsDislike(false);
      }
    } else {
      alert("Please login to like the video");
    }
  };

  const disLike_toggle = (e, lk) => {
    // console.log("DisLike");
    if (isDislike) {
      setIsDislike(false);
    } else {
      // console.log("DisLike");
      if (isLike) {
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        console.log("DisLike");
      }
      setIsLike(false);
      setIsDislike(true);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <button className="flex items-center justify-center flex-row bg-greey text-white gap-3 px-3 py-2 rounded-full">
        <div
          className="flex justify-center items-center gap-2"
          onClick={(e) => like_toggle(e, video.Like)}
        >
          {isLike ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
          {video.Like}
        </div>
        <div className="h-6 w-1 bg-white"></div>
        <div
          className="flex justify-center items-center gap-2"
          onClick={(e) => disLike_toggle(e, video.Like)}
        >
          {isDislike ? <BiSolidDislike size={22} /> : <BiDislike size={22} />}
        </div>
      </button>
    </div>
  );
};

export default LikeDislikeButton;
