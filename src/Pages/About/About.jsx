import DirectorImg from "../../assets/Home/DirectorImage.jpg";
import React, { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";

function About() {
  const [activeSection, setActiveSection] = useState("director");

  const content = {
    director: (
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={DirectorImg}
          alt="Director"
          className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h3 className="text-xl font-semibold">Dr. Preeti Singh</h3>
          <blockquote className="italic mt-4 text-gray-700">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit The role
            of AASSC is - 1. National Occupational Standards: The AASSC develops
            National Occupational Standards (NOS) that define the performance
            outcomes required for a particular task. These standards are used as
            benchmarks for education and training programs, and for recruitment
            practices. 2. Certification: The AASSC and its training partners
            jointly certify successful candidates 38 Sector Skill Councils are
            ment practices. 2. Certification: The AASSC and its training
            partners jointly certify successful candidates 38 Sector Skill
            Councils are registered with National Skill Development Corporation.
            Over 5.2 million students are trained by NSDC.The role of AASSC is -
            1. National Occupational Standards: The AASSC develops National
            Occupational Standards (NOS) that define the performance outcomes
            required for a particular task. These standards are used as
            benchmarks for education and training programs, and for recruitment
            practices. 2. Certification: The AASSC and its training partners
            jointly certify successful candidates 38 Sector Skill Councils are
            registered with National Skill Development Corporation. Over 5.2
            million students are trained by NSDC.The role of AASSC is - 1.
            National Occupational Standards: The AASSC develops National
            Occupational Standards (NOS) that define the performance outcomes
            required for a particular task. These standards are used as
            benchmarks for education and training programs, and for recruitment
            practices. 2. Certification: The AASSC and its training partners
            jointly certify successful candidates 38 Sector Skill Councils are
            registered with National Skill Development Corporation. Over 5.2
            million students are trained by NSDC.The role of AASSC is - 1.
            National Occupational Standards: The AASSC develops National
            Occupational Standards (NOS) that define the performance outcomes
            required for a particular task. These standards are used as
            benchmarks for education and training programs, and for recruitment
            practices. 2. Certification: The AASSC and its training partners
            jointly certify successful candidates 38 Sector Skill Councils are
            registered with National Skill Development Corporation. Over 5.2
            million students are trained by NSDC."
          </blockquote>
        </div>
      </div>
    ),
    overview: (
      <div>
        <h3 className="text-xl font-semibold">Overview</h3>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit...
        </p>
      </div>
    ),
    vision: (
      <div>
        <h3 className="text-xl font-semibold">Vision</h3>
        <p className="mt-4 text-gray-800">
          Our vision is to foster a new generation of ethical business
          leaders...
        </p>
      </div>
    ),
    mission: (
      <div>
        <h3 className="text-xl font-semibold">Mission</h3>
        <p className="mt-4 text-gray-800">
          Our mission is to foster ethical business leadership...
        </p>
      </div>
    ),
  };

  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row m-6 border-2 box-shadow shadow-2xl rounded-md p-4 max-w-6xl mx-auto">
        <div className="w-full md:w-1/5 bg-gray-50 shadow-lg box-shadow p-3 rounded-lg h-min">
          <h2 className="text-lg font-bold mb-4 text-gray-800">About SATHM</h2>
          <ul className="space-y-2">
            <li
              className={`p-2 text-center text-sm font-medium transition-colors duration-300 ${
                activeSection === "director"
                  ? "bg-blue-600 text-white rounded-md"
                  : "bg-gray-200 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white"
              } cursor-pointer`}
              onClick={() => setActiveSection("director")}
            >
              Director
            </li>
            <li
              className={`p-2 text-center text-sm font-medium transition-colors duration-300 ${
                activeSection === "overview"
                  ? "bg-blue-600 text-white rounded-md"
                  : "bg-gray-200 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white"
              } cursor-pointer`}
              onClick={() => setActiveSection("overview")}
            >
              Overview
            </li>
            <li
              className={`p-2 text-center text-sm font-medium transition-colors duration-300 ${
                activeSection === "vision"
                  ? "bg-blue-600 text-white rounded-md"
                  : "bg-gray-200 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white"
              } cursor-pointer`}
              onClick={() => setActiveSection("vision")}
            >
              Vision
            </li>
            <li
              className={`p-2 text-center text-sm font-medium transition-colors duration-300 ${
                activeSection === "mission"
                  ? "bg-blue-600 text-white rounded-md"
                  : "bg-gray-200 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white"
              } cursor-pointer`}
              onClick={() => setActiveSection("mission")}
            >
              Mission
            </li>
          </ul>
        </div>

        <div className="w-full md:w-4/5 p-4">{content[activeSection]}</div>
      </div>
    </HomeLayout>
  );
}

export default About;
