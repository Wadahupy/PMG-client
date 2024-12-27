import React from "react";
import ScheduleBtn from "/src/shared/components/partials/ScheduleBtn";

const Banner = () => {
  return (
    <>
      <div className="absolute inset-0 m-5">
        <img
          className="container object-cover w-full h-full mx-auto border border-black rounded-3xl"
          src="../src/assets/images/home-bg.png"
          alt="Pets"
        />
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 px-6 py-20  text-start sm:px-12 lg:px-24 w-[500px]">
        <h1 className="mb-4 text-6xl text-white font-brolimo">
          Honoring Cherished Companions with Care
        </h1>
        <p className="mb-6 text-base text-white font-dm_sans">
          We provide a respectful and compassionate way to memorialize your
          beloved pets, ensuring their memory is preserved with dignity and
          love.
        </p>
        <ScheduleBtn />
      </div>
    </>
  );
};

export default Banner;
