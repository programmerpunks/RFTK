import React from "react";

import { partner ,PartnerDetails } from "../../content/Partner";
import SinglePartner from "./SinglePartner";

const Partner = () => {
  return (
    <div className="flex flex-row justify-center mx-10 xl:mx-[10%] 2xl:mx-[15%] space-x-5" id="PARTNER">
      <div className="rounded-3xl hidden lg:block my-10 basis-1/2">
        <img
          className="rounded-3xl 2xl:justify-end lg:w-fit lg:h-[100%] "
          src={partner.bgImage}
          alt=""
        />
      </div>
      <div className="bg-[#272932] my-10 lg:w-[50%] mx-[15%] lg:mx-0 p-5 rounded-3xl">
        <div className="flex justify-center">
          <p className="text-center font-bold md:text-xl text-white py-7 w-[50%]">
            {partner.title}
          </p>
        </div>
        <div className=" flex flex-wrap gap-2 justify-center mx-[5%] lg:mx-0 my-10">
          {PartnerDetails.map((partner) => {
            return <SinglePartner img={partner.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
