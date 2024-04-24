import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/AllRoutes";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import UploadVideo from "./Pages/UploadVideo/UploadVideo.jsx";
import { fetchAllChannel } from "./Actions/ChannelUser";
import { useDispatch, useSelector } from "react-redux";
import { useSyncExternalStore } from "react";
import { getAllVideo } from "./Actions/VideoAction.js";
import { getAlllikedVideo } from "./Actions/LikedVideo.js";
import { getAllwatchLater } from "./Actions/WatchLater.js";
import { getAllHistory } from "./Actions/HistoryAction.js";
import { getAllComment } from "./Actions/CommentAction.js";
import { getAlllikedComment } from "./Actions/LikedComment.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
    dispatch(getAlllikedComment());
  }, [dispatch]);
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [editCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const [uploadVideoBtn, setUploadVideoBtn] = useState(false);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const toggleSidebar = () => {
    setIsToggleSidebar(!isToggleSidebar);
  };

  return (
    <Router>
      {uploadVideoBtn && (
        <UploadVideo
          setUploadVideoBtn={setUploadVideoBtn}
          uploadVideoBtn={uploadVideoBtn}
        />
      )}
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
        setUploadVideoBtn={setUploadVideoBtn}
        CurrUser={CurrentUser}
      />
    </Router>
  );
}

export default App;
