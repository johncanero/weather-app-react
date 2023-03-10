import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-5 mb-3 text-center font-Roboto">
        {/* Header Title */}
        <a href="/">
          <div className="flex justify-center">
            <img
              src={require("../images/weatherAppIcon.png")}
              className="w-10 mr-2 drop-shadow-2xl"
              alt="weatherAppIcon"
            />
            <h1 className="text-3xl font-bold text-white drop-shadow-2xl">
              WeatherCast
            </h1>
          </div>
        </a>
        {/* Cities */}
        <p className=" text-neutral-100">cities</p>
      </div>
    </div>
  );
};

export default Hero;
