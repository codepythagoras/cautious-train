import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import blockChainImg from "../assets/images/blockchain-img.png";
import addUser from "../assets/images/add-user.svg";
import Donation from "../assets/images/donation.svg";
import PaymentCheck from "../assets/images/payment-check.svg";
import StockExchangeApp from "../assets/images/stock-exchange-app.svg";

const About = () => {
  return (
    <div>
      <header
        className='w-full text-white overflow-hidden'
        style={{ height: "40vh" }}
      >
        <NavBar />
        <span className='flex flex-row flex-wrap items-center justify-center font-semibold mt-36 space-x-2 text-2xl '>
          <span>Home /</span>
          <span className='text-yellow-500'> About Us</span>
        </span>
      </header>

      <div className='flex flex-col lg:flex-row justify-evenly items-center text-black px-10 space-y-6 py-6 '>
        <div className='flex flex-col lg:w-6/12 h-72 items-center'>
          <img
            src={blockChainImg}
            className='w-full lg:w-8/12 h-full '
            alt=''
          />
        </div>
        <div className='flex flex-col lg:w-5/12 space-y-4'>
          <span className='text-4xl text-blue-800'>
            About Global Crypto Invest
          </span>
          <span className='text-md'>
            Global Crypto Invest is a company with group of expert traders that
            make consistent Daily, weekly and monthly profit for investor and
            unstable traders, give the best forex Training Worldwide. With over
            10 thousand active investors, more than 10 business locations in
            United States and our new offices in the United Arab Emirates (UAE)
            and United Kingdom, we are determined to provide an all-encompassing
            investment service to our clients that accommodate their various
            needs.
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center space-x-4'>
        <span className='text-blue-800 text-2xl font-semibold px-10'>
          How it Works
        </span>
        <span className='text-gray-600 text-sm'>
          We are proud to be a great Investment company. We Trade while you
          earn.
        </span>
        <div className='flex flex-col  lg:flex-row py-8 px-10 lg:space-x-9 justify-evenly'>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={addUser} alt='' className='w-12 h-12' />
            </div>
            <span className='text-yellow-500 uppercase font-semibold text-center'>
              SIGNUP
            </span>
            <span className='text-gray-600 text-xl text-center w-full'>
              Simple and easy registration process
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={Donation} alt='' className='w-12 h-12' />
            </div>
            <span className='text-yellow-500 uppercase font-semibold text-center'>
              MAKE A DEPOSIT
            </span>
            <span className='text-gray-600 text-xl text-center w-full'>
              Select one of our investment plans and make a deposit
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={StockExchangeApp} alt='' className='w-12 h-12' />
            </div>
            <span className='text-yellow-500 uppercase font-semibold text-center'>
              MAKE PROFIT
            </span>
            <span className='text-gray-600 text-xl text-center w-full'>
              Watch how your profit grows in member panel
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={PaymentCheck} alt='' className='w-12 h-12' />
            </div>
            <span className='text-yellow-500 uppercase font-semibold text-center'>
              REQUEST PAYMENT
            </span>
            <span className='text-gray-600 text-xl text-center w-full'>
              Request withdrawal and receive money instantly
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
