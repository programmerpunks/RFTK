import React from "react";

const VideoCardSection = ({  cartVideo, quantity,title, type }) => {
  return (
    <>
      <div className="hidden md:flex  flex-col bg-[#272733] justify-center w-[50%] md:w-[18%] rounded-[10%] mt-[150px]">
        <div className="flex">
          <video
            autoPlay
            loop
            muted
            className="rounded-[10%]"
            src={cartVideo}
          ></video>
        </div>
        <div className="flex flex-col text-white p-4">
          <div>{title}</div>
          <div>{quantity}</div>
          <div className="pl-3 pt-2 rounded-[25%] justify-center">
            {type}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCardSection;
