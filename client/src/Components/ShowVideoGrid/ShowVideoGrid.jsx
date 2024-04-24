import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import NavListBar from "../../Pages/HomePage/NavListBar";

const ShowVideoGrid = ({ videos, isToggleSidebar, List }) => {
  return (
    <>
      {console.log("video gird", videos)}
      {List && <NavListBar List={List} />}
      <div
        className="flex flex-wrap p-5 relative videos-container gap-6 "
        style={{
          left: isToggleSidebar ? "250px" : "200px",
        }}
      >
        {videos?.map((video) => {
          return <ShowVideo Video={video} key={video?._id} />;
        })}
      </div>
    </>
  );
};

export default ShowVideoGrid;
