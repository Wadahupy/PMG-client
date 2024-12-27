import React from "react";

const Logo = ({ size = 10 }) => {
  return (
    <img
      className={`w-${size} h-${size}`}
      src="../src/assets/images/logo-icon.png"
      alt="logo"
    />
  );
};

export default Logo;
