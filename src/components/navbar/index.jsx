import React, { useState } from "react";

const arrowimg = require("../../images/navbar/arrow-down-white.svg").default;
const logo = require("../../images/navbar/logo.svg").default;

function DropdownItem(props) {
  return (
    <li className="dropdownItem flex justify-center text-sm text-[#FFFFFF] p-4 rounded-2xl hover:bg-[#5733F5]">
      <p> {props.text} </p>
    </li>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex w-full flex-wrap absolute z-10 top-0 px-5">
        <div className="flex w-[10%]">
          <img src={logo} alt="/" />
        </div>
        <div
          className="md:flex justify-end w-[90%] items-center p-5 text-white cursor-pointer hidden "
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <div className="p-4">DROPS ARCHIVE</div>
          <div
            className="p-4 flex"
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
              <DropdownItem text={"CLONE X"} />
              <DropdownItem text={"PUNK PROJECT"} />
              <DropdownItem text={"JEFF STAPLE"} />
              <DropdownItem text={"FEWOCIOUS"} />
              <DropdownItem text={"SPACE DRIP 1.2"} />
              <DropdownItem text={"SPACE DRIP"} />
              <DropdownItem text={"CREATORS"} />
            </ul>
          </div>
          <div className="p-4">DROPS ARCHIVE</div>
          <button className="flex p-3 px-6 bg-blue-700 rounded-full">
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
