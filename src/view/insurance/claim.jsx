import React from "react";
import car from "../../assets/car.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const claimProcess = [
  {
    step: "1",
    title: "Report Incident",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "2",
    title: "Document Damage",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "3",
    title: "Choose Garage",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "4",
    title: "Get Repaired",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "5",
    title: "Inspection",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "6",
    title: "Approval",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "7",
    title: "Claim Settlement",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
  {
    step: "8",
    title: "Drive Again",
    description:
      "Post-inspection, your claim is reviewed and approved, and the repair work is greenlit at partner garages.",
  },
];

const Claim = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Easy Claim Process
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to file and process your insurance claim
          </p>
        </div>

        <Swiper
          className=""
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {claimProcess.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="bg-white text-black rounded-xl p-4 mb-2"
                style={{
                  boxShadow: `
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04)
    `,
                }}
              >
                <div className="flex items-center justify-between">
                  <img
                    src={car}
                    alt="Claim Step"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2  text-start">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-start">
                  {item.description}
                </p>
                <Link to="/auth">
                  <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Claim;
