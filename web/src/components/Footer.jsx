import React from "react";
import { Link } from "react-router-dom";
import BitcoinLogo from "./BitcoinLogo";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillEnvironment,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='text-white py-6 mt-5'>
      <div className='flex flex-col justify-between space-y-4'>
        <div
          className='flex flex-col lg:flex-row justify-between lg:items-center space-y-6 lg:space-y-4 mx-12 py-4 border-gray-400 border-opacity-90'
          style={{
            borderBottomWidth: 1,
          }}
        >
          <div className='flex flex-col space-y-2'>
            <BitcoinLogo className='w-12 h-12' />
            <span className='text-lg w-80'>
              Make a deposit today and start earning high profits!
            </span>
            <div className='flex flex-row space-x-5'>
              <AiOutlineFacebook className='w-6 h-6' />
              <AiOutlineInstagram className='w-6 h-6' />
              <AiOutlineTwitter className='w-6 h-6' />
              <AiOutlineGithub className='w-6 h-6' />
            </div>
          </div>
          <div className='flex flex-col lg:space-y-3 space-y-1'>
            <Link to='/'>
              <span className='hover:text-blue-600'>HOME</span>
            </Link>
            <Link to='/about'>
              <span className='hover:text-blue-600'>ABOUT US</span>
            </Link>
            <Link to='/FAQ'>
              <span className='hover:text-blue-600'>FAQ</span>
            </Link>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-2'>
              <AiOutlineMail className='w-5 h-5' />
              <span>
                <a href='mailto:Globalcryptoinvest@gmail.com'>
                  Globalcryptoinvest@gmail.com
                </a>
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <AiFillEnvironment className='w-5 h-6' />
              <span className='w-96'>
                71-75 Shelton Street, London, United Kingdom, WC2H 9JQ
              </span>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col lg:flex-row justify-between pt-2 pb-4 lg:py-6 mx-12 space-y-4 lg:space-y-0 border-gray-400 border-opacity-90'
          style={{
            borderBottomWidth: 1,
          }}
        >
          <div className='flex flex-col'>
            <span className='text-1xl font-semibold'>
              SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <span>
              The latest news, articles , and resources , sent to your inbox
              weekly.
            </span>
          </div>
          <form className='bg-gradient-btn rounded-full flex flex-row justify-between'>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-transparent rounded-full text-black focus:outline-none px-5 py-2'
              placeholder='Your Email'
            />
            <button className='btn rounded-l-none'>Submit</button>
          </form>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-center'>
            {" "}
            © 2021 Global Crypto, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
    // <footer className="grid grid-cols-3 text-white px-12 py-10 mt-5">
    //     <div className="col-span-3 md:col-span-1 space-y-3">
    //         <div className="font-semibold text-uppercase flex flex-row space-x-2">
    //         <BitcoinLogo/>
    //         <span>Global Crypto</span>
    //         </div>
    //         <div className="text-sm text-gray-200 font-semibold">
    //           2021 © GLOBALCRYPTO.LTD ALL RIGHTS RESERVED
    //         </div>
    //     </div>
    //     <div className="col-span-1">
    //         <div className="flex flex-col justify-start items-left text-uppercase">
    //         <div className="font-semibold">
    //             <Link to="/">HOME</Link>
    //         </div>
    //         <div className="font-semibold">ABOUT US</div>
    //         <div className="font-semibold">
    //         <Link to="/faq">FAQ</Link>
    //         </div>
    //         <div className="font-semibold">Terms & Conditions</div>
    //         </div>
    //     </div>
    //     <div className="col-span-3 md:col-span-1">
    //         <div className="px-2 mb-4">
    //             <p className="font-semibold text-uppercase">Newsletter</p>
    //             <p className="text-sm text-gray-200">Let us notify you about new updates</p>
    //         </div>
    //         <form className="bg-white rounded-full flex flex-row justify-between">
    //             <input type="email" name="email" id="email" className="bg-transparent rounded-full text-black focus:outline-none px-5 py-2" placeholder="Your Email"/>
    //             <button className="btn rounded-l-none">Submit</button>
    //         </form>
    //     </div>
    // </footer>
  );
};

export default Footer;
