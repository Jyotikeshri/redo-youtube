import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchList = ({ TitleArray, setSearchQuery }) => {
  return (
    <div
      className="w-400 px-1 bg-greey flex-col absolute top-100 rounded-lg  z-10 py-2"
      style={{ top: "60px", left: "40vw" }}
    >
      {TitleArray.map((t) => {
        return (
          <div
            className="flex items-center justify-start px-2 py-2 text-white text-xl gap-3 cursor-pointer"
            key={t}
            onClick={() => setSearchQuery(t)}
          >
            <IoSearch size={20} /> {t}
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;
