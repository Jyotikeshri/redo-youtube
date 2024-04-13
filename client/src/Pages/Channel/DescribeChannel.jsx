import React, { useState } from "react";
import "./yourChannel.css";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineInfo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const DescribeChannel = ({ setEditCreateChanelBtn, currUser }) => {
  const Cid = currUser.result._id;
  const allChannels = useSelector((state) => state?.chanelReducers);
  console.log("allChannels", allChannels);
  const currentChanel = allChannels.filter((c) => c._id === Cid)[0];
  console.log("current channel", currentChanel);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <div className="channel-header-info">
        <div className="channel-photo-5">
          <img src="" alt="" />
        </div>
        <div className="content-info-5">
          <div className="channel-name-5">
            <h1 className="text-white text-2xl font-bold">name</h1>
          </div>

          <div className="user-channel-info">
            @name &nbsp; &bull; &nbsp; 2subscribers
          </div>
          <div className="about-channel-5">
            desc &nbsp; &nbsp;{" "}
            <IoIosArrowForward
              size={20}
              onClick={() => setShowAbout(!showAbout)}
            />
          </div>
          {/* {currUser.result._id === currentChanel._id && ( */}
          <div className="about-channel-btns">
            <div className="customise-channel-5">
              <button>Customise Channel</button>
            </div>
            <div className="manage-videos customise-channel-5">
              <button>Upload Video</button>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
      {showAbout && (
        <div className="show-about-container">
          <div className="heading-about">
            About{" "}
            <IoClose
              size={23}
              onClick={() => setShowAbout(!showAbout)}
              className="close-about"
            />
          </div>
          {/* <div className="content-of-about">{currentChanel.desc}</div> */}
          <div className="chanel-about-details">
            <div className="heading-details">Channel Details</div>

            <div className="subscribers-about-count">
              <IoPeopleCircleOutline size={23} /> 2 Subscribers
            </div>
            <div className="joined-on-show subscribers-about-count">
              {/* <MdOutlineInfo size={23} /> Joined on {currentChanel.joinedOn} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DescribeChannel;
