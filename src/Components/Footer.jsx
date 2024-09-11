import React, { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import Contact from "./Contact";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <footer className="bg-blue-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#133b7419] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg: leading-normal font-semibold md:w-2/5">
          Give <span className="text-teal-400">wings</span> to your dreams
        </h1>
        <div>
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Popins] rounded-md text-white md:w-auto w-full"
            onClick={toggleModal}
          >
            {" "}
            Contact Us
          </button>
        </div>
      </div>
      <ItemsContainer />

      {isModalOpen && (
        <div className="fixed inset-0 flex  items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl  md:mx-0 sm-custom:mx-4">
            <h2 className="text-blue-800 text-center font-bold text-2xl mt-3 text-shadow">Contact Details</h2>
            <Contact onClose={toggleModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
