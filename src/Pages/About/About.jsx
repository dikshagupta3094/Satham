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
          <h3 className="text-3xl font-semibold text-center text-shadow1">Director</h3>
          <blockquote className=" mt-4 text-gray-700">
            I welcome you on behalf of School Of Tourism, Aviation And
            Hospitality Management(SATHM), DAVV, which is a premiere department
            of central India recently opened on 22July’24. The department
            provides high-quality education in the field of aviation, tourism
            and hospitality management. The department is equipped with a mix of
            young and experienced professionals, industry experts with in-depth
            knowledge and expertise in subject area. The department will soon
            churn out enthusiastic and efficient young professionals as per the
            need of Aviation, Tourism and Hospitality industry market. We
            provide holistic development of student by giving them a platform to
            participate in inter college activities like sports, cultural clubs,
            community services, field visit etc for greater academic
            achievement. We would expect that you venture beyond your “Comfort
            Zones” both inside and outside the classrooms. Take maximum
            advantage of facilities, participate fully and evolve into ‘Brand
            Yourself’.
            <p>
              I thank you for showing your interest in SATHM which means a
              family and by joining SATHM , you are embarking on an education
              system that is meant to be transformative – academically,
              socially, morally and personally. As “Excellence and Values” are
              our guiding principles which are reflected in every activity of
              our Department so we believe in a well-rounded and all-pervasive
              student experience to maximize learning opportunities. Through the
              efforts of our accomplished faculty, our talented students and
              exceptional alumini , we have been able to make rapid progress on
              our path of continuous growth and innovation.
            </p>
            <p>
              Once again, I welcome you all to join ‘SATHM’ family. We wish you
              happy, healthy and fruitful academic year ahead
            </p>
            <p className="font-bold text-black text-[18px] text-shadow1">
              Prof. Preeti Singh <p>Head (SATHM)</p>{" "}
            </p>
          </blockquote>
        </div>
      </div>
    ),
    overview: (
      <div className="ml-8">
        <h3 className="text-xl font-semibold">Overview</h3>
        <p className="mt-4 text-gray-800 text-justify mb-4">
          The School of Tourism, Aviation, and Hospitality Management (SATHM) is
          a premier institution dedicated to delivering top-notch education in
          the fields of aviation, tourism, and hospitality management.
          Established in July 2024 under the esteemed Devi Ahilya
          Vishwavidyalaya (DAVV), SATHM is designed to meet the rapidly growing
          demands of these dynamic industries. With a curriculum tailored to
          industry needs, the school aims to produce highly skilled and
          efficient professionals capable of thriving in today’s competitive
          market.
        </p>
        <p className="mt-4 text-gray-800 text-justify mb-4">
          SATHM boasts a diverse team of young and experienced faculty,
          including industry experts with extensive knowledge and practical
          experience. This blend of academic and professional expertise ensures
          that students receive a holistic education that covers both
          theoretical concepts and real-world applications. The department's
          primary goal is to nurture enthusiastic professionals equipped with
          the skills necessary to excel in aviation, tourism, and hospitality
          sectors, which are known for their fast-paced, ever-evolving
          environments.
        </p>
        <p className="mt-4 text-gray-800 text-justify mb-4">
          Each year, the department focuses on shaping future leaders who can
          meet the expanding requirements of the aviation, tourism, and hotel
          industries. The establishment of SATHM at DAVV was spearheaded under
          the visionary leadership of Hon'ble Vice Chancellor Prof. Renu Jain
          and Registrar Dr. Ajay Verma, who recognized the increasing need for
          specialized education in these fields. The formation of this
          department underscores DAVV's commitment to developing innovative
          programs that respond to current industry trends and demands, offering
          students the tools they need to succeed in their chosen careers.
        </p>
        <p className="mt-4 text-gray-800 text-justify mb-4">
          As SATHM continues to grow, it remains steadfast in its mission to
          provide quality education that aligns with industry standards,
          ultimately contributing to the advancement of aviation, tourism, and
          hospitality management on both a national and global scale.
        </p>
      </div>
    ),
    vision: (
      <div className="ml-8">
        <h3 className="text-xl font-semibold">Vision</h3>
        <p className="mt-4 text-gray-800 leading-6 text-justify">
          Our vision at the School of Tourism, Aviation, and Hospitality
          Management (SATHM) is to provide students with the highest quality
          education in aviation, tourism management, and commerce. We aim to
          equip our students with the essential knowledge and skills needed to
          excel in these rapidly growing industries. Through a combination of
          comprehensive academic programs and practical, industry-focused
          training, we prepare our students to meet the demands of today's
          professional world.
        </p>
        <p className="mt-4 text-gray-800 leading-6 text-justify">
          At SATHM, we emphasize not only technical proficiency but also the
          importance of soft skills, such as etiquette and professionalism,
          which are crucial for success in aviation, tourism, and hospitality
          sectors. Our curriculum is designed to blend theoretical learning with
          hands-on experience, ensuring that students are well-prepared to
          navigate real-world challenges.
        </p>
        <p className="mt-4 text-gray-800 leading-6 text-justify">
          By fostering industrial skills through practical exposure and close
          collaboration with industry experts, we aim to create professionals
          who are not only knowledgeable but also confident and capable of
          leading in their respective fields. Our commitment to providing
          top-tier education and skill development makes SATHM a premier
          destination for students aspiring to build successful careers in
          aviation, tourism, and commerce.
        </p>
      </div>
    ),
    mission: (
      <div className="ml-8">
        <h3 className="text-xl font-semibold">Mission</h3>
        <p className="mt-4 text-gray-800 mb-4">
          Our mission at the School of Tourism, Aviation, and Hospitality
          Management (SATHM) is to offer students the best academic and
          professional opportunities in the aviation and commercial industries
          globally. We are dedicated to equipping our students with the
          knowledge, skills, and exposure necessary to succeed in these dynamic
          fields.
        </p>
        <p className="mt-4 text-gray-800 mb-4">
          Through a carefully designed curriculum that blends academic rigor
          with practical training, we aim to prepare students for diverse and
          rewarding careers in aviation, management, and commerce. Our programs,
          which include degrees, diplomas, and certificate courses, are tailored
          to meet global industry standards, ensuring that our graduates are
          highly competitive in the international market.
        </p>
        <p className="mt-4 text-gray-800 mb-4">
          We also strive to create pathways for students to access leading
          corporate opportunities worldwide, offering them a solid foundation
          and the support needed to launch successful careers. At SATHM, we are
          committed to opening doors for our students and guiding them toward a
          booming future in aviation and commerce. Whether through industry
          collaborations, internships, or hands-on training, our mission is to
          ensure that every student is well-prepared for the evolving demands of
          these industries and empowered to thrive on a global scale.
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
              About SATHM
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
