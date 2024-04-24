import React, { useState } from "react";
import "./yourChannel.css";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineInfo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const DescribeChannel = ({
  setEditCreateChanelBtn,
  currUser,
  Cid,
  setUploadVideoBtn,
}) => {
  console.log(Cid, "cid");
  console.log(currUser);

  const allChannels = useSelector((state) => state?.channels);
  console.log("allChannels", allChannels);
  const currentChannel = allChannels.filter((c) => c._id === Cid)[0];
  console.log("current channel", currentChannel);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <div className="channel-header-info">
        <div className="channel-photo-5">
          <img src={currentChannel.image} alt="" />
        </div>
        <div className="content-info-5">
          <div className="channel-name-5">
            <h1 className="text-white text-2xl font-bold">
              {currentChannel.name}
            </h1>
          </div>

          <div className="user-channel-info">
            @{currentChannel.name} &nbsp; &bull; &nbsp; 2subscribers
          </div>
          <div className="about-channel-5 ">
            {currentChannel.desc} &nbsp; &nbsp;{" "}
            <IoIosArrowForward
              className="text-white mt-3 hover:bg-greey rounded-lg  "
              style={{
                left: "600px",

                position: "absolute",
              }}
              size={20}
              onClick={() => setShowAbout(!showAbout)}
            />
          </div>
          {currUser._id === currentChannel._id && (
            <div className="about-channel-btns">
              <div
                className="customise-channel-5"
                onClick={() => setEditCreateChanelBtn(true)}
              >
                <button className="py-1 px-2 rounded-full">
                  Customise Channel
                </button>
              </div>
              <div
                className="manage-videos customise-channel-5"
                onClick={() => setUploadVideoBtn(true)}
              >
                <button className="py-1 px-2 rounded-full">Upload Video</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showAbout && (
        <div
          className="show-about-container text-white"
          style={{
            position: "absolute",
            // top: "-900px",
            top: "300px",
          }}
        >
          <div className="heading-about">
            About{" "}
            <IoClose
              size={23}
              onClick={() => setShowAbout(!showAbout)}
              className="close-about text-xl"
            />
          </div>
          <div className="content-of-about mt-3">{currentChannel.desc}</div>
          <div className="chanel-about-details">
            <div className="heading-details">Channel Details</div>

            <div className="subscribers-about-count">
              <IoPeopleCircleOutline size={23} className="text-xl" /> 2
              Subscribers
            </div>
            <div className="joined-on-show subscribers-about-count">
              <MdOutlineInfo size={23} /> Joined on {currentChannel.joinedOn}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DescribeChannel;
