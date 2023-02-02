import React, { useState } from "react";
import Title from "./Title";

const InvestmentContainer = () => {
  const plans = useState([
    {
      name: "Amateur Plans",
      percentage: "25%",
      conditions: [
        "After 24 Hours",
        "Minimum Investment $100",
        "Maximum Investment $1,200",
      ],
    },
    {
      name: "Capital Plan",
      percentage: "30%",
      conditions: [
        "After 24 Hours",
        "Minimum Investment $500",
        "Maximum Investment $4,000",
      ],
    },
    {
      name: "Representative Plan",
      percentage: "40%",
      conditions: [
        "After 24 Hours",
        "Minimum Investment $5,000",
        "Maximum Investment $30,000",
      ],
    },
  ])[0];

  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <Title>Investment Plans!</Title>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0'>
        {plans.map((plan, index) => (
          <div
            className='flex flex-col border border-black border-opacity-10 justify-between shadow py-4 px-6 rounded-lg h-80 hover:bg-indigo-900 hover:text-white transition-all duration-300 cursor-pointer'
            key={index}
          >
            <div>
              <p className='text-yellow-500 text-sm font-semibold'>
                {plan.name}
              </p>
              <p className='text-3xl my-2 font-bold'>{plan.percentage}</p>
            </div>
            <ul className='my-2 list-disc px-4'>
              {plan.conditions.map((cod, index) => (
                <li key={index}>{cod}</li>
              ))}
            </ul>
            <button className='self-end btn w-full text-white my-4'>
              Try Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentContainer;
