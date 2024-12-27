import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const ScheduleBtn = () => {
  return (
    <>
      <button className="z-10 flex items-center px-6 py-2 font-medium text-black transition-all duration-300 ease-in-out transform border border-black rounded-lg outline-none bg-tertiary hover:bg-yellow-600 gap-x-2 active:scale-95 hover:scale-105">
        Make a schedule
        <HiArrowSmRight />
      </button>
    </>
  );
};

export default ScheduleBtn;
