import React from "react";

function TrustedParnter({ slides }) {
  return (
    <div className="flex lg:flex-row md:flex-col items-center justify-center gap-20 p-8 slide-tracker">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-[250px] h-[200px] hover:scale-105 duration-1000 cursor-pointer"
        />
      ))}
    </div>
  );
}

export default TrustedParnter;
