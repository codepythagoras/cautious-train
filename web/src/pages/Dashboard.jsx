import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import BitcoinLogo from "../components/BitcoinLogo";
import { Link, useHistory } from "react-router-dom";
import DashboardHome from "../components/dashboardComponents/DashboardHome";
import FAQ from "../components/dashboardComponents/FAQ";
import MakeADeposit from "../components/dashboardComponents/MakeADeposit";
import Support from "../components/dashboardComponents/Support";
import Withdrawal from "../components/dashboardComponents/Withdrawal";
import Profile from "../components/Profile";
import Referral from "../components/dashboardComponents/Referral";
import { AuthContext } from "../context/AuthContext";
// import Reviews from "../components/dashboardComponents/Reviews";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");
  const { user } = React.useContext(AuthContext);
  const { replace } = useHistory();
  const Tabs = [
    "DashBoard",
    "Make a Deposit",
    "Withdrawal",
    "FAQ",
    "Referral Program",
    "Support",
  ];

  React.useEffect(() => {
    if (user === null) {
      replace("/login");
    }
  }, [user, replace]);
  return (
    <div className='dashboard bg-us'>
      <nav className='px-6 lg:px-12 py-4 fixed shadow-lg top-0 w-screen z-40 transition-all duration-300 text-gray-50 bg-us'>
        <div className=' flex justify-between'>
          <div className='flex'>
            <Link to='' href='#' className='flex items-center'>
              <BitcoinLogo />
              <span className='hidden lg:flex font-semibold text-gray-50 text-lg'>
                Global Crypto
              </span>
            </Link>
          </div>
          <span className='hidden lg:flex'>
            <span>DashBoard / </span>
            <span className='text-blue-600 font-semibold ml-2'>
              {activeTab === "DashBoard" ? "Home" : activeTab}
            </span>
          </span>
          <div className='flex items-center'>
            <Profile />
          </div>
          <div className='lg:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={() => {
                if (mobileMenu) setMobileMenu(false);
                else if (!mobileMenu) setMobileMenu(true);
              }}
            >
              <svg
                className=' w-6 h-6 text-blue-500 '
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
      </nav>
      <div className=''>
        <Tab.Group
          as='div'
          className={`flex flex-row justify-between w-full pt-20 h-screen overflow-hidden text-gray-100 hover:text-white`}
          onChange={(index) => {
            setActiveTab(Tabs[index]);
          }}
        >
          <Tab.List
            className={` ${
              mobileMenu
                ? ` hidden lg:flex flex-col w-0`
                : `flex flex-col absolute lg:relative z-50 transition duration-300`
            } mobile-menu space-y-4 px-10 py-6 w-full z-50 lg:z-0 lg:w-1/5 lg:h-full bg-us shadow-xl`}
            onClick={() => {
              if (mobileMenu) setMobileMenu(false);
              else if (!mobileMenu) setMobileMenu(true);
            }}
          >
            {Tabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-left px-2 pl-3 rounded-lg transtition-all duration-300",
                    " ",
                    selected
                      ? "bg-white bg-opacity-80 text-black"
                      : "hover:bg-white hover:bg-opacity-20"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='w-full lg:w-4/5 h-screen overflow-scroll pb-20'>
            <Tab.Panel>
              <div className=''>
                <DashboardHome />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=''>
                <MakeADeposit />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=''>
                <Withdrawal />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=''>
                <FAQ />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=''>
                <Referral />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=''>
                <Support />
              </div>
            </Tab.Panel>
            {/* <Tab.Panel>
              <div className=''>
                <Reviews />
              </div>
            </Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Dashboard;
