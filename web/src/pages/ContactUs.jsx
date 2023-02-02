import React from "react";
// import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ContactUs = () => {
  // const history = useHistory();
  // window.addEventListener("popstate", (e) => {
  //   e.preventDefault();
  //   console.log("Going Back");
  //   history.goBack();
  // });
  return (
    <div>
      <header
        className='w-full text-white overflow-hidden'
        style={{ height: "40vh" }}
      >
        <NavBar />
        <div className='flex flex-row items-center justify-center font-semibold mt-24 lg:mt-36 space-x-2 text-2xl '>
          <span>Home /</span>
          <span className='text-yellow-500'> Contact Us</span>
        </div>
      </header>

      <div className='flex flex-col justify-center items-center w-full shadow-none bg-transparent'>
        <div className='flex flex-col w-10/12 lg:w-4/5 p-3 bg-white shadow-lg text-gray-900 transform -translate-y-32 lg:-translate-y-20 rounded-lg'>
          <span className='text-2xl lg:text-4xl z-50 text-center py-5 pb-10 font-semibold'>
            Talk to Us
          </span>
          <div className='flex lg:flex-row flex-col px-1 justify-around space-y-4 lg:space-y-0'>
            <form
              action=''
              className='flex flex-col px-1 space-y-6 justify-between items-center w-full lg:w-6/12'
            >
              <input
                className='w-full h-10 bg-transparent border-b-2 border-gray-500 outline-none '
                type='text'
                placeholder='Fullname'
                name=''
                id=''
              />
              <input
                className='w-full h-10 bg-transparent border-b-2 border-gray-500 outline-none '
                type='email'
                placeholder='Email Address'
                name=''
                id=''
              />
              <textarea
                className='w-full h-20 bg-transparent border-b-2 items-center border-gray-500 outline-none '
                placeholder='Tell us Something'
              ></textarea>
              <input
                type='submit'
                value='SEND'
                className='btn bg-yellow-500 w-full'
              />
            </form>
            <div className='flex flex-col space-y-4 justify-between items-center'>
              <a href='mailto:bla@bla.com'>
                <div className='flex flex-col items-center space-x-2'>
                  <svg
                    className='w-20 h-20'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='w-60 text-center text-gray-500'>
                    bla@bla.com
                  </span>
                </div>
              </a>
              <div className='flex flex-col items-center space-x-2'>
                <svg
                  className='w-20 h-20 '
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-center text-gray-500 w-60'>
                  71-75 Shelton Street, London, United Kingdom, WC2H 9JQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
