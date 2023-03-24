import React from "react";

const mintImg = require("../../images/mintChecker/mint_checker_img.png");

const MintChecker = () => {
  return (
    <>
      <div className="flex md:px-60 md:py-20 flex-col flex-wrap md:p-0 p-20 w-full overflow-hidden justify-center">
        <div className="flex text-white w-full p-5">PRIVATE MINT CHECKER</div>
        <div className="flex lg:flex-nowrap flex-wrap bg-[#272733] rounded-3xl">
          <img
            className="w-full max-w-full rounded-2xl"
            src={mintImg}
            alt="/"
          />
          <div className="flex md:py-0 py-14 px-20 flex-col md:px-20 justify-center">
            <div className="text-white text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-[#A3A6B5] pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              aliquam quam consequuntur suscipit dolor voluptas ipsa non impedit
              eaque doloribus possimus debitis esse sit eius rem corrupti
            </div>
            <div className="flex py-5 justify-center">
              <input
                className="shadow bg-transparent border rounded-2xl text-sm  p-[16px] py-2 text-[#A3A6B5]"
                type="text"
                placeholder="Paste the NFT OpenSea link here"
              />
            </div>
            <div className="flex justify-center">
              <button className="rounded-2xl bg-white py-3 px-6 text-sm">
                CHECK IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintChecker;
