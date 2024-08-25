import React, { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout";
import bgHome from "../assets/bgHome.jpg";
import DirectorImg from "../assets/DirectorImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <div className="bg-cover" style={{ backgroundImage: `url(${bgHome})` }}>
        <div className="flex flex-col items-center justify-center">
          <p
            className="max-w-[900px] text-justify p-3 text-gray-700 font-semibold mt-4 box-shadow mb-4 "
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

          {/* Craousl */}
           
           {/* <div>
             <h1>Aviation Industry Carrer</h1> 
             <div className="flex gap-10 slide-tracker">
              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt="" className="hover:scale-110 duration-1000 w-[250px]"/>

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt="" className="hover:scale-110 duration-1000 w-[250px]"/>

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt="" className="hover:scale-110 duration-1000 w-[250px]"/>

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt=""className="hover:scale-110 duration-1000 w-[250px]" />

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt=""className="hover:scale-110 duration-1000 w-[250px]" />

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt=""className="hover:scale-110 duration-1000 w-[250px]" />

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt=""className="hover:scale-110 duration-1000 w-[250px]" />

              <img src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-260nw-1815171710.jpg" alt=""className="hover:scale-110 duration-1000 w-[250px]" />

             </div>
           </div> */}

          {/* Message from director */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold text-gray-700 p-2 text-center text-shadow">
              Message From Director
            </h1>
            <div className="flex justify-center items-center gap-10 ">
              <div data-aos="flip-up">
                <img
                  src={DirectorImg}
                  alt="Director img"
                  className=" w-[300px] h-[400px] border border-blue-900 box-shadow rounded-md"
                />
                <p className="text-center p-2 text-gray-800 font-bold text-xl hover:text-gray-600 ">Dr.Preeti Singh</p>
              </div>
              <div className="w-1/2 text-justify border box-shadow p-5 rounded-md m-2 bg-white leading-8" data-aos="fade-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, dicta? Ea quae eligendi impedit deleniti
                praesentium maxime reiciendis autem dolorem doloremque ex
                molestiae quidem mollitia alias adipisci non nemo, eum commodi
                iste molestias! Consequuntur repellendus sed tempora aperiam,
                est pariatur quasi aut totam, rem temporibus asperiores ducimus
                nesciunt veniam expedita! Ipsum dolores quaerat, enim nobis
                ipsam cupiditate illo voluptatibus quia modi, qui magni officiis
                facilis doloribus nemo beatae quam obcaecati quod saepe dolore
                culpa provident deleniti deserunt laudantium. Accusamus
                voluptatibus obcaecati expedita exercitationem adipisci dicta
                sit deleniti eaque quis, officia eveniet ex id cum facere,
                mollitia tenetur. Expedita pariatur numquam repudiandae
                exercitationem voluptas dignissimos aut, voluptatum veniam sunt!
                Possimus deleniti tenetur aperiam quo. Ut ducimus cumque
                aspernatur totam officia quo omnis necessitatibus maiores
                blanditiis dolor deleniti rem harum, quis qui etexercitationem
                pariatur cum? Ad et, deleniti enim voluptates, itaque quidem
                aspernatur eos, minima repellat veniam eius cupiditate!
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
