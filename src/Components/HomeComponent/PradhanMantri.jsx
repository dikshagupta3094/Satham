import React, { useEffect } from "react";
import PMCollege1 from "../../assets/Home/PMCollege1.jpg";
import PMCollege2 from "../../assets/Home/PMCollege2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function PradhanMantri() {
    useEffect(() => {
        AOS.init({
            offset: 300,
            easing: "ease-in-sine",
            duration: 500,
        });
    }, []);
    return (
        <div className="bg-white border-2 box-shadow m-4 mt-8 border-blue-400 rounded-md p-4">
            <h1 className="text-blue-900 text-center text-4xl p-4 border-b-4 font-bold text-shadow">
                Pradhan Mantri Colleges of Excellence
            </h1>
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10  mx-2 rounded-lg">
                <div className="lg:w-2/4 w-full">
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
                <div className="lg:w-[30%] flex justify-center">
                <img
                    src={PMCollege1}
                    alt="Director Image"
                    className="box-shadow transition-transform duration-300 ease-in-out transform hover:scale-110 ml-3 mt-3 rounded-md h-auto w-full "
                />
                </div>
                <div className="lg:w-[30%] flex justify-center">
                <img
                    src={PMCollege2}
                    alt="Director Image"
                    className="box-shadow transition-transform duration-300 ease-in-out transform hover:scale-110 ml-3 mt-3 rounded-md h-auto w-full "
                />
                </div>
            </div>
        </div>
    );
}

export default PradhanMantri;
