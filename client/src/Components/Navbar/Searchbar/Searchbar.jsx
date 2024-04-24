import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchListA] = useState(false);
  const titleArray = useSelector((s) => s?.videoReducer)
    ?.data?.filter((q) =>
      q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())
    )
    .map((m) => m?.videoTitle);
  return (
    <>
      <div className="hidden lg:flex border-slate-600 border-1 ">
        <input
          type="text"
          placeholder="Search"
          className=" w-400 rounded-l-full px-2 bg-blac text-white"
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setSearchListA(true)}
          value={searchQuery}
        />
        <NavLink
          to={`/search/${searchQuery}`}
          className="bg-greey flex items-center justify-center   w-10 rounded-r-full text-white px-2 py-2"
          onClick={() => setSearchListA(false)}
        >
          <IoSearch size={20} />
        </NavLink>
      </div>

      {searchQuery && searchListA && (
        <SearchList TitleArray={titleArray} setSearchQuery={setSearchQuery} />
      )}
    </>
  );
};

export default Searchbar;
