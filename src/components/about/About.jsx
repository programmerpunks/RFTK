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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus
        dolorem similique recusandae amet? Cumque quae beatae, itaque accusamus
        eum aut nihil maiores cupiditate quibusdam, in velit, minima ad
        molestiae!
      </p>
    </div>
  );
};

export default About;
