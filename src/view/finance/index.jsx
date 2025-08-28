import React, { useEffect, useState } from "react";

import Emi from "./emi";
import Whychoose from "./whychoose";
import Loanprocess from "./loanprocess";
import finace from "../../assets/finace.webp";
import PartnerMarquee from "./partner";
import Eligiblity from "./eligiblity";
import Cube from "../../component/faq";
import Cta from "../../component/cta";
const Finance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[200px] md:h-[350px]">
        <img
          src={finace}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold">
            Finance{" "}
          </h1>
        </div>
      </div>

      <div className="container relative mx-auto p-3 ">
    <div
  className="bg-white w-full md:w-10/12 mx-auto p-2 rounded-lg relative z-10 mt-[-13.5%] md:mt-[-5.5%]"
  style={{
    boxShadow: `
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04)`,
  }}
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">8.5%</div>
      <div className="text-blue-600">Interest Rate</div>
    </div>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">100%</div>
      <div className="text-blue-600">Financing Available</div>
    </div>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">24 Hours</div>
      <div className="text-blue-600">Quick Approval</div>
    </div>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">7 Years</div>
      <div className="text-blue-600">Max Tenure</div>
    </div>
  </div>
</div>

        <div className="flex justify-center pt-3">
          <div className="w-full sm:w-10/12 p-5">
            <p className="text-black font-medium text-sm md:text-lg text-justify leading-relaxed">
              Wish Geeks Techserve offers convenience and efficiency to both sellers and
              buyers. Wish Geeks Techserve offers a comprehensive range of vintage and
              premium cars, providing diverse options for potential buyers in
              Europe. Buyers can set up a meeting and test drives by contacting
              sellers directly through the platform. Each of our vintage
              collections reflects the historic design of its time and continues
              to evoke nostalgia.
            </p>
          </div>
        </div>
      </div>

      <Emi />
      <PartnerMarquee />
      <Whychoose />
      <Loanprocess />
      <Eligiblity />
      <Cube />
      <Cta />
    </div>
  );
};

export default Finance;
