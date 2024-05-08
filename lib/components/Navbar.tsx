import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { navbarTypes } from "../types";
const arrow = require("../assets/svg/utils/arrow.svg");
const Navbar = ({
  allLinks: AllLinks,
  logo,
  navbgColor,
  textColor,
  borderColor,
  logoSize,
  activeBorderColor,
  transparent,
  centerLinks,
  centerLinkStatus,
}: navbarTypes) => {
  let [open, setOpen] = useState(false);
  const responsiveNav = useRef(null);
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.add("overflow-auto");
  }, [open]);

  return (
    <div
      data-navbar
      className={`fixed 
       z-[1000] w-full  navbar top-0 `}
    >
      <nav
        className={`flex w-full justify-between px-8 md:px-24 items-center py-4 md:${navbgColor} ${
          transparent && "backdrop-blur-lg md:bg-opacity-20"
        } shadow text-center`}
      >
        <div className="flex justify-between items-center w-full ">
          <div className={` " w-44 md:w-52"`}>
            <Link
              onClick={() => {
                open && setOpen(false);
              }}
              to={"/"}
            >
              <img src={logo} alt="logo" width={logoSize as string} />
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-2 ">
            {centerLinkStatus &&
              centerLinks.map((link, state) => (
                <NavLink
                  key={state}
                  className={`border-b-2 flex justify-center items-center mr-1 border-transparent hover:${borderColor} ${textColor} `}
                  style={({ isActive }) => {
                    return {
                      padding: "6px",
                      borderBottom: isActive
                        ? `2px solid ${activeBorderColor}`
                        : "",
                    };
                  }}
                  to={link.path}
                  rel={link?.rel}
                  target={link?.target}
                >
                  {link.name}
                  {link?.icon && <img src={link.icon} alt="icon" />}
                </NavLink>
              ))}
          </div>

          <ul
            className={` hidden lg:flex justify-center items-center font-nav text-lg ${textColor} space-x-8`}
          >
            {AllLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  className={`border-b-2 flex justify-center items-center mr-1  border-transparent hover:${borderColor} `}
                  style={({ isActive }) => {
                    return {
                      padding: "6px",
                      borderBottom: isActive
                        ? `2px solid ${activeBorderColor}`
                        : "",
                    };
                  }}
                  to={link.path}
                  rel={link?.rel}
                  target={link?.target}
                >
                  {link.name}
                  {link?.icon && <img src={link.icon} alt="icon" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? (
            <svg
              className="w-6 h-6 cursor-pointer select-none fill-white stroke-gray-400"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <div>
              <h1
                className={`text-xl text-black text-center z-[5000] cursor-pointer select-none  font-semibold`}
              >
                X
              </h1>
            </div>
          )}
        </button>
      </nav>

      {/* responsive */}

      <div
        className={`flex fixed inset-0  w-full overflow-y-hidden bg-gray-100 lg:bg-transparent transition
        ${open ? "" : "-translate-y-[150%]"}
       ease-in-out duration-700  flex-col py-5 md:py-0 -z-30 w-full px-5  mx-auto justify-center `}
      >
        {AllLinks.map((link, state) => (
          <NavLink
            key={state}
            className={""}
            style={({ isActive }) => {
              return {
                color: isActive ? "#FF5100" : "",
              };
            }}
            to={link.path}
            onClick={() => setOpen(false)}
          >
            <div
              ref={responsiveNav}
              className="flex  justify-around items-center w-full py-2 border-b-2 border-[#D9D9D9] lg:hidden"
            >
              <h1 className="text-lg text-left w-1/2">{link.name}</h1>{" "}
              <img src={arrow} alt="arrow" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
