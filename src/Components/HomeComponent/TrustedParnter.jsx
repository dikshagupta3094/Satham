import React from "react";
import Marquee from "react-fast-marquee";
function TrustedParnter({ slides }) {
  return (
    <marquee>
    <div className="flex items-center justify-center gap-10 p-8">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-[120px] h-[100px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[130px] lg:w-[200px] lg:h-[150px] hover:scale-105 duration-1000 cursor-pointer"
          style={{ maxWidth: '100%' }} 
        />
      ))}
    </div>
    </marquee>
  );
}

export default TrustedParnter;
