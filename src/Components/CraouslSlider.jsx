import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function CraouslSlider({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    console.log(Math.random());
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, []);
  return (
    <div
      className="relative overflow-hidden w-full  sm:h-[400px] sm:w-[300px]
            md:h-[400px] md:w-[500px]
            lg:h-[600px] lg:w-[770px]
            xl:h-[600px] xl:w-[1000px]  h-auto mx-auto"
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="
            w-full h-auto flex-shrink-0  border-blue-800 border-4
            sm:h-[400px] sm:w-[300px]
            md:h-[400px] md:w-[500px]
            lg:h-[600px] lg:w-[770px]
            xl:h-[600px] xl:w-[1000px]
          "
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-0">
        <button>
          <ArrowBackIosIcon
            onClick={prev}
            className=" bg-white rounded-[100%] p-2 shadow text-black hover:bg-slate-200"
          />
        </button>
        <button>
          <ArrowForwardIosIcon
            size={40}
            onClick={next}
            className=" bg-white rounded-[100%] p-2 shadow text-black hover:bg-slate-400"
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CraouslSlider;
