import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const SubmitBtn = ({ label, onClick, type = "button", className, id }) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`flex items-center px-6 py-2 w-full justify-center active:bg-tertiary text-black font-medium rounded-lg border border-black bg-tertiary hover:bg-yellow-600 gap-x-2 active:scale-95 outline-none z-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      {label}
      <HiArrowSmRight />
    </button>
  );
};

export default SubmitBtn;
