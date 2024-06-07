import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
        <img src={logo} alt="" className="w-10 inline-block items-center" />
        <span> JUVA </span>
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pl-[100px]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-primary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10" }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="px-14">
          <Link
            to="/login" // Changed to '/login' to navigate to the login page
            className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-2 rounded"
          >
            Login/Sign Up
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4", "pb-5"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mb-4">
              <Link
                to="/login"
                className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-2 rounded"
              >
                Login/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
