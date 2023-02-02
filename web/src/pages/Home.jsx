import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import community from "../assets/images/community.svg";
import wallet from "../assets/images/wallet.svg";
import online from "../assets/images/world-grid.svg";
import withdraw from "../assets/images/withdrawal.svg";
import InvestmentContainer from "../components/InvestmentContainer";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1, 50], [1, 2, 2]);

  return (
    <div className='w-full'>
      <Header scale={scale} scrollYProgress={scrollYProgress} />
      <main className='my-4 space-y-6'>
        <InvestmentContainer />
        <div className='flex flex-col  lg:flex-row py-8 px-10 lg:space-x-9 justify-evenly'>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={community} alt='' className='w-12 h-12' />
            </div>
            <span className='text-2xl text-yellow-500 uppercase font-semibold text-center'>
              2,479
            </span>
            <span className='text-gray-600 text-base text-center w-full'>
              TOTAL MEMBERS
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={wallet} alt='' className='w-12 h-12' />
            </div>
            <span className='text-2xl text-yellow-500 uppercase font-semibold text-center'>
              $ 647832.50
            </span>
            <span className='text-gray-600 text-base text-center w-full'>
              TOTAL DEPOSITED{" "}
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={online} alt='' className='w-12 h-12' />
            </div>
            <span className='text-2xl text-yellow-500 uppercase font-semibold text-center'>
              638
            </span>
            <span className='text-gray-600 text-base text-center w-full'>
              DAYS ONLINE
            </span>
          </div>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='p-8 bg-gradient text-white rounded-full w-28'>
              <img src={withdraw} alt='' className='w-12 h-12' />
            </div>
            <span className='text-2xl text-yellow-500 uppercase font-semibold text-center'>
              $ 173560.70
            </span>
            <span className='text-gray-600 text-base text-center w-full'>
              TOTAL WITHDRAWAL
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
