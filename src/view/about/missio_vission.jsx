import { CheckCircle } from "lucide-react";
import React from "react";

const MissionVision = () => {
  const features = [
    "Transparent pricing with no hidden costs",
    "Quality assured vehicles with detailed inspection",
    "Hassle-free documentation and financing",
    "Exceptional customer service and support",
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-14 text-center">
          Our Mission & Vision
        </h2>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 text-2xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                Our mission is to transform the way India buys and sells used
                cars by creating a trustworthy, tech-enabled platform that
                ensures quality, transparency, and convenience for every
                customer.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white shadow-md rounded-xl"
                >
                  <CheckCircle className="h-6 w-6 text-[#2380D9] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop"
              alt="Team working toward mission"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-none">
            <img
              src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop"
              alt="Vision of future success"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-5">
            <div>
              <h2 className="text-blue-600 text-2xl md:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                To be India’s most trusted and innovative automotive platform,
                where every used car transaction is seamless, transparent, and
                built on customer satisfaction making ownership truly enjoyable.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white shadow-md rounded-xl"
                >
                  <CheckCircle className="h-6 w-6 text-[#2380D9] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
