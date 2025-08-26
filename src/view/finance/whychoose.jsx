import React from "react";
import car from "../../assets/car.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Whychoose = () => {
  const loanFeatures = [
    {
      title: "Low Interest Rates",
      description: "Starting from 8.5% per annum with competitive rates",
    },
    {
      title: "Quick Approval",
      description:
        "Get loan approval within 24 hours with minimal documentation",
    },
    {
      title: "Flexible Tenure",
      description:
        "Choose loan tenure from 1 to 7 years as per your convenience",
    },
    {
      title: "100% Financing",
      description: "Get up to 100% financing on your dream car purchase",
    },
  ];

  return (
    <>
      {/* Loan Features */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Car Loans
            </h2>
            <p className="text-xl text-gray-600">
              Benefits that make us the preferred choice for car financing
            </p>
          </div>

          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanFeatures.map((feature, index) => (
              <div
                key={index}
                className=" bg-[#ffff] text-black rounded-xl p-4 "
                style={{
                  boxShadow: `
      0 4px 20px rgba(0, 0, 0, 0.08),
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
                  {" "}
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-start">
                  {feature.description}
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
    </>
  );
};

export default Whychoose;
