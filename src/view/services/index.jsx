import React, { useEffect } from "react";
import Cube from "../../component/faq";
import Cta from "../../component/cta";
import WhyChooseCarBazaar from "./whychoose";
import OurServices from "./ourservice";
import finace from "../../assets/finace.webp";
import WhatWeOffer from "./offer";
import ServiceCard from "./process";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[200px] md:h-[300px]">
        <img
          src={finace}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold">
            Services{" "}
          </h1>
        </div>
      </div>
      {/* Hero Section */}

      <WhatWeOffer />
      <OurServices />
      <WhyChooseCarBazaar />
      <ServiceCard />
      <Cube />
      <Cta />
    </div>
  );
};

export default Services;
