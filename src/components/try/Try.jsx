import React from "react";

import TryCard from "./TryCard";
import { TryDetails } from "./TryDetails";

const Try = () => {
  return (
    <>
      <div className="py-5 px-10 mx-[7%]">
        <div className="text-white font-bold">
          <h1>TRY ON THEM</h1>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-5 py-5">
            {TryDetails.map((item) => {
              return (
                <TryCard heading={item.heading} img={item.img} vid={item.vid} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Try;
