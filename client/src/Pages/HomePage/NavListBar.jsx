import React from "react";

const NavListBar = ({ List }) => {
  return (
    <div
      className="h-90 bg-black hidden lg:flex items-center justify-start gap-6 relative   "
      style={{ top: "-900px", left: "250px" }}
    >
      {List.map((l) => {
        return (
          <div className="flex justify-center items-center  " key={l}>
            <button className="text-white text-md bg-blac rounded-full hover:bg-greey py-2 px-3">
              {l}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NavListBar;
