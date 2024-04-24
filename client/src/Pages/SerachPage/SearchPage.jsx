import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../App.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";

// import vid from "../../Components/Video/vid.mp4";
// import "./Search.css";
function Search({ isToggleSidebar }) {
  const { searchQuery } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) =>
      q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
    )
    .reverse();

  return (
    <div className="conatiner-pages p-10 ">
      <LeftSidebar isToggleSidebar={isToggleSidebar} />

      <h2 style={{ color: "white" }}>Search Results for {searchQuery}...</h2>
      <ShowVideoGrid videos={vids} />
    </div>
  );
}

export default Search;
