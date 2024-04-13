import React from "react";
import { TfiDownload } from "react-icons/tfi";

const DownloadButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <button className="px-3 py-2 bg-greey text-white text-md flex justify-center items-center gap-3 rounded-full">
        <TfiDownload size={22} /> Download
      </button>
    </div>
  );
};

export default DownloadButton;
