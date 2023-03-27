import React from "react";

import { aboutContent } from "../../content/About";

const About = () => {
  return (
    <div className="flex-col mx-[10%] my-10">
      <h1 className="text-white font-bold">{aboutContent.title}</h1>
      <div className="flex justify-center my-5 ">
        <img src={aboutContent.image} alt="" />
      </div>
      <p className="text-2xl text-slate-400">{aboutContent.description}</p>
    </div>
  );
};

export default About;
