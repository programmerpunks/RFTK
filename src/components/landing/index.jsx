import React, { useState } from "react";

import get_NFTs_Filtered from "./helpingFunctions/NFTSelectionFunction";
import LandingData from "../../content/Landing";
import { landingSection } from "../../content/Landing";
import VideoCardSection from "./videoCard";
import VideoThumbnailSection from "./videoThumbnail";

const Landing = () => {
  const [NFTCategory, setNFTCategory] = useState(LandingData[0].title);
  let filtered_NFT = get_NFTs_Filtered(NFTCategory, LandingData);

  return (
    <>
      <div className="w-full h-screen items-center md:h-[80vh] relative overflow-hidden">
        <div className="relative h-[100%] top-0">
          <video
            src={filtered_NFT.backgroundVideo}
            autoPlay
            loop
            muted
            className="object-cover h-screen videoClass absolute w-full opacity-70"
          ></video>
        </div>
        <div className="extraDiv"></div>
        <div className="flex justify-evenly items-center absolute w-full h-full top-0 flex-col md:flex-row">
          <div className="flex flex-col text-white mt-[20%] md:mt-0">
            <div className="flex justify-center md:justify-start">{landingSection.title}</div>
            <div className="flex justify-center text-xl md:text-4xl">{landingSection.description}</div>
            <div className="flex p-5 justify-evenly">
              {LandingData.map((nft, index) => {
                return (
                  <VideoThumbnailSection
                    key={index}
                    title={nft.title}
                    thumbnail={nft.thumbnail}
                    setNFT={setNFTCategory}
                  />
                );
              })}
            </div>
          </div>
          <VideoCardSection
            title={NFTCategory}
            type={filtered_NFT.type}
            quantity={filtered_NFT.quantity}
            cartVideo={filtered_NFT.cartVideo}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
