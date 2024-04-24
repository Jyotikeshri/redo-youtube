import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "./logo.ico";

import { RxHamburgerMenu } from "react-icons/rx";
import { GoogleLogin } from "react-google-login";

import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { gapi } from "gapi-script";
import { FaRegUserCircle } from "react-icons/fa";
import Searchbar from "./Searchbar/Searchbar";
import { login } from "../../Actions/authAction";
import Auth from "../../Pages/Auth/AuthPage";

const Navbar = ({ toggleSidebar, setEditCreateChanelBtn }) => {
  const [AuthBtn, setAuthBtn] = useState(false);
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  {
    console.log("current user navbar", CurrentUser);
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "1027995540891-qngb7d300qguhbpvfuqroirdh1q3f8o3.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    {
      console.log("response", response);
    }
    const Email = response?.profileObj.email;
    const imageUrl = response?.profileObj.imageUrl;
    {
      fetch("http://ip-api.com/json/?fields=61439")
        .then((res) => res.json())
        .then((res) => {
          dispatch(login({ email: Email, image: imageUrl, city: res.city }));
        });
    }

    // navigator.geolocation.getCurrentPosition(async (position) => {
    //   const { latitude, longitude } = position.coords;
    //   const response = await fetch(
    //     `https://geocode.xyz/${latitude},${longitude}?json=1`
    //   );
    //   const data = await response.json();
    // const city = data.city;

    // });
  };

  {
    console.log("current user", CurrentUser);
  }

  const onFailure = (response) => {
    {
      console.log("response", response);
    }
    console.log("Failed", response);
  };

  return (
    <>
      <div className="bg-black flex items-center justify-between h-16 px-4 w-full">
        <div className="flex items-center justify-center">
          <div
            className="flex justify-center items-center me-5 ms-4 text-white cursor-pointer hover:bg-greey  rounded-full p-2"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu size={22} />
          </div>
          <img src={logo} alt="" width={50} height={50} />
          <div className="text-white text-xl font-serif">MeTube</div>
        </div>

        <Searchbar />

        <div className="flex items-center justify-center gap-7 text-white">
          <RiVideoAddLine size={20} className="cursor-pointer" />
          <FaRegBell size={20} className="cursor-pointer" />
          {CurrentUser ? (
            <div className="flex items-center justify-center text-white cursor-pointer">
              <img
                src={CurrentUser.image}
                alt=""
                className="rounded-full"
                width={"50px"}
                height={"50px"}
                onClick={() => setAuthBtn(true)}
              />
            </div>
          ) : (
            <>
              <GoogleLogin
                clientId="1027995540891-qngb7d300qguhbpvfuqroirdh1q3f8o3.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <div
                    className="flex items-center justify-center gap-3 border-blue-600 border-2 text-blue-600 p-2 cursor-pointer"
                    onClick={renderProps.onClick}
                  >
                    <FaRegUserCircle size={20} />
                    SignIn
                  </div>
                )}
              />
            </>
          )}
        </div>
      </div>
      {AuthBtn && (
        <Auth
          User={CurrentUser}
          setAuthBtn={setAuthBtn}
          setEditCreateChanelBtn={setEditCreateChanelBtn}
        />
      )}
    </>
  );
};

export default Navbar;
