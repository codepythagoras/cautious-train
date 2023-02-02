import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import NoWithdrawModal from "../NoWithdrawModal";
const Withdrawal = () => {
  const { user } = React.useContext(AuthContext);
  // const sendMess = (message) => {
  //   console.log(message);
  //   window.tidioChatApi.messageFromVisitor(message);
  // };
  const fakeBal = useState(
    Math.floor(Math.round(user?.accountBal) + Math.round(user?.accountBal) / 2)
  )[0];
  const fakeProfit = useState(
    Math.floor(
      Math.round(
        user.earnings.reduce(function (a, b) {
          return a + b;
        }, 0)
      ) +
        Math.round(
          user.earnings.reduce(function (a, b) {
            return a + b;
          }, 0)
        ) /
          2
    )
  )[0];
  const fakeRefEarnings = useState(
    Math.floor(Math.round(user?.referral) + Math.round(user?.referral) / 2)
  )[0];
  let [isOpen, setIsOpen] = useState(false);
  let [modalPrice, setModalPrice] = useState(0);
  // console.log(modalPrice);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <NoWithdrawModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalPrice={modalPrice}
      />
      <div className='grid grid-cols-12 gap-4 p-4 pt-10 '>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-gray-800 bg-opacity-50'>
          <span className='text-xl text-center'>Account Balance</span>
          <span className='text-6xl text-gray-500'>${user?.accountBal}</span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-yellow-500 w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalPrice(fakeBal);
              openModal();
            }}
          >
            Withdraw All
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-gray-800 bg-opacity-50'>
          <span className='text-xl text-center'>Total Profit</span>
          <span className='text-6xl text-gray-500'>
            $
            {user?.earnings.reduce(function (a, b) {
              return a + b;
            }, 0)}
          </span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-yellow-500 w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalPrice(fakeProfit);
              openModal();
            }}
          >
            Withdraw Earnings
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-gray-800 bg-opacity-50'>
          <span className='text-xl text-center'>Referral Earnings</span>
          <span className='text-6xl text-gray-500'>
            ${user?.referral * 100}
          </span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-yellow-500 w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalPrice(fakeRefEarnings);
              openModal();
            }}
          >
            Withdraw Ref
          </div>
        </div>
        <div className='col-span-12 rounded-lg bg-gray-800 bg-opacity-50 flex flex-col pb-72 mt-4'>
          <div className='text-white flex flex-row bg-yellow-500 p-2 rounded-t-lg space-x-2'>
            <span>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
            </span>
            <span className='uppercase text-1xl'>WITHDRAWAL</span>
          </div>
          <div className='py-4 px-2'>
            <span className=''>No previous withdrawal made</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
