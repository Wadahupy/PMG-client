import React from "react";

const BannerAbout = () => {
  return (
    <>
      <div className="absolute inset-0 m-5">
        <img
          className="container object-cover w-full h-full mx-auto border border-black rounded-3xl"
          src="../src/assets/images/banner-about.png"
          alt="Pets"
        />
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 px-6 py-20  text-start sm:px-12 lg:px-24 w-[700px]">
        <p className="mb-4 text-2xl text-white font-brolimo">About</p>
        <h1 className="mb-8 text-white text-7xl font-brolimo">
          Pet Memorial Garden
        </h1>
        <p className="mb-6 text-xl text-white font-dm_sans">
          Losing a beloved pet is never easy, and we understand the deep
          emotional bond shared between you and your furry, feathered, or scaly
          family members. That’s why we’re committed to providing a platform
          that honors their memory while simplifying the process of managing pet
          burial and memorial services.
        </p>
      </div>
    </>
  );
};

export default BannerAbout;
