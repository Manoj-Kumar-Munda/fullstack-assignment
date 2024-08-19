import React from "react";

const Card = ({ card }) => {
  return (
    <div className="bg-gray-100 rounded-lg max-w-[380px] w-full border-2 border-gray-300">
      <h1 className="border-b-2 py-2 border-gray-300 px-3 text-gray-600 font-extrabold ">
        {card?.title}
      </h1>
      <p className="px-3 pt-2 pb-6">{card?.description}</p>
    </div>
  );
};

export default Card;
