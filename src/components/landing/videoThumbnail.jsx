import React from "react";

const thumbnail = require("../../images/landing/landing-video-thumbnail.png")

const VideoThumbnailSection = ({setNFT ,title}) => {
  return (
    <>
      <div className="rounded-full w-[15%] cursor-pointer" onClick={()=>{setNFT(title)}}>
        <img src={thumbnail} alt="/" />
      </div>
    </>
  );
};

export default VideoThumbnailSection;
