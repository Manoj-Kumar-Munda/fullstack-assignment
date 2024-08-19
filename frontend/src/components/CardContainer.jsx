import React, { useEffect, useState } from "react";
import Card from "./Card";

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
      <div className="max-w-screen-lg w-full mx-auto  py-12 ">
        <div className="max-w-[800px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center md:justify-items-stretch gap-x-6 gap-y-6">
          {cards?.map((card) => (
            <Card key={card?._id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
