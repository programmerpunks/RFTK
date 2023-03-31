import React from "react";

import WinnerCard from "./WinnerCard";
import { winner, WinnersDetails } from "../../content/Winner";

const Winner = () => {
  return (
    <div className="bg-[#272932] mx-[10%] md:flex py-10 px-10 rounded-xl bg-grid-img" id="WINNER">
      <div className="md:w-[40%]">
        <h1 className="text-2xl md:w-[80%] md:text-xl xl:text-2xl 2xl:text-3xl text-[#FFFFFF]">
          {winner.title}
        </h1>
        <button className="hidden border md:w-[80%] md:my-[20%] font-bold text-sm py-3 md:block text-black w-full bg-white rounded-2xl">
          {winner.btnTitle}
        </button>
      </div>
      <div className="md:w-64 my-10 flex justify-center ">
        <img className="w-[60%] hover:scale-110 duration-1000 " src={winner.Image} alt="" />
      </div>
      <div className="md:w-[40%]">
        <h1 className="text-xs lg:text-base font-bold text-[#FFFFFF]">
          {winner.challenger}
        </h1>
        <div>
          {WinnersDetails.map((winner) => {
            return (
              <WinnerCard
                position={winner.position}
                img={winner.img}
                name={winner.name}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button className="border font-bold text-sm py-3 md:hidden text-black w-full bg-white rounded-2xl">
          {winner.btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Winner;