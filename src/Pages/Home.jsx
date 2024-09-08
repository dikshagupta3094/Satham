import React, { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout";
import bgHome4 from "../assets/Home/BackgroundImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Images } from "../Constants/CraouselData";
import CraouslSlider from "../Components/HomeComponent/CraouslSlider";
import TrustedParnter from "../Components/HomeComponent/TrustedParnter";
import { Slides } from "../Constants/TrustedPartner";
import MsgDirector from "../Components/HomeComponent/MsgDirector";
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
      <div  style={{ backgroundImage: `url(${bgHome4})`, backgroundSize:'100%'}}>
        <div className="flex flex-col items-center justify-center">
          
          {/* Crasouel */}{" "}
          <div className="m-1">
            <CraouslSlider images={Images.map((img) => img.image)} />
          </div>

          {/* Message from director */}
          <div>
            <MsgDirector/>
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
