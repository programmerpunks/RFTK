import React from "react";

const WinnerCard = ({ position, img, name }) => {
  return (
    <div className="bg-yellow-700 flex justify-start p-2 rounded-3xl my-2 winnerItembg">
      <div className="rounded-3xl bg-orange-400 flex">
        <p className="flex justify-center items-center py-5 px-7 md:py-2 md:px-3 xl:px-6 xl:py-5 ">
          {position}
          <sup>{position === 1 ? "st" : position === 2 ? "nd" : "rd"}</sup>
        </p>
      </div>
      <div className="flex ml-4 items-center ">
        <div className="w-[20%] md:w-12">
          <img className="w-[80%] rounded-full" src={img} alt="" />
        </div>
        <div>
          {position === 1 ? (
            <h3 className="text-orange-200 text-sm xl:text-base font-semibold">
              WINNER
            </h3>
          ) : null}
          <h3 className="text-white font-bold md:text-sm xl:text-base">
            @{name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
