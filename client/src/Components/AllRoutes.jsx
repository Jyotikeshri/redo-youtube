import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPage from "../Pages/VideoPage/VideoPage";
import WatchHistory from "../Pages/watchHistory/WatchHistory";
import YourVideo from "../Pages/YourVideo/YourVideo";
import WatchLater from "../Pages/watchLater/WatchLater";
import LikedVideo from "../Pages/LikedVideos/LikedVideo.jsx";

const AllRoutes = ({ isToggleSidebar }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/videopage/:id"
        element={<VideoPage isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/history"
        element={<WatchHistory isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/yourVideos"
        element={<YourVideo isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/watchLater"
        element={<WatchLater isToggleSidebar={isToggleSidebar} />}
      />
      <Route
        path="/likedVideos"
        element={<LikedVideo isToggleSidebar={isToggleSidebar} />}
      />
    </Routes>
  );
};

export default AllRoutes;
