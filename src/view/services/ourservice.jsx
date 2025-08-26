import React from "react";
import servicse from "../../assets/ourservice.jpg";

const OurServices = () => {
  const stats = [
    { value: "50,000+", label: "Cars Available" },
    { value: "25+", label: "Cities Covered" },
    { value: "500+", label: "Service Centers" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div
      className="relative bg-cover bg-center text-white py-6 px-4"
      style={{ backgroundImage: `url(${servicse})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold">Our Services</h2>
        <p className="text-sm md:text-[24px] text-gray-200 mt-1 mb-10">
          Complete automotive solutions under one roof
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl md:text-[36px] font-bold">
                {item.value}
              </span>
              <span className="text-sm md:text-[24px] text-gray-300 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
