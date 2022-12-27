import React from "react";
import FooterBtn from "./FooterBtn";
import { FooterButtonsDetails } from "./FooterButtonsDetails";

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {FooterButtonsDetails.map((btn) => {
        return <FooterBtn text={btn.text} link={btn.link} />;
      })}
    </div>
  );
};

export default FooterLinks;
