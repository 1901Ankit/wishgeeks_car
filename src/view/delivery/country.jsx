import React from "react";
import country from "../../assets/Flag.png";

const Country = () => {
  return (
    <div className="bg-[#F6F8FA] px-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="w-full md:w-5/12 space-y-4">
          <h1 className="text-blue-700 text-2xl md:text-4xl font-bold leading-snug">
            Get Your Dream Car Delivered Right to Your Doorstep
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            Whether you're eyeing a stylish hatchback from France, a rugged SUV
            from Germany, or a luxury sedan from Italy — we've got you covered.
            Our seamless cross-border delivery service brings cars from across
            Europe straight to your home, hassle-free.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            We handle everything — sourcing, documentation, transport, and final
            delivery — so you can focus on choosing the perfect car. All at an
            unbeatable price and with full transparency.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-6/12 relative z-10">
          <img
            src={country}
            alt="European Car Delivery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Country;
