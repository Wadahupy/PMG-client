import React from "react";
import Header from "../Partials/Header.jsx";
import Footer from "../Partials/Footer.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="sticky top-0 left-0 z-[100]">
        <Header />
        {/* temporary */}
        <div className="absolute top-0 left-0 hidden bg-red-600">
          <div className="">xs</div>
          <div className="hidden sm:flex">sm</div>
          <div className="hidden md:flex">md</div>
          <div className="hidden lg:flex">lg</div>
          <div className="hidden xl:flex">xl</div>
          <div className="hidden 2xl:flex">2xl</div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
