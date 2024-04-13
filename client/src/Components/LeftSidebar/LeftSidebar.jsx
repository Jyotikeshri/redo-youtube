import React from "react";

import ShrinkedSidebar from "./ShrinkedSidebar";
import DrawerSidebar from "./DrawerSidebar";
const LeftSidebar = ({ isToggleSidebar }) => {
  return (
    <>
      {console.log(isToggleSidebar)}
      {isToggleSidebar ? <DrawerSidebar /> : <ShrinkedSidebar />}
    </>
  );
};

export default LeftSidebar;
