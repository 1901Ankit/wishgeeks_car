import React, { useState } from "react";

const ServiceCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const processes = [
    {
      step: "01",
      title: "Exclusive Consultation",
      subtitle: "Personalized Assessment",
      description:
        "Our certified luxury automotive consultants perform an in-depth analysis of your vehicle's requirements using advanced diagnostic technology.",
      features: [
        "Premium Diagnostics",
        "Personalized Service Plan",
        "Expert Recommendations",
      ],
      color: "from-[#2380D9] via-[#2380D9] to-[#2380D9]",
    },
    {
      step: "02",
      title: "VIP Appointment",
      subtitle: "Concierge Booking",
      description:
        "Experience white-glove scheduling through our exclusive concierge service with priority booking and flexible timing options.",
      features: ["Priority Scheduling", "Flexible Timing", "Concierge Support"],
      color: "from-[#2380D9] via-[#2380D9] to-[#2380D9]",
    },
    {
      step: "03",
      title: "Master Craftsmanship",
      subtitle: "Precision Engineering",
      description:
        "Your luxury vehicle receives meticulous attention from our master-certified technicians using OEM parts and cutting-edge equipment.",
      features: ["Master Technicians", "OEM Parts Only", "Advanced Equipment"],
      color: "from-[#2380D9] via-[#2380D9] to-[#2380D9]",
    },
    {
      step: "04",
      title: "Performance Perfection",
      subtitle: "Quality Assurance",
      description:
        "Comprehensive quality inspection ensures your vehicle meets the highest standards of luxury performance and reliability.",
      features: [
        "Quality Inspection",
        "Performance Testing",
        "Luxury Standards",
      ],
      color: "from-[#2380D9] via-[#2380D9] to-[#2380D9]",
    },
  ];

  return (
    <section className="relative bg-gray-50 overflow-hidden py-6 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
          Our Process{" "}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simple steps to get started withour services{" "}
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {processes.map((process, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transform transition-transform duration-500 hover:scale-105 h-full"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className="relative p-6 h-full flex flex-col justify-between backdrop-blur-2xl border border-white/10 rounded-2xl
       overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-700"
            >
              {/* Step Badge */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${process.color}
           text-white font-bold text-lg mb-4 transform transition-transform duration-500 group-hover:rotate-12`}
              >
                {process.step}
              </div>

              <h3 className="text-black text-[22px] font-semibold">
                {process.title}
              </h3>
              <p className="font-medium text-sm mb-4 leading-relaxed text-gray-600">
                {process.subtitle}
              </p>
              <p className="font-medium text-sm mb-6 leading-relaxed text-gray-600 flex-1">
                {process.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {process.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-600 font-medium "
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${process.color} mr-3 `}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom Accent Line */}
              <div
                className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r ${process.color} w-0 group-hover:w-full transition-all duration-700`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
