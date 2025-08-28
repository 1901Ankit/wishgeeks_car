import React, { useEffect, useState } from "react";
import finace from "../../assets/finace.webp";
import Claim from "./claim";
import Choose from "./choose";
import Quote from "./quote";
import Cube from "../../component/faq";
import Cta from "../../component/cta";
import Coverages_index from "./cover";
const Insurance = () => {
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
            Insurance{" "}
          </h1>
        </div>
      </div>
      <div className="container relative mx-auto p-2">
        {/* Stats Section */}
        <div
          className="bg-white py-2 w-[100%] md:w-10/12 mx-auto 
      rounded-lg relative z-10 mt-[-13.5%] md:mt-[-4.5%]"
          style={{
            boxShadow: `
        0 4px 12px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(0, 0, 0, 0.04)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">5 Lakh+</div>
              <div className="text-blue-600">Policies Sold</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">98%</div>
              <div className="text-blue-600">Claim Settlement</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-blue-600">Customer Support</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">1000+</div>
              <div className="text-blue-600">Network Garages</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <div className="w-full sm:w-10/12 p-5">
            <p className="text-black font-medium text-sm md:text-lg text-justify leading-relaxed">
              At Wish Geeks Techserve, we don’t just help you drive home your dream
              vintage or premium car — we ensure it’s protected with confidence.
              Our curated insurance partners offer tailored car insurance
              solutions, designed for classic collections and modern marvels
              alike. At Wish Geeks Techserve, we don’t just help you drive home your dream
              vintage or premium car — we ensure it’s protected with confidence.
              Our curated insurance partners offer tailored car insurance
              solutions, designed for classic collections and modern marvels
              alike.
            </p>
          </div>
        </div>
      </div>
      <Quote />
      <Claim />
      <Coverages_index />
      <Choose />
      <Cube />
      <Cta />
    </div>
  );
};

export default Insurance;
