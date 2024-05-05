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
      <div
        className="channel-header-info relative top-[100px] w-[300px] lg:w-[1700px] md:w-[700px] sm:w-[500px] xsm:w-[400px] -ms-[90px]
      xsm:-ms-[70px] sm:-ms-[0px] md:ms-[100px] lg:ms-[100px] h-[450px] md:h-[300px] lg:h-[300px]"
      >
        <div className="channel-photo-5 w-[160px] h-[160px] -top-[100px] relative sm:-top-[20px]  md:-top-[20px] lg:-top-[20px]  ">
          <img
            src={currentChannel.image}
            alt=""
            // className={
            //   "w-[70px] h-[70px] md:h-[100px] md:w-[100px] lg:w-[160px] lg:h-[160px]"
            // }
            className=" left-[70px] relative xsm:ms-[100px] sm:ms-[250px] md:ms-[400px] lg:ms-[400px] w-[160px] h-[160px]"
          />
        </div>
        <div className="content-info-5 relative top-[100px] -left-[60px] sm:top-[0px] md:top-[0px] lg:top-[0px] sm:left-[200px] md:left-[300px] lg:left-[300px]">
          <div className="channel-name-5">
            <h1 className="text-white text-xl font-bold sm:text-2xl md:text-2xl lg:text-2xl">
              {currentChannel.name}
            </h1>
          </div>

          <div className="user-channel-info">
            @{currentChannel.name} &nbsp; &bull; &nbsp; 2subscribers
          </div>
          <div className="about-channel-5 ">
            {currentChannel.desc} &nbsp; &nbsp;{" "}
            <IoIosArrowForward
              className="text-white mt-3 hover:bg-greey rounded-lg relative -left-[100px] "
              // style={{
              //   left: "600px",

              //   position: "absolute",
              // }}
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
          className="show-about-container text-white left-[15px] w-[300px] sm:left-[200px] md:left-[300px] lg:left-[700px] sm:w-[600px] md:w-[600px] lg:w-[600px]"
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
