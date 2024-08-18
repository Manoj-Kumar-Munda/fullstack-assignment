import React, { useEffect, useState } from "react";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState();
  const fetchCrads = async () => {
    try {
      const res = await fetch("http://localhost:8000/cards");
      const data = await res.json();

      if (!data?.success) {
        throw new Error("Failed to fetch");
      }
      setCards(data?.data);
      setIsError(null);
    } catch (error) {
      setIsError(error?.message);
    }
  };
  useEffect(() => {
    fetchCrads();
  }, []);

  console.log(cards);

  return (
    <div className="">
      <div className="max-w-screen-lg w-full mx-auto  py-8 ">
        <div className="max-w-[800px] mx-auto grid grid-cols-[360px_360px] justify-between gap-y-6">
          {cards?.map((card) => (
            <div
              className="bg-gray-100 rounded-lg max-w-[380px] border-2 border-gray-300"
              key={card?._id}
            >
              <h1 className="border-b-2 py-2 border-gray-300 px-3 text-gray-600 font-extrabold ">
                {card?.title}
              </h1>
              <p className="px-3 pt-2 pb-6">{card?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
