import React from "react";

const FeactureCartItem = ({ heading, logo, quantity, title, video_link }) => {
  return (
    <>
      <div className="flex p-4 m-10 md:m-4 bg-[#272733] flex-col rounded-2xl w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/5 xxl:w-1/4">
        <div className="flex w-full items-center pl-2">
          <div className="w-[24px] h-[24px]">
            <img src={logo} alt="/" className="rounded-full" />
          </div>
          <div className="text-[#FFFFFF] p-2">{heading}</div>
        </div>
        <div className="overflow-hidden rounded-[10%] duration-1000 hover:shadow-[0_10px_85px_rgba(79,100,236)]">
          <video
            loop
            muted
            className="w-full hover:scale-110 duration-1000 videoClip"
            onMouseOver={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          >
            <source src={video_link} type="video/mp4" />
          </video>
        </div>
        <div className="pt-4 px-4">
          <div className="text-[#FFFFFF]">{title}</div>
          <div className="text-[#A3A6B5]">{quantity}</div>
        </div>
      </div>
    </>
  );
};

export default FeactureCartItem;
