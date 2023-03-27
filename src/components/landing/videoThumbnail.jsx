import React from "react";

const VideoThumbnailSection = ({setNFT ,thumbnail,title}) => {
  return (
    <>
      <div className="rounded-full w-[15%] cursor-pointer" onClick={()=>{setNFT(title)}}>
        <img src={thumbnail} alt="/" />
      </div>
    </>
  );
};

export default VideoThumbnailSection;
