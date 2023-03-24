import React from "react";

import FooterLinks from "./FooterLinks";
import logotype from "../../images/footer/logotype.png";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-10">
      <div className="flex justify-evenly m-[5%]">
        <div className="lg:w-2/4">
          <img className="w-[40%] my-3" src={logotype} alt="" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            laudantium iste eveniet nemo voluptatem ex quae animi illo magni,
            eligendi sint explicabo quibusdam? Aliquam odit temporibus eos,
            rerum ducimus perspiciatis.
          </p>
          <div className="my-5 lg:hidden">
            <FooterLinks />
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/7 lg:ml-[10%] lg:mt-5">
          <div>
            <ul className="space-y-2">
              <li className="hover:border-b-2 border-gray-500">FAQ</li>
              <li className="hover:border-b-2 border-gray-500">
                Legal Overview
              </li>
              <li className="hover:border-b-2 border-gray-500">
                Privacy Policy
              </li>
              <li className="hover:border-b-2 border-gray-500">
                terms & Conditions
              </li>
              <li className="hover:border-b-2 border-gray-500">Press Info</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/7 lg:ml-[5%] lg:mt-5">
          <div>
            <ul className="space-y-2">
              <li className="hover:border-b-2 border-gray-500 ">Instagram</li>
              <li className="hover:border-b-2 border-gray-500">Discord</li>
              <li className="hover:border-b-2 border-gray-500">Twitter</li>
              <li className="hover:border-b-2 border-gray-500">Youtube</li>
              <li className="hover:border-b-2 border-gray-500">Tiktok</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mx-[5%]">
        <p className="text-xs font-bold text-gray-400 lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          pariatur, totam ex quaerat quos, quod commodi dolore odit cupiditate
          rerum molestias facilis eum dolor amet autem exercitationem doloribus
          quis dolorem?
        </p>
      </div>
    </div>
  );
};

export default Footer;
