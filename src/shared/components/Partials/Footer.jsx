import React from "react";

import ScheduleBtn from "/src/shared/components/partials/ScheduleBtn";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto text-white bg-primary">
      <div className="container relative z-20 grid grid-cols-1 gap-8 p-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {/* Left Section */}
        <img
          className="absolute pt-5 w-[500px] h-[500px] -z-10 -left-72 brightness-50"
          src="/src/assets/images/bg-icon.png"
        />
        <div>
          <div className="flex items-center mb-20 space-x-2 font-quattrocento">
            {/* Logo */}
            <img
              src="/src/assets/images/logo-icon-dark.png"
              alt="Logo Icon"
              className="size-16 invert brightness-200"
            />
            <p className="text-3xl leading-7 tracking-widest">
              Pet Memorial <br /> Garden
            </p>
          </div>
          <p className="pt-5 mb-4 text-4xl text-white font-quattrocento">
            Cherish their <br /> Memory
            <br /> with Love
          </p>
          <ScheduleBtn />
        </div>
        {/* Center Section */}
        <div className="font-dm_sans">
          <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
          <div className="flex mb-8 space-x-2">
            {/* Icons (replace with actual icons if available) */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-8 text-blue-900 bg-yellow-400 rounded-full"
              >
                🐾
              </div>
            ))}
          </div>
          <h2 className="mb-4 text-lg font-bold ">Links</h2>
          <div className="flex flex-col font-light text-md gap-11 font-dm_sans">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary font-bold underline" : "text-white"
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-secondary font-bold underline" : "text-white"
              }
            >
              <p>About</p>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-secondary font-bold underline" : "text-white"
              }
            >
              <p>Services</p>
            </NavLink>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                isActive ? "text-secondary font-bold underline" : "text-white"
              }
            >
              <p>Schedule</p>
            </NavLink>
          </div>
        </div>
        {/* Right Section */}
        <div className="mt-10 font-dm_sans space-y-7">
          <h2 className="mb-4 text-2xl font-bold ">Opening Hours</h2>
          <p className="mb-4">
            <span className="block text-5xl font-semibold font-quattrocento">
              7:00 AM-8:00 PM
            </span>
            <span className="font-sans text-lg">Mon - Fri</span>
          </p>
          <p className="mb-4">099999999</p>
          <p className="mb-4">petmemorial@garden.com</p>
          <p className="mb-4">123 Pet Memorial Garden Barangay Fortune PH</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
