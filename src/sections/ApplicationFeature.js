import React from "react";
import { motion } from "framer-motion";

const ApplicationFeature = () => {
  return (
    <div>
      {/* Application */}
      <div className="mt-4 mb-36 md:mb-12 lg:mb-20 lg:mt-8">
        <div className="mb-4">
          <h2 className="mx-6 mb-3 text-lg font-semibold text-center md:text-2xl lg:text-3xl md:mx-20 lg:mx-0 text-white">
            Introducing WeatherCast - Your Ultimate Weather Companion
          </h2>
          <p className="mx-8 text-base text-center text-white lg:text-lg md:mx-36 lg:mx-96">
            WeatherCast is your ultimate weather companion, providing you with
            accurate and up-to-date information about the weather conditions in
            your area. With our user-friendly interface and customizable
            features, you can easily track the weather conditions that matter to
            you.
          </p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          className="flex my-6 lg:my-3"
        >
          <div className="flex justify-center w-10/12 mx-auto">
            <a href="/" rel="noreferrer">
              <img
                width={1000}
                height={600}
                className="transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-80"
                src={require("../images/weatherCastAppFeature.png")}
                alt="WeatherCast Cities Application"
              />
            </a>
          </div>
        </motion.div>

        <div>
          <p className="mx-8 italic text-center lg:text-xl md:mx-40 lg:mx-72">
            Whether you need to plan your day, stay up-to-date on severe weather
            alerts, or simply check the current temperature, WeatherCast has you
            covered.
          </p>

          <p className="mx-8 mt-4 italic text-center lg:text-xl md:mx-40 lg:mx-72">
            Our app uses advanced technology to provide you with hyper-local
            weather data, so you can stay prepared no matter where you are.{" "}
            <span className="font-bold text-white">
              Download{" "}
              <a href="/" rel="noreferrer" className="hover:text-black">
                WeatherCast
              </a>{" "}
              today and take control of your weather forecasting needs!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFeature;
