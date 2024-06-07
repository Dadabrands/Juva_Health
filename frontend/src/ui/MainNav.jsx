import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
} from "react-icons/hi2";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from "react";

function MainNav() {

  useState
  return (
    <nav>
      <ul className="flex flex-col grow px-4 pb-4 mx-auto w-full font-normal text-xl font-inter bg-purple-50 text-stone-500 max-md:px-5 max-md:mt-10">
        <NavLink
          to="/dashboard"
          className="flex gap-5 justify-between p-2 mt-8 text-white whitespace-nowrap bg-white visited:bg-primary rounded-xl max-md:mt-10 hover:text-white"
        >
          <HiOutlineHome className="w-6 h-6 text-primary visited:text-white hover:text-white hover:bg-primary" />
          <span className="flex-auto items-center">Dashboard</span>
        </NavLink>

        <NavLink
          to="/vitals"
          className="flex gap-5 justify-between p-3 mt-9 whitespace-nowrap rounded-xl  active:bg-primary bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <FaHeartbeat className="w-6 selection:aspect-square text-primary hover:text-white hover:bg-primary" />

          <span className="flex-auto items-center">Vitals</span>
        </NavLink>
        <NavLink
          to="/book-appointment"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <FaUserDoctor className="w-6 aspect-square  text-primary hover:text-white hover:bg-primary" />

          <span className="flex-auto">Book Appointment</span>
        </NavLink>
        <NavLink
          to="/payment-gateway"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <MdOutlinePayments className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
          <span className="flex-auto">Payment Gateway</span>
        </NavLink>
        <NavLink
          to="/secure-chat"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <BsChatDotsFill className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
          <span className="flex-auto">Secure Chat</span>
        </NavLink>
        <NavLink
          to="/patient-profile"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
         
        >
          <IoPersonCircleOutline className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />

          <span className="flex-auto">Patient Profile</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default MainNav;
