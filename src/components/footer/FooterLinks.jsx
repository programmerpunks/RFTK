import React from "react";

import { socialLinks } from "../../content/SocialLinks";
import FooterBtn from "./FooterBtn";

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {socialLinks.map((socLnk) => {
        return <FooterBtn text={socLnk.text} link={socLnk.link} />;
      })}
    </div>
  );
};

export default FooterLinks;
