import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";

const arrowimg = require("../../images/navbar/arrow-down-white.svg").default;
const logo = require("../../images/navbar/logo.svg").default;

function DropdownItem(props) {
  return (
    <a
      href={
        window.location.pathname === "/mint" ? "/#COLLECTION" : "#COLLECTION"
      }
      className="dropdownItem flex justify-center text-sm text-[#FFFFFF] p-4 rounded-2xl hover:bg-[#5733F5]"
    >
      <p> {props.text} </p>
    </a>
  );
}

const Navbar = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between h-[10vh] w-full flex-wrap absolute z-10 top-0 px-5">
        <div className="flex w-[40%] md:w-[10%]">
          <img src={logo} alt="/" />
        </div>
        <div
          className="md:flex justify-end w-[90%] items-center p-5 text-white cursor-pointer hidden"
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <a href="/mint" className="hidden md:block p-4">
            Mint
          </a>
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
          <a
            href={
              window.location.pathname === "/mint" ? "/#PARTNER" : "#PARTNER"
            }
            className="hidden md:block p-4"
          >
            PARTNERS
          </a>
          <button
            onClick={async () => {
              logout
                ? (async function () {
                    await disconnect();
                  })()
                : (async function () {
                    await connection();
                    await readContract();
                    await getTokens();
                  })();
            }}
            className={`flex border-[1px] border-black bg-blue-700  p-3 hover:scale-125 duration-700 rounded-lg px-2 justify-center  text-white bg-transparent cursor-pointer ${
              logout ? "hover:before:content-['Disconnect:']" : ""
            }`}
          >
            <p
              className={`h-[12px] w-[12px] border ${
                logout ? "bg-green-600" : "bg-red-600"
              }  rounded-full flex items-center`}
            ></p>
            {wallet}
          </button>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden text-white cursor-pointer flex justify-end items-center"
        >
          <RiMenu3Line size={30} />
        </div>
      </div>
      <div className="">
        {nav && (
          <header className="text-black h-screen flex w-full  lg:hidden items-center z-50 justify-between fixed ">
            <div className="fixed left-0 top-0 w-full z-60 backdrop-blur-[80px] ease-in-out duration-500">
              <ul className="p-6 py-4 text-lg font-extrabold  font-poppins">
                <div onClick={handleNav} className="flex justify-end  m-5">
                  <RxCross2 size={30} />
                </div>
                <a
                  href='/mint'
                  onClick={handleNav}
                  key={nav.title}
                  className="flex my-4 px-4 hover:text-[#1A1A1A] hover:scale-110 duration-500 hover:opacity-100 opacity-60 font-poppins text-white cursor-pointer"
                >
                  Mint
                </a>
                <a
                  href={
                    window.location.pathname === "/mint"
                      ? "/#COLLECTION"
                      : "#COLLECTION"
                  }
                  className="flex my-4 px-4 hover:text-[#1A1A1A] hover:scale-110 duration-500 hover:opacity-100 opacity-60 font-poppins text-white cursor-pointer"
                >
                  Collection
                </a>
                <a
                  href={
                    window.location.pathname === "/mint"
                      ? "/#PARTNER"
                      : "#PARTNER"
                  }
                  className="flex my-4 px-4 hover:text-[#1A1A1A] hover:scale-110 duration-500 hover:opacity-100 opacity-60 font-poppins text-white cursor-pointer"
                >
                  PARTNERS
                </a>
                <div className="md:hidden flex w-full   py-[6%] justify-center">
                  <button
                    onClick={async () => {
                      logout
                        ? (async function () {
                            await disconnect();
                          })()
                        : (async function () {
                            await connection();
                            await readContract();
                            await getTokens();
                          })();
                    }}
                    className={`flex border-[1px] border-gray-500 py-2 px-6 hover:scale-125 duration-700 rounded-lg px-2 justify-center  text-white bg-transparent cursor-pointer ${
                      logout ? "hover:before:content-['Disconnect:']" : ""
                    }`}
                  >
                    <p
                      className={`h-[12px] w-[12px] border ${
                        logout ? "bg-green-600" : "bg-red-600"
                      }  rounded-full flex items-center`}
                    ></p>
                    {wallet}
                  </button>
                </div>
              </ul>
            </div>
          </header>
        )}
      </div>
    </>
  );
};

export default Navbar;
