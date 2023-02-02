import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import header from "../assets/images/header.png";

const Header = ({ scale, scrollYProgress }) => {
  return (
    <header className='w-full text-white overflow-hidden header'>
      <div className='w-full h-16'>
        <div
          style={{
            height: "40px",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <iframe
            src='https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no'
            title='horizontal live tracker'
            width='100%'
            height='36px'
            scrolling='auto'
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            border={0}
            style={{ border: 0, margin: 0, padding: 0 }}
          />
        </div>
      </div>
      <NavBar />
      <div className='flex flex-row h-full justify-between items-center px-10 pt-20 pb-16 lg:px-20'>
        <div className='flex flex-col w-full md:w-1/2 justify-center items-start  h-full space-y-6'>
          <div className='text-2xl md:text-4xl font-semibold'>
            Get <b className='font-bold'>earnings in Bitcoin</b> by investing
            with us.
          </div>
          <p>Effectively put your crypto to work and make more for yourself</p>
          <Link
            to='/register'
            className='hidden lg:flex bg-blue-800 px-4 py-2 rounded-lg'
          >
            Get Started
          </Link>
          <div className='flex lg:hidden flex-row space-x-6'>
            <Link
              to='/login'
              className='py-2 px-2 font-medium text-gray-200 rounded bg-blue-500 hover:text-white transition duration-300'
            >
              Log In
            </Link>
            <Link
              to='/register'
              className='py-2 px-2 font-medium text-white bg-yellow-500 rounded  transition duration-300'
            >
              Register
            </Link>
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <div className='w-full h-full overflow-hidden wrapper'>
            <motion.div style={{ scale }} className='container relative'>
              <img src={header} className='object-cover' alt='' />
              <motion.div
                style={{
                  scaleY: scrollYProgress,
                }}
                whileHover={{ rotate: 5 }}
                whileTap={{
                  rotate: 5,
                }}
                className='item'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
