import React, { useState } from "react";

import get_NFTs_Filtered from "./helpingFunctions/NFTSelectionFunction";
import LandingData from "./rftDataAPI";
import VideoCardSection from "./videoCard";
import VideoThumbnailSection from "./videoThumbnail";

const Landing = () => {

  const [NFTCategory, setNFTCategory] = useState("RTFKT Cryptokicks iRL");
  let filtered_NFT = get_NFTs_Filtered(NFTCategory, LandingData);

  return (
    <>
      <div className="w-full items-center h-[80vh] relative overflow-hidden">
        <div className="relative h-[100%] top-0">
          <video
            src={filtered_NFT.backgroundVideo}
            autoPlay
            loop
            muted
            className="object-cover videoClass absolute w-full opacity-70"
          ></video>
        </div>
        <div className="extraDiv"></div>
        <div className="flex justify-evenly items-center absolute w-full h-full top-0 flex-col md:flex-row">
          <div className="flex flex-col text-white mt-[120%] md:mt-0">
            <div className="">CRYPTOKICKS IRL </div>
            <div className="text-4xl"> Cryptokicks iRL Mint has Ended</div>
            <div className="flex p-5 justify-evenly">
              {LandingData.map((nft, index) => {
                return (
                  <VideoThumbnailSection
                    key={index}
                    title={nft.title}
                    setNFT={setNFTCategory}
                  />
                );
              })}
            </div>
          </div>
          <VideoCardSection
            title={NFTCategory}
            cartVideo={filtered_NFT.cartVideo}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
