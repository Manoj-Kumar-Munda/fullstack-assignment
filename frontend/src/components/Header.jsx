import React from "react";
import Icon from "../assets/shape.svg";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-black py-4">
      <header className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />

          <div className="flex gap-2 text-white">
            <h1 className="">Abstract</h1>
            <span>|</span>
            <span className="">Help Center</span>
          </div>
        </div>

        <button className="text-white border border-white px-4 py-1 rounded-md">
          Submit a request
        </button>
      </header>
    </div>
  );
};

export default Header;
