import React from "react";
import { ArrowRight, CheckCircle, Clock, Phone, Shield } from "lucide-react";
import car from "../../assets/car.png";
import { Link } from "react-router-dom";

const Choose = () => {
  const benefits = [
    {
      title: "Cashless Claims",
      description:
        "Enjoy peace of mind with our wide network of partner garages. Simply walk in, get your vehicle serviced, and drive out without paying a rupee upfront. ",
    },
    {
      title: "24/7 Roadside Assistance",
      description:
        "Enjoy peace of mind with our wide network of partner garages. Simply walk in, get your vehicle serviced, and drive out without paying a rupee upfront. ",
    },
    {
      title: "Quick Claim Settlement",
      description:
        "Enjoy peace of mind with our wide network of partner garages. Simply walk in, get your vehicle serviced, and drive out without paying a rupee upfront. ",
    },
    {
      title: "No Claim Bonus",
      description:
        "Enjoy peace of mind with our wide network of partner garages. Simply walk in, get your vehicle serviced, and drive out without paying a rupee upfront. ",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Insurance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F6F8FA] text-black rounded-xl 0,0.1)] transition-all duration-300 hover:-translate-y-1  p-4"
              style={{
                boxShadow: `
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04)
    `,
              }}
            >
              <img
                alt="Feature"
                className="w-16 h-16  text-[#000] text-4xl"
                src={car}
              />

              <h3 className="text-xl font-bold mb-2  text-start">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-start">
                {benefit.description}
              </p>
              <Link to="/auth">
                <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
