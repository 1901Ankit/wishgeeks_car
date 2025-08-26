import { ArrowRight, Award, Heart, Shield, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Value = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction above everything else and strive to exceed expectations.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparency",
      description:
        "Complete transparency in pricing, vehicle history, and all transactions with no hidden costs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description:
        "Every car undergoes rigorous 200+ point inspection to ensure the highest quality standards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Continuously innovating to provide the best automotive solutions and user experience.",
      color: "from-purple-500 to-indigo-500",
    },
  ];
  return (
    <>
      {/* Values Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that drive our commitment to excellence and
              innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="">
                <div className="bg-white rounded-2xl p-4 shadow-lg h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 text-white `}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2"> {value.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <Link to="/auth">
                    <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
