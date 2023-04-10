import React from "react";

import { FooterData } from "../../content/Footer";
import FooterLinks from "./FooterLinks";
import { socialLinks } from "../../content/SocialLinks";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-10">
      <div className="flex justify-evenly m-[5%]">
        <div className="lg:w-2/4">
          <img className="w-[40%] my-3" src={FooterData.logo} alt="" />
          <p className="text-slate-400">{FooterData.title}</p>
          <div className="my-5 lg:hidden">
            <FooterLinks />
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/7 lg:ml-[10%] lg:mt-5 space-y-2">
          <a
            href="#COLLECTION"
            className="hover:border-b-2 flex border-gray-500"
          >
            Collections
          </a>
          <a href="#WINNER" className="hover:border-b-2 flex border-gray-500">
            Winners
          </a>
          <a href="#FEATURE" className="hover:border-b-2 flex border-gray-500">
            Features
          </a>
          <a href="#MINT" className="hover:border-b-2 flex border-gray-500">
            MINT
          </a>
          <a href="#PARTNER" className="hover:border-b-2 flex border-gray-500">
            Partners
          </a>
        </div>
        <div className="hidden lg:block lg:w-2/7 lg:ml-[5%] lg:mt-5">
          <div>
            <ul className="space-y-2">
              {socialLinks.map((socLnk,index) => {
                return (
                  <a
                    href={socLnk.link}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                    className="flex hover:border-b-2 cursor-pointer border-gray-500 "
                  >
                    {socLnk.text}
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mx-[5%]">
        <p className="text-xs font-bold text-gray-400 lg:w-[60%]">
          {FooterData.rights}
        </p>
      </div>
    </div>
  );
};

export default Footer;
