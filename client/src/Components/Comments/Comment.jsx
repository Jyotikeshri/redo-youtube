import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

import {
  editComment,
  deleteComment,
  likeComment,
  DislikeComment,
} from "../../Actions/CommentAction";
import {
  addTolikedComment,
  deletelikedComment,
} from "../../Actions/LikedComment";
import {
  addToDislikedComment,
  deleteDislikedComment,
} from "../../Actions/DisLikeComment";

import { translator } from "./TranslateText.js";

const Comment = ({ comment }) => {
  const [commentBody, setCommentBody] = useState("");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const [cmtId, setcmtId] = useState("");
  const [isTranslate, setIsTranslate] = useState(false);
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    setIsTranslate(true);
    try {
      const translatedBody = await translator(comment.commentBody);
      setTranslatedText(translatedBody);
    } catch (error) {
      console.error("Error translating text:", error);
      setTranslatedText("Translation error");
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const comment_user = useSelector((state) => state?.channels).filter(
    (q) => q._id === comment.userId
  )[0];

  const handleEdit = (ctId, ctBdy) => {
    setIsEdit(true);
    setcmtId(ctId);
    setCommentBody(ctBdy);
  };

  const dispatch = useDispatch();

  const handleLikeComment = (e, lk, dlk) => {
    if (CurrentUser) {
      if (isLike) {
        setIsLike(false);
        dispatch(
          likeComment({
            id: comment._id,
            Like: lk - 1,
          })
        );
        dispatch(
          deletelikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
      } else {
        setIsLike(true);
        dispatch(
          DislikeComment({
            id: comment._id,
            DisLike: dlk - 1,
          })
        );
        dispatch(
          likeComment({
            id: comment._id,
            Like: lk + 1,
          })
        );

        dispatch(
          addTolikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
        dispatch(
          deleteDislikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
        setIsDislike(false);
      }
    } else {
      alert("Please login to like the video");
    }
  };

  const handleDislikeComment = (e, dlk, lk) => {
    if (CurrentUser) {
      if (isDislike) {
        setIsDislike(false);
        dispatch(
          DislikeComment({
            id: comment._id,
            Dislike: dlk - 1,
          })
        );
        dispatch(
          deleteDislikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
      } else {
        dispatch(
          DislikeComment({
            id: comment._id,
            Dislike: dlk + 1,
          })
        );
        dispatch(
          likeComment({
            id: comment._id,
            Like: lk - 1,
          })
        );
        dispatch(
          addToDislikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
        dispatch(
          deletelikedComment({
            CommentId: comment._id,
            Viewer: CurrentUser._id,
          })
        );
        setIsDislike(true);
        setIsLike(false);
      }
    } else {
      alert("Please login to Dis the Comment");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!commentBody) {
      alert("Type Your comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: commentBody,
        })
      );
      setCommentBody("");
    }

    setIsEdit(false);
  };

  const handleDel = (id) => {
    dispatch(deleteComment(id));
  };
  return (
    <div className="flex flex-col justify-start gap-5 relative mb-5 lg:w-1200  md:w-[700px] sm:w-[500px] xsm:w-[370px]">
      {isEdit && (
        <form action="" onSubmit={handleOnSubmit}>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Add a Comment"
              className="bg-black border-b border-white border-1 outline-none px-3 py-2 text-white lg:w-1200  md:w-[700px] sm:w-[500px] xsm:w-[300px] mbsm:w-[250px]"
              style={{ width: "1100px" }}
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <button
              className="flex justify-center items-center px-3 py-2 text-white bg-greey rounded-full relative -left-[150px]"
              // style={{ top: "60px", left: "-150px" }}
              onClick={() => handleEdit(comment._id, commentBody)}
            >
              Edit
            </button>
          </div>
        </form>
      )}
      <div className="flex flex-row justify-start items-center gap-4 sm:w-[500px] xsm:w-[370px] flex-wrap">
        <div className="flex justify-center items-center ">
          <img
            src={comment_user.image}
            alt=""
            width={"50px"}
            height={"50px"}
            className="rounded-full"
          />
        </div>
        <div className="text-white flex justify-center items-center text-lg">
          {comment_user.name}
        </div>
        <div className="flex justify-center items-center text-md text-cream">
          {moment(comment.CommentOn).fromNow()}{" "}
        </div>
        <div className=" justify-start items-center text-md text-cream hidden sm:flex md:flex lg:flex ">
          From {comment.City}
        </div>
      </div>

      <div
        className="flex text-white text-lg justify-start items-center flex-wrap relative w-[330px] sm:w-[500px] md:w-[700px]  lg:w-[900px] lg:left-[70px]"
        // style={{ width: "900px", left: "70px" }}
      >
        {comment.commentBody}
        &nbsp; &nbsp; &nbsp;
        <div
          className="flex justify-center items-center text-white"
          onClick={handleTranslate}
        >
          {" "}
          Translate{" "}
        </div>
      </div>
      {isTranslate && (
        <div
          className="flex text-cream text-lg justify-start items-center flex-wrap relative"
          style={{ width: "900px", left: "70px" }}
        >
          Translated Text : {translatedText}
        </div>
      )}

      <div
        className="flex justify-start items-center flex-row gap-5 relative"
        style={{ left: "70px" }}
      >
        <div
          className="flex justify-center items-center text-white"
          onClick={(e) => handleLikeComment(e, comment.Like, comment.Dislike)}
        >
          {isLike ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
        </div>
        <div
          className="flex justify-center items-center text-white"
          onClick={(e) =>
            handleDislikeComment(e, comment.Dislike, comment.Like)
          }
        >
          {isDislike ? <BiSolidDislike size={22} /> : <BiDislike size={22} />}
        </div>
        {comment.userId === CurrentUser._id && (
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="py-2 px-3 text-white rounded-full"
              onClick={() => handleEdit(comment._id, comment.commentBody)}
            >
              Edit
            </button>
            <button
              className="py-2 px-3 text-white rounded-full"
              onClick={() => handleDel(comment._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
