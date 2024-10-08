import React, { useEffect } from "react";
import DirectorImg from "../../assets/Home/DirectorImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
function MsgDirector() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      easing: "ease-in-sine",
      duration: 500,
  });
  }, []);
  return (
    <div className="bg-white border-4 border-blue-950 mx-4 rounded-lg mt-8" >
      <h1 className="text-white text-center text-4xl p-4  font-bold bg-blue-900 text-shadow ">
        MEESAGE FROM DIRECTOR
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10 mx-2 rounded-lg" data-aos="fade-zoom-in">
        <div>
          <img
            src={DirectorImg}
            alt="Director Image"
            className="box-shadow m-3 rounded-lg h-[250px] w-[250px] md:h-[400px] md:w-[400px] sm-custom:h-[300px] sm-custom:w-[300px]"
          />
        </div>
        <div className=" w-[80%] ">
          <p className="text-justify pt-8 px-2 text-sm md:text-base lg:h-96 lg:overflow-clip">
          I welcome you on behalf of School Of Tourism, Aviation And Hospitality Management(SATHM), DAVV, which is a premiere department of central India recently opened on 22July’24. The department provides high-quality education in the field of aviation, tourism and hospitality management. The department is equipped with a mix of young and experienced professionals, industry experts with in-depth knowledge and expertise in subject area. The department will soon churn out enthusiastic and efficient young professionals as per the need of Aviation, Tourism and Hospitality industry market.  We provide holistic development of student by giving them a platform to participate in inter college activities like sports, cultural clubs, community services, field visit etc for greater academic achievement. We would expect that you venture beyond your “Comfort Zones” both inside and outside the classrooms. Take maximum advantage of facilities, participate fully and evolve into ‘Brand Yourself’.
          <p>
          I thank you for showing your interest in SATHM which means a family and by joining SATHM , you are embarking on an education system that is meant to be transformative – academically, socially, morally and personally. As “Excellence and Values” are our guiding principles which are reflected in every activity of our Department so we believe in a well-rounded and all-pervasive student experience to maximize learning opportunities. Through the efforts of our accomplished faculty, our talented students and exceptional alumini , we have been able to make rapid progress on our path of continuous growth and innovation.
          
          </p>
          </p>
          <NavLink to="/about">
              <button className=" text-blue-950 font-extrabold">
                Read more...
              </button>
            </NavLink>
          <p className="font-semibold text-[18px] text-shadow1">Dr. Preeti Singh</p>
          <p className="font-semibold text-[18px] pb-1 text-shadow1">
            Director <span>SATHM</span>,DAVV
          </p>
        </div>
      </div>
    </div>
  );
}

export default MsgDirector;

{
  /* Director Image Section */
}
{
  /* <div className="flex flex-col items-center">
          <img
            src={DirectorImg}
            alt="Director Dr. Preeti Singh"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[500px] h-auto border-2 border-blue-900  shadow rounded-md"
          />
          <p className="text-center p-2 text-gray-800 font-bold text-xl hover:text-gray-600 mt-2">
            Dr. Preeti Singh
          </p>
        </div> */
}

{
  /* Director Description Section */
}
{
  /* <div
          className="w-full md:max-w-[700px] text-justify border shadow p-5 rounded-md bg-white leading-8 m-2 text-sm md:text-base box-shadow"
          
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium, dicta? Ea quae eligendi impedit deleniti
          praesentium maxime reiciendis autem dolorem doloremque ex
          molestiae quidem mollitia alias adipisci non nemo, eum commodi
          iste molestias! Consequuntur repellendus sed tempora aperiam,
          est pariatur quasi aut totam, rem temporibus asperiores
          ducimus nesciunt veniam expedita! Ipsum dolores quaerat, enim
          nobis ipsam cupiditate illo voluptatibus quia modi, qui magni
          officiis facilis doloribus nemo beatae quam obcaecati quod
          saepe dolore culpa provident deleniti deserunt laudantium.
          Accusamus voluptatibus obcaecati expedita exercitationem
          adipisci dicta sit deleniti eaque quis, officia eveniet ex id
          cum facere, mollitia tenetur. Expedita pariatur numquam
          repudiandae exercitationem voluptas dignissimos aut,
          voluptatum veniam sunt! Possimus deleniti tenetur aperiam quo.
          Ut ducimus cumque aspernatur totam officia quo omnis
          necessitatibus maiores blanditiis dolor deleniti rem harum,
          quis qui et exercitationem pariatur cum? Ad et, deleniti enim
          voluptates, itaque quidem aspernatur eos, minima repellat
          veniam eius cupiditate!
        </div> */
}
