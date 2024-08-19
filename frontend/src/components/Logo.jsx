import React from "react";
import Icon from "../assets/shape.svg";
const Logo = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-white w-8 h-8 rounded-md p-1">
        <img src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Logo;
