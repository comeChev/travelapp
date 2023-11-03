import Button from "./Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-2° flex-1 flex flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="pt-4 bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journey seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the World in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          {/*  */}
          {/* stars */}
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              excellent reviews
            </span>
          </p>

          {/* buttons */}
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button
              type="button"
              title="How we work"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </div>
        </div>
      </div>
      {/* location & metrics */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          {/* location */}
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" height={24} width={24} alt="close" />
            </div>
            <p className="bold-20 text-white">Aguas Caliente</p>
          </div>
          {/* distance */}
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            {/* elevation & kms */}
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
