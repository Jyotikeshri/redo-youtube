import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import NavListBar from "../../Pages/HomePage/NavListBar";

const ShowVideoGrid = ({ videos, isToggleSidebar, List }) => {
  return (
    <>
      {console.log("video gird", videos)}
      {List && <NavListBar List={List} />}
      <div
        className="flex flex-wrap p-5 relative videos-container gap-6 -top-[750px] lg:w-[94vw] md:w-[900px] sm:w-[600px] mbsm:w-[300px] lg:left-[250px] md:left-[250px] sm:left-[200px] left-[60px] xsm:w-[450px] w-[600px] lg:-top-[400px]"
        style={{ top: isToggleSidebar ? "80px" : "50px" }}
      >
        {videos?.map((video) => {
          return <ShowVideo Video={video} key={video?._id} />;
        })}
      </div>
    </>
  );
};

export default ShowVideoGrid;
