import React, { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout";
// import bgHome from "../assets/bgHome.jpg";
// import bgHome1 from "../assets/bgHome1.png";
// import bgHome2 from "../assets/bgHome2.png";
// import bgHome3 from "../assets/bgHome3.png";
import bgHome4 from "../assets/Home/bgHome4.jpg";
import DirectorImg from "../assets/Home/DirectorImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Images } from "../Constants/CraouselData";
import CraouslSlider from "../Components/CraouslSlider";
import TrustedParnter from "../Components/TrustedParnter";
import { Slides } from "../Constants/TrustedPartner";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      easing: "ease-in-sine",
      duration: 500,
    });
  }, []);
  return (
    <HomeLayout>
      {/* style={{ backgroundImage: `url(${bgHome1})` }} */}
      {/* bg-gradient-to-r from-cyan-400 to-blue-400 */}
      <div className="bg-cover" style={{ backgroundImage: `url(${bgHome4})` }}>
        <div className="flex flex-col items-center justify-center">
          <p
            className="max-w-[80%] text-justify p-3 text-gray-700 font-semibold mt-4 box-shadow mb-4 text-xl bg-white"
            data-aos="fade-down"
          >
            Aviation management is a department responsible for coordinating
            operations at an airport, airline or other businesses in the
            aviation field. Professionals in this department specialise in
            various aspects of the fields, such as flight logistics, aircraft
            maintenance, customer service and marketing for the airline.
            Individuals pursuing a career in this field need strong analytical
            and leadership skills to become successful.
          </p>
          {/* Crasouel */}{" "}
          <div className="mt-4">
            <CraouslSlider images={Images.map((img) => img.image)} />
          </div>
          {/* Message from director */}
          <div className="w-full">
            <h1 className="text-3xl font-semibold text-gray-700 p-2 text-center text-shadow mt-8">
              Message From Director
            </h1>

            <div className="max-w-screen-lg mx-auto p-4">
              <div className="flex flex-col lg:flex-row md:flex-col justify-center items-center md:gap-10">
                {/* Director Image Section */}
                <div data-aos="fade-up" className="flex flex-col items-center">
                  <img
                    src={DirectorImg}
                    alt="Director Dr. Preeti Singh"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-[500px] h-auto border-2 border-blue-900  shadow rounded-md"
                  />
                  <p className="text-center p-2 text-gray-800 font-bold text-xl hover:text-gray-600 mt-2">
                    Dr. Preeti Singh
                  </p>
                </div>

                {/* Director Description Section */}
                <div
                  className="w-full md:max-w-[700px] text-justify border shadow p-5 rounded-md bg-white leading-8 m-2 text-sm md:text-base box-shadow"
                  data-aos="fade-zoom-in"
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
                </div>
              </div>
            </div>
          </div>
          {/* Excellence */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-700 p-2 text-center text-shadow m-6">
              Pradhan Mantri Colleges of Excellence
            </h1>
            <div
              className=" max-w-screen-lg w-full text-justify border shadow   md:text-base text-sm leading-8  bg-white rounded-md box-shadow mx-2   p-4"
              data-aos="fade-zoom-in"
            >
              <p className="mb-2">
                Since July 2024, The Pradhan Mantri Colleges of Excellence aim
                to provide holistic, quality, and employment-oriented education
                in Madhya Pradesh. Principals and teachers are selected based on
                merit, ensuring skilled administrators and educators.
                Infrastructure development includes lab equipment, library,
                sports facilities, furniture, etc and new facilities with a
                budget of Rs 336 crore and an annual expenditure of Rs 150 crore
                for 2232 new posts. As many as 1845 academic posts and 387 posts
                for class III and IV categories were created for 55 colleges.
              </p>
              <p>
                The Indian Knowledge System Cell is being established under the
                National Education Policy-2020, providing access to traditional
                Indian texts and educational resources. These colleges focus on
                multi-faculty education, postgraduate courses, and modern
                pedagogy through IT. One of those College is{" "}
                <span className="text-blue-950 font-[900] text-xl">SATHM</span>
              </p>
            </div>
          </div>
          {/* Trusted Partner */}
          <div className="mt-4">
            <h1 className="text-center text-3xl text-shadow font-semibold text-gray-700 p-2 mt-6">
              Trusted Partners
            </h1>
            <TrustedParnter slides={Slides.map((img) => img.slide)} />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
