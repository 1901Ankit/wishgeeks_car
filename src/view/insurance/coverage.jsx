import React from "react";
import { Car, CheckCircle, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Coverages = () => {
  const insuranceTypes = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Comprehensive Insurance",
      description:
        "Complete protection for your car against accidents, theft, natural disasters, and third-party liabilities.",
      features: [
        "Own Damage Cover",
        "Third Party Liability",
        "Personal Accident Cover",
        "Natural Calamities",
      ],
      price: "Starting from ₹8,500/year",
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Third Party Insurance",
      description:
        "Mandatory insurance covering damages to third-party property and injuries to third parties.",
      features: [
        "Third Party Property",
        "Third Party Injury",
        "Legal Liability",
        "Court Proceedings",
      ],
      price: "Starting from ₹2,500/year",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Zero Depreciation",
      description:
        "Get full claim amount without depreciation deduction on car parts and accessories.",
      features: [
        "No Depreciation",
        "Full Claim Amount",
        "New Car Benefits",
        "Premium Parts Cover",
      ],
      price: "Starting from ₹12,000/year",
    },
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Find the perfect plan tailored to your vehicle's protection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insuranceTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-3xl border border-gray-100 transition-all backdrop-blur-sm flex flex-col"
            >
              {/* Internal content padding */}
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-[#2380d9] to-[#1e4cb4] shadow-md mb-4">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {type.title}
                </h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed font-medium">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 text-base font-medium"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-indigo-700 font-semibold text-lg ">
                  {type.price}
                </div>
              </div>

              {/* Button outside of padded div */}
              <Link to="/auth">
                <button className="w-full py-3 bg-gradient-to-r from-[#2380d9] to-[#1e4cb4] text-white rounded-b-3xl font-semibold shadow-md hover:brightness-110 transition-all  cursor-pointer">
                  Choose Plan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverages;
