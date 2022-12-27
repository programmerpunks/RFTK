import React from "react";

const FooterBtn = ({ text, link }) => {
  return (
    <a href={link} className="flex w-[49%]" target="_blank" rel="noreferrer">
      <button className="border border-gray-600 rounded-xl py-2 my-1 w-full font-bold hover:bg-white hover:text-black">
        {text}
      </button>
    </a>
  );
};

export default FooterBtn;
