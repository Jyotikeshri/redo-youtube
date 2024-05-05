import React from "react";
import vid from "../HomePage/vid.mp4";
import WHL from "../../Components/WHL/WHLList.jsx";
import { useSelector } from "react-redux";

const WatchHistory = ({ isToggleSidebar, currUser }) => {
  const videos = [
    {
      _id: 1,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 1",
      description: "roasttvhbcdbcbnd 1",
    },
    {
      _id: 2,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 2",
      description: "roasttvhbcdbcbnd 2",
    },
    {
      _id: 3,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 3",
      description: "roasttvhbcdbcbnd 3",
    },
    {
      _id: 4,
      src: vid,
      channel_name: "Dhiru Monchik",
      title: "roast video 3",
      description: "roasttvhbcdbcbnd 3",
    },
  ];
  const video_list = useSelector((state) => state.HistoryReducer);
  return (
    <div className="w-[100%] overflow-y-hidden">
      <WHL
        name={"History"}
        videos={video_list}
        isToggleSidebar={isToggleSidebar}
        currUser={currUser}
      />
    </div>
  );
};

export default WatchHistory;
