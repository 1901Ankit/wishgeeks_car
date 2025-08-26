import React from "react";
import car from "../../assets/car.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Careffect = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold leading-tight mt-1 capitalize">
          Cars as effective as new
        </h1>
      </div>
      <section className="py-10 px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#F6F8FA] text-black rounded-xl p-4 "
              style={{
                boxShadow: `
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04)
    `,
              }}
            >
              <img
                alt="Feature"
                className="w-16 h-16 mb-2 text-[#000] text-4xl"
                src={car}
              />
              <h3 className="text-xl font-bold mb-2">
                Delivery to Your Door or Pick-Up Point{" "}
              </h3>
              <p className="text-[#5E5E5E] font-normal mb-4 text-sm">
                We will pick up your desired car from anywhere and bring it
                straight away to you.
              </p>
              <Link to="/auth">
                <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careffect;
