import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPage from "../Pages/VideoPage/VideoPage";
import WatchHistory from "../Pages/watchHistory/WatchHistory";
import YourVideo from "../Pages/YourVideo/YourVideo";
import WatchLater from "../Pages/watchLater/WatchLater";
import LikedVideo from "../Pages/LikedVideos/LikedVideo.jsx";
import YourChannel from "../Pages/Channel/YourChannel.jsx";
import Search from "../Pages/SerachPage/SearchPage.jsx";

const AllRoutes = ({
  isToggleSidebar,
  setEditCreateChanelBtn,
  setUploadVideoBtn,
  CurrUser,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/videopage/:Vid"
        element={<VideoPage isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/history"
        element={
          <WatchHistory isToggleSidebar={isToggleSidebar} currUser={CurrUser} />
        }
      />
      <Route
        path="/yourVideos"
        element={
          <YourVideo isToggleSidebar={isToggleSidebar} currUser={CurrUser} />
        }
      />
      <Route
        path="/watchLater"
        element={
          <WatchLater isToggleSidebar={isToggleSidebar} currUser={CurrUser} />
        }
      />
      <Route
        path="/likedVideos"
        element={
          <LikedVideo isToggleSidebar={isToggleSidebar} currUser={CurrUser} />
        }
      />
      <Route
        path="channel/:Cid"
        element={
          <YourChannel
            isToggleSidebar={isToggleSidebar}
            setEditCreateChanelBtn={setEditCreateChanelBtn}
            setUploadVideoBtn={setUploadVideoBtn}
            currUser={CurrUser}
          />
        }
      />
      <Route
        path="/search/:searchQuery"
        element={<Search isToggleSidebar={isToggleSidebar} />}
      />
    </Routes>
  );
};

export default AllRoutes;
