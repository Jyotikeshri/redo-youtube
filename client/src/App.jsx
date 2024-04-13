import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/AllRoutes";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import { fetchAllChannel } from "./Actions/ChannelUser";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChannel());
    // dispatch(getAllVideo());
    // dispatch(getAlllikedVideo());
    // dispatch(getAllwatchLater());
    // dispatch(getAllHistory());
  }, [dispatch]);
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [editCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const toggleSidebar = () => {
    setIsToggleSidebar(!isToggleSidebar);
  };

  return (
    <Router>
      {editCreateChanelBtn && (
        <CreateEditChannel setEditCreateChanelBtn={setEditCreateChanelBtn} />
      )}

      <Navbar
        isToggleSidebar={isToggleSidebar}
        toggleSidebar={toggleSidebar}
        setEditCreateChanelBtn={setEditCreateChanelBtn}
      />

      <AllRoutes
        isToggleSidebar={isToggleSidebar}
        setEditCreateChanelBtn={setEditCreateChanelBtn}
      />
    </Router>
  );
}

export default App;
