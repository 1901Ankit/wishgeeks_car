import { ArrowRight, Award, Heart, Shield, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Car Buying",
      description:
        "Wide selection of verified pre-owned cars with detailed inspection reports and transparent pricing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Car Buying",
      description:
        "Wide selection of verified pre-owned cars with detailed inspection reports and transparent pricing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Car Buying",
      description:
        "Wide selection of verified pre-owned cars with detailed inspection reports and transparent pricing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Car Buying",
      description:
        "Wide selection of verified pre-owned cars with detailed inspection reports and transparent pricing",
    },

  ];

  return (
    <section className="py-10 bg-gray-50  ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
            What We Offer{" "}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive services tailored to yur needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {values.map((value, index) => (
            <div key={index}>
              <div className="relative group rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.2)] h-full overflow-hidden transition-all duration-300">
                {/* Hover Background */}
                <div
                  className="absolute top-0 left-0 w-full 
                h-full bg-gradient-to-r from-[#2380D9] to-[#357fc5] transform -translate-x-full transition-transform duration-300 z-0 group-hover:translate-x-0"
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl  bg-[#2380D9]
    group-hover:bg-gradient-to-r from-[#fff] to-[#ffff] group-hover:bg-white 
    flex items-center justify-center mb-6 
    text-white group-hover:text-[#2380D9] 
    transition-all duration-300`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-600 group-hover:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-white ">
                    {value.description}
                  </p>
                  <Link to="/auth">
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-colors cursor-pointer">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
