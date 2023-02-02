import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
// import { useHistory } from "react-router-dom";
const Faq = () => {
  const faqs = [
    {
      question:
        "What is globalcryptoinvest.ltd, and what are the activities of the company?",
      answer:
        "globalcryptoinvest.ltd is a prominent representative of the international financial market, cryptocurrency trading and mining, it is a developer of hardware and offers safe investments in this area.",
    }
  ];
  // const history = useHistory();
  // window.addEventListener("popstate", (e) => {
  //   e.preventDefault();
  //   console.log("Going Back");
  //   history.goBack();
  // });
  return (
    <div className=''>
      <header
        className='w-full text-white overflow-hidden'
        style={{ height: "40vh" }}
      >
        <NavBar />
      </header>
      <div className='flex flex-col justify-center items-center w-full shadow-none bg-transparent'>
        <div className='flex flex-col w-10/12 lg:w-4/5 p-3 bg-gray-50 text-gray-900 transform -translate-y-32 lg:-translate-y-20 rounded-lg'>
          <span className='text-2xl lg:text-4xl z-50 text-center py-5 pb-10 font-semibold'>
            Frequently Asked Questions
          </span>
          <div className='flex flex-col px-1'>
            <Accordion allowToggle>
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem key={index}>
                    {({ isExpanded }) => (
                      <div
                        className={`${
                          isExpanded
                            ? "bg-gray-200 py-1 px-4 lg:py-4 lg:px-16 rounded-lg border-t-0 "
                            : " mx-4 p-1 lg:mx-12 lg:p-4 bg-transparent border-t-2 border-gray-200"
                        }`}
                      >
                        <h2 className='text-gray-700 text-2xl font-semibold '>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              <span className='text-blue-800 text-lg mb-4'>
                                {faq.question}
                              </span>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='text-gray-900'>
                          {faq.answer}
                        </AccordionPanel>
                      </div>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
