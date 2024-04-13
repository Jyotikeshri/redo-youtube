import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/AllRoutes";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [editCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const toggleSidebar = () => {
    setIsToggleSidebar(!isToggleSidebar);
  };
  const [count, setCount] = useState(0);

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

      <AllRoutes isToggleSidebar={isToggleSidebar} />
    </Router>
  );
}

export default App;
