import React, { useEffect, useState } from "react";
import CommentBar from "./CommentBar";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../Actions/CommentAction";
import axios from "axios";

const Comments = ({ videoId }) => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const [commentText, setCommentText] = useState("");
  const CommentList = useSelector((state) => state?.commentReducer).data.filter(
    (q) => q.Dislike < 2
  );

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  function isValidComment(comment) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(comment);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  const options = {
    method: "GET",
    url: "https://map-geocoding.p.rapidapi.com/json",
    params: {
      latlng: `${latitude},${longitude}`,
    },
    headers: {
      "X-RapidAPI-Key": "8f77a2a545mshf120f1b646b7bbcp1ea787jsnbf836e7c7f14",
      "X-RapidAPI-Host": "map-geocoding.p.rapidapi.com",
    },
  };

  const dispatch = useDispatch();
  const onSubmitComment = async (e) => {
    e.preventDefault();
    if (CurrentUser) {
      if (!commentText) {
        alert("Plz Type your comment !");
      } else {
        if (!isValidComment(commentText)) {
          alert("Comments cannot contain special characters!");
          return;
        } else {
          const response = await axios.request(options);

          const city = response.data.results[0].address_components[3].long_name;
          dispatch(
            postComment({
              videoId: videoId,
              userId: CurrentUser._id,
              commentBody: commentText,
              userCommented: CurrentUser.name,
              City: city,
            })
          );
        }

        setCommentText("");
      }
    } else {
      alert("Plz login to post your comment !");
    }
  };

  return (
    <div className="flex flex-col justify-start gap-7 mt-7 ">
      <div className="text-2xl font-bold text-white flex justify-start items-center lg:w-1200  md:w-[700px]">
        Comments
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-start gap-7 mb-8">
          <div className="flex justify-center items-center">
            {" "}
            <img
              src={CurrentUser.image}
              alt=""
              className="rounded-full object-cover"
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div className="flex justify-center items-center lg:w-1200  md:w-[700px]">
            <input
              type="text"
              placeholder="Add a Comment"
              className="bg-black border-b border-white border-1 outline-none px-3 py-2 text-white lg:w-1200  md:w-[700px]"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              className="flex justify-center items-center px-3 py-2 text-white bg-greey rounded-full relative "
              style={{ top: "60px", left: "-150px" }}
              onClick={(e) => onSubmitComment(e)}
            >
              Comment
            </button>
          </div>
        </div>

        <CommentBar commentList={CommentList} videoId={videoId} />
      </div>
    </div>
  );
};

export default Comments;
