import { motion } from "framer-motion";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BitcoinLogo from "./BitcoinLogo";

const NavBar = () => {
  const [navbarColor, setNavbarColor] = React.useState("bg-transparent");
  const [paddingTop, setPaddingTop] = React.useState("pt-12");
  const [mobileMenu, setMobileMenu] = React.useState(true);
  const location = useLocation();
  const locationName = React.useState(location.pathname)[0];
  const navLinks = React.useState(["", "about", "FAQ", "contact us"])[0];

  React.useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    window.onscroll = () => {
      if (window.pageYOffset > 10) {
        setNavbarColor("bg-dark");
        setPaddingTop("pt-4");
      } else {
        setNavbarColor("bg-transparent");
        setPaddingTop("pt-12");
      }
    };

    return () => {
      window.onscroll = () => {};
    };
  }, [location]);
  return (
    <motion.nav
      className={`px-3 lg:px-12 pb-4 ${paddingTop} fixed top-0 w-screen z-40 transition-all duration-300 ${navbarColor} ${
        !mobileMenu ? "bg-dark" : ""
      } `}
      // style={{
      // 	background : navbarColor
      // }}
    >
      <div className='w-full mx-auto px-4 flex flex-row justify-between items-center'>
        <div className='flex space-x-20'>
          <div>
            <Link
              to=''
              href='#'
              className='flex items-center py-2 px-2 space-x-2'
            >
              <BitcoinLogo />
              <span className='font-semibold text-gray-200 text-lg'>
                Global Crypto
              </span>
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-1'>
            {navLinks.map((navLink, index) => (
              <NavLink
                to={navLink}
                key={index}
                className={`${
                  `/${navLink}` === locationName
                    ? "navLinkActive"
                    : "navLinkInactive"
                }`}
              >
                {navLink === "" ? "Home" : navLink}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='hidden md:flex items-center space-x-3 '>
          <Link
            to='/login'
            className='py-2 px-2 font-medium text-gray-200 rounded hover:bg-blue-500 hover:text-white transition duration-300'
          >
            Log In
          </Link>
          <Link
            to='/register'
            className='py-2 px-2 font-medium text-white bg-yellow-500 rounded hover:bg-blue-400 transition duration-300'
          >
            Register
          </Link>
        </div>
        <div className='md:hidden flex items-center'>
          <button
            className='outline-none mobile-menu-button'
            onClick={() => {
              if (mobileMenu) setMobileMenu(false);
              else if (!mobileMenu) setMobileMenu(true);
            }}
          >
            <svg
              className=' w-6 h-6 text-gray-200 hover:text-blue-500 '
              x-show='!showMenu'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={` ${mobileMenu ? `hidden` : `flex flex-col`} mobile-menu`}
      >
        <ul className=''>
          {navLinks.map((navLink, index) => (
            <li key={index} onClick={() => setMobileMenu(true)}>
              <Link
                to={navLink}
                className={`${
                  `/${navLink}` === locationName
                    ? "mobileMenuLinkActive"
                    : "mobileMenuLinkInactive"
                }`}
              >
                {navLink === "" ? "Home" : navLink}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
