import React, { useState } from "react";

const arrowimg = require("../../images/navbar/arrow-down-white.svg").default;
const logo = require("../../images/navbar/logo.svg").default;

function DropdownItem(props) {
  return (
    <a href="#COLLECTION" className="dropdownItem flex justify-center text-sm text-[#FFFFFF] p-4 rounded-2xl hover:bg-[#5733F5]">
      <p> {props.text} </p>
    </a>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-[10vh] w-full flex-wrap absolute z-10 top-0 px-5">
        <div className="flex w-[30%] md:w-[10%]">
          <img src={logo} alt="/" />
        </div>
        <div
          className="md:flex justify-end w-[90%] items-center p-5 text-white cursor-pointer hidden"
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <a href="#WINNER" className="hidden md:block p-4">JOIN</a>
          <div
            className="p-4 hidden md:flex"
            onMouseOver={() => {
              setOpen(true);
            }}
          >
            COLLECTIONS
            <img src={arrowimg} alt="/" className="pl-1" />
          </div>
          <div
            className={`dropdown-menu bg-black nav-subItem aboslute flex justify-center z-30 rounded-xl overflow-hidden ${
              open ? "show" : "hidden"
            }`}
          >
            <ul>
              <DropdownItem text={"RIMOWA"} />
              <DropdownItem text={"BYREDO"} />
              <DropdownItem text={"SPACE DRIP FORGING"} />
              <DropdownItem text={"MNLTH"} />
            </ul>
          </div>
          <a href="#PARTNER" className="hidden md:block p-4">PARTNERS</a>
          <button className="flex p-3 px-6 bg-blue-700 rounded-full">
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
