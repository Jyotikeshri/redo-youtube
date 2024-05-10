import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UploadVideo.css";

import { IoClose } from "react-icons/io5";
import { uploadVideo } from "../../Actions/VideoAction";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

// import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const UploadVideo = ({ setUploadVideoBtn, uploadVideoBtn }) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const handleUpload = () => {
    setUploadVideoBtn(!uploadVideoBtn);
  };

  const handleSetVideoFile = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const [progress, setProgress] = useState(0);

  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
        setUploadVideoBtn(false);
      }
    },
  };
  const uploadVideoFile = () => {
    if (!title) {
      alert("Plz Enter A Title of the video");
    } else if (!videoFile) {
      alert("Plz Attach a video File");
    } else if (videoFile.size > 100000) {
      alert("Plz Attch video file less than 100kb");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("desc", desc);
      fileData.append("channel", CurrentUser._id);
      fileData.append("image", CurrentUser.image);
      fileData.append("Uploader", CurrentUser.name);

      const file = fileData.get("file"); // Access the file using the name "file"
      console.log("file", file);
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  };

  return (
    <div className="uploadVideo-container">
      <div className="uploadVideo-container-2 w-[300px] h-[600px] sm:w-[500px] sm:h-[500px] md:w-[40rem] md:h-[40rem] lg:w-[40rem] lg:h-[40rem]">
        <div className="heading-upload text-white">
          Upload Video{" "}
          <IoClose
            className="upload-close-icon"
            size={23}
            onClick={handleUpload}
          />
        </div>
        <div className="upload-content">
          <div className="upload-text">
            <b>Drag and drop video files to upload</b>
            <br />
            Your videos will be private until you publish them.
          </div>
          <div className="upload-file">
            <label for="videoFile" class="custom-file-upload">
              Select files
            </label>
            <input
              type="file"
              id="videoFile"
              name="videoFile"
              onChange={(e) => handleSetVideoFile(e)}
              accept=".mp4, .mov, .wmv, .mkv"
              multiple
            />
          </div>
          <div className="upload-title">
            <input
              type="text"
              placeholder="Enter Title of video"
              onChange={(e) => setTitle(e.target.value)}
              className="w-[250px] sm:w-[450px]  md:w-[35rem]  lg:w-[35rem]"
            />
          </div>
          <div className="upload-desc upload-title">
            <textarea
              type="text"
              placeholder="Enter Description of video"
              onChange={(e) => setDesc(e.target.value)}
              className="w-[250px] sm:w-[450px]  md:w-[35rem]  lg:w-[35rem] h-[150px]"
            ></textarea>
          </div>
          <div className="upload-btn bg-[#cc33ff] p-2 mt-2 rounded">
            <button onClick={uploadVideoFile}>Upload Video</button>
          </div>
          {/* <div className="loader ibox_div_vidupload">
            <CircularProgressbar
              value={progress}
              text={`${progress}`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,255,255,${progress / 100})`,
                textColor: "#f88",
                trailColor: "#adff2f",
                backgroundColor: "#3e98c7",
              })}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
