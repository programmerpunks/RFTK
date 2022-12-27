import React from "react";

const TryCard = ({ heading, img, vid }) => {
  return (
    <a href="/" className="min-w-[200px] md:min-w-[400px] lg:min-w-[500px]">
      <div className="bg-slate-400 rounded-3xl p-5 flex justify-center items-center relative object-contain">
        <div className="flex justify-end">
          <video autoPlay loop muted className="w-[90%] rounded-3xl">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <img className="absolute left-[10%] h-20 w-20" src={img} alt="" />
        <h1 className="absolute left-[0%] bottom-[10%] -rotate-90">
          {heading}
        </h1>
      </div>
    </a>
  );
};

export default TryCard;
