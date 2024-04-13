import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/authAction.js";
import { IoMdClose } from "react-icons/io";
import "./CreateEditChannel.css";
import { updateChannelData } from "../../Actions/ChannelUser.js";

const CreateEditChannel = ({ setEditCreateChanelBtn, setUploadVideoBtn }) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const [name, setName] = useState(CurrentUser?.result.name);
  const [desc, setDesc] = useState(CurrentUser?.result.desc);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("handle submit");
    if (!name) {
      alert("Plz Enter Name !");
    } else if (!desc) {
      alert("Plz Enter Discription !");
    } else {
      dispatch(
        updateChannelData(CurrentUser?.result._id, {
          name: name,
          desc: desc,
        })
      );
      setEditCreateChanelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className="absolute z-50 flex w-1000 h-100">
      <div className="m-auto bg-greey flex flex-col relative p-10 rounded-lg container2_CreateEditChanel">
        <h1>
          {CurrentUser?.result.name ? <>Edit</> : <>Create </>}
          Your Channel
        </h1>
        <IoMdClose
          size={23}
          className="ibtn_x"
          onClick={() => setEditCreateChanelBtn(false)}
        />
        <input
          type="text"
          placeholder="Enter Your Channel Name"
          className="ibox"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="desc"
          type="text"
          rows={15}
          placeholder={"Enter Chanel Description"}
          className={"ibox"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="ibtn" onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateEditChannel;
