import React from "react";

import FeactureCartItem from "./featuresCartItem";
import featuresData from "./featuresDataAPI";

const Features = () => {
  return (
    <>
      <div className="flex flex-wrap md:px-40 pt-20 justify-center">
        {featuresData.map((feature) => {
          return (
            <FeactureCartItem
              key={feature.id}
              title={feature.title}
              video_link={feature.video_url}
            />
          );
        })}
      </div>
      <div className="flex justify-center my-10 ">
        <button className="text-white outline outline-1 hover:text-black hover:bg-white rounded-2xl px-40 p-2">
          SEE ALL THE DROPS
        </button>
      </div>
    </>
  );
};

export default Features;
