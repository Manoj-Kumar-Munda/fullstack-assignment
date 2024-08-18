import React from "react";

const Hero = () => {
  return (
    <div className="h-64 bg-[#DADBF0] grid items-center justify-items-center">
      <div className=" max-w-screen-sm w-full flex flex-col gap-6">
        <h1 className="text-center text-5xl">How can we help?</h1>
        <div className="w-full bg-white px-2 outline outline-1 shadow-md rounded-sm">
          <input
            type="text"
            className="w-full  py-3 px-3"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
