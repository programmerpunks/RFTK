import React from "react";

const SinglePartner = ({ img }) => {
  return (
    <div className="bg-gray-800 p-7 flex justify-center justify-items-center w-[48%] md:w-[30%] rounded-2xl">
      <img className="w-fit" src={img} alt="" />
    </div>
  );
};

export default SinglePartner;
