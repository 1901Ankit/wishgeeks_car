import React from "react";
import { ShieldCheck } from "lucide-react";

const WhyChooseCarBazaar = () => {
  const features = [
    {
      title: "10+ Years Experience",
      description: "Decade of expertise in automotive industry",
    },
    {
      title: "10+ Years Experience",
      description: "Decade of expertise in automotive industry",
    },
    {
      title: "10+ Years Experience",
      description: "Decade of expertise in automotive industry",
    },
    {
      title: "10+ Years Experience",
      description: "Decade of expertise in automotive industry",
    },
  ];

  return (
    <div className=" mx-auto px-4 py-10">
   

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
        {/* Left: Text */}
        <div className="space-y-10">
          {/* Mission Section */}
          <div>
            <h3 className="text-blue-600 text-2xl md:text-4xl font-bold mb-4">
          Why Choose Our Wish Geeks Techserve
            </h3>
            <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
              At Wish Geeks Techserve, we stand as India’s most reliable automotive
              platform by combining over a decade of industry expertise with
              technology-driven solutions. We prioritize customer satisfaction,
              transparency, and vehicle quality at every step. Whether you're
              buying or selling, our platform ensures a seamless, secure, and
              trusted experience built on years of dedication to excellence.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white shadow-md rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop"
            alt="Team working toward mission"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCarBazaar;
