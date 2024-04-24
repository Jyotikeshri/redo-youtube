import React from "react";
import WHL from "../../Components/WHL/WHLList";
import vid from "../HomePage/vid.mp4";
import { useSelector } from "react-redux";

const WatchLater = ({ isToggleSidebar, currUser }) => {
  const watchLaterList = useSelector((state) => state.WatchLater);
  console.log("watch later list", watchLaterList);
  return (
    <WHL
      name={"Watch Later"}
      videos={watchLaterList}
      isToggleSidebar={isToggleSidebar}
      currUser={currUser}
    />
  );
};

export default WatchLater;
