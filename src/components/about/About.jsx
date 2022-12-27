import React from "react";
import about from "../../images/about/about-us2.svg";

const About = () => {
  return (
    <div className="flex-col mx-[10%] my-10">
      <h1 className="text-white font-bold">WHO WE ARE</h1>
      <div className="flex justify-center my-5 ">
        <img src={about} alt="" />
      </div>
      <p className="text-2xl text-slate-400">
        We are a <span className="cd">creator</span> led organisation. RTFKT
        uses the latest in game engines, NFT, blockchain authentication and
        augmented reality, combined with manufacturing expertise to create one
        of a kind sneakers and digital artifacts.
      </p>
    </div>
  );
};

export default About;
