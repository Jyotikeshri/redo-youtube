import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/authAction.js";
import { IoMdClose } from "react-icons/io";
import "./CreateEditChannel.css";
import { updateChannelData } from "../../Actions/ChannelUser.js";

const CreateEditChannel = ({ setEditCreateChanelBtn, setUploadVideoBtn }) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const [name, setName] = useState(CurrentUser?.name);
  const [desc, setDesc] = useState(CurrentUser?.desc);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("handle submit");
    if (!name) {
      alert("Plz Enter Name !");
    } else if (!desc) {
      alert("Plz Enter Discription !");
    } else {
      dispatch(
        updateChannelData(CurrentUser?._id, {
          name: name,
          desc: desc,
        })
      );
      setEditCreateChanelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser.email }));
      }, 5000);
    }
  };
  return (
    <div className="absolute z-50 flex w-1000 h-100">
      <div className="m-auto bg-greey flex flex-col relative p-10 rounded-lg container2_CreateEditChanel w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[40rem] md:h-[40rem] lg:w-[40rem] lg:h-[40rem]">
        <h1 className="text-white font-bold text-2xl mt-2 mb-4">
          {CurrentUser.name ? <>Edit </> : <>Create </>}
          Your Channel
        </h1>
        <IoMdClose
          size={27}
          className="ibtn_x relative left-[250px] sm:left-[420px] md:left-[580px] lg:left-[580px] -top-[50px]"
          onClick={() => setEditCreateChanelBtn(false)}
        />
        <input
          type="text"
          placeholder="Enter Your Channel Name"
          className="ibox border border-1 w-[250px] sm:w-[450px]  md:w-[35rem]  lg:w-[35rem] "
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="desc"
          type="text"
          rows={15}
          placeholder={"Enter Chanel Description"}
          className={
            "ibox border border-1 w-[250px] sm:w-[450px]  md:w-[35rem]  lg:w-[35rem] h-[150px]"
          }
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
