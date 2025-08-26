import React from "react";
import { ArrowRight } from "lucide-react";
import frari from "../assets/frari.png";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative w-full h-[350px] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={frari}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="text-center relative">
        <div
          className=" rounded-2xl 
          p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-xl md:text-5xl font-bold text-white mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-gray-300 mb-8 text-lg md:text-xl">
            Join the elite circle of discerning automotive enthusiasts who trust
            us with their luxury vehicles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact">
              <button
                className="bg-gradient-to-r from-[#539bde] via-[#206fb8] to-[#073e71] cursor-pointer
              text-white font-bold py-4 px-6 text-lg"
              >
                BOOK CONSULTATION
              </button>
            </Link>
            <Link to="/auth">
              <button
                className="border border-white/20 text-white hover:border-[#2380D9]
               hover:text-[#fff] font-semibold py-4 px-6 text-lg transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                VIEW PORTFOLIO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
