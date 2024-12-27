import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary active font-bold flex items-center font-dm_sans nav"
              : "text-gray-500 flex items-center font-dm_sans nav"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary active font-bold flex items-center font-dm_sans nav"
              : "text-gray-500 flex items-center font-dm_sans nav"
          }
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-primary active font-bold flex items-center font-dm_sans nav"
              : "text-gray-500 flex items-center font-dm_sans nav"
          }
        >
          Services
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive
              ? "text-primary active font-bold flex items-center font-dm_sans nav"
              : "text-gray-500 flex items-center font-dm_sans nav"
          }
        >
          Schedule
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="container w-full mx-auto">
      <Navbar
        className="sticky top-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4"
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex flex-row items-center justify-center gap-2 font-quattrocento">
              <Logo />
              <p className="text-lg leading-5">
                Pet Memorial <br /> Garden
              </p>
            </div>
          </Typography>
          <div className="hidden mr-4 lg:block">{navList}</div>

          {/* Conditionally style Sign In button */}
          <Button
            variant={location.pathname === "/sign-in" ? "filled" : "outlined"}
            size="sm"
            color={location.pathname === "/sign-in" ? "yellow" : "black"}
            className="hidden border border-black lg:inline-block font-dm_sans"
            onClick={() => navigate("/sign-in")}
          >
            <span>Sign In</span>
          </Button>

          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-6 h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button
            fullWidth
            variant={location.pathname === "/sign-in" ? "filled" : "outlined"}
            size="sm"
            color={location.pathname === "/sign-in" ? "yellow" : "black"}
            className="border border-black"
            onClick={() => navigate("/sign-in")}
          >
            <span>Sign In</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
