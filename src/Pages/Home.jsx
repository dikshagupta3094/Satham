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
import PradhanMantri from "../Components/HomeComponent/PradhanMantri";
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
          <div className="mx-5 mt-1">
            <CraouslSlider images={Images.map((img) => img.image)} />
          </div>

          {/* Message from director */}
          <div>
            <MsgDirector/>
          </div>

          {/* Excellence */}
          <div>
            
            <PradhanMantri/>
          </div>

          {/* Trusted Partner */}
          <div className="mt-4">
            <h1 className="text-center text-3xl text-shadow font-semibold text-gray-700 p-2 mt-6">
              Trusted Partners
            </h1>
            {/* <TrustedParnter slides={Slides.map((img) => img.slide)} /> */}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
