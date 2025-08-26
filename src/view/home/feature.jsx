import React from "react";
import imagecar from "../../assets/imagecar.png"; // Center car image
import image5 from "../../assets/image5.png"; // Background image

const FeaturesSection = () => {
  return (
    <div className="relative py-10 w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image5}
        className="absolute inset-0 object-cover w-full h-full z-0"
        alt="Background"
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 gap-y-16 lg:gap-x-6">
        {/* Left Features */}
        <div className="space-y-16 max-w-sm text-left">
          {[
            "Experience support team",
            "Handle emergency situations",
            "Insurance Included",
          ].map((title, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                {title} <span className="text-[#2380D9]">⦿</span>
              </h3>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
            </div>
          ))}
        </div>

        {/* Center Car Image */}
        <div className="w-full max-w-sm flex justify-center">
          <img
            src={imagecar}
            alt="Car Top View"
            className="w-[280px] md:w-[360px] lg:w-[400px]"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-16 max-w-sm text-left">
          {[
            "Hight technology instrument",
            "Access control system",
            "Online 24/7 Available",
          ].map((title, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                {title} <span className="text-[#2380D9]">⦿</span>
              </h3>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
