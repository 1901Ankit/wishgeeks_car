import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import delhi from "../../assets/location/delhi.svg";
import tesla from "../../assets/brand/tesla.png";
  
const TrustedCarsNearby = () => {
  const brands = [
    {
      name: "Ahmedabad",
      image: delhi,
    },
    {
      name: "Bangalore",
      image: delhi,
    },
    {
      name: "Chennai",
      image: delhi,
    },
    { name: "Delhi NCR", image: delhi },
    { name: "Gurgaon", image: delhi },
    {
      name: "Hyderabad",
      image: delhi,
    },
    {
      name: "Jaipur",
      image: delhi,
    },
    {
      name: "Kolkata",
      image: delhi,
    },
    {
      name: "Mumbai",
      image: delhi,
    },
    {
      name: "Noida",
      image: delhi,
    },
    {
      name: "Uttrakhand",
      image: delhi,
    },
    {
      name: "Pune",
      image: delhi,
    },
  ];

  const BrandCard = ({ brand }) => (
    <div
      className="bg-white rounded-xl p-4  text-center hover:shadow-lg transition-all duration-300 
      cursor-pointer transform hover:scale-105 border border-gray-100"
      style={{
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)`,
      }}
    >
      <div className="mb-3 flex justify-center">
        <div className="w-18 h-18 flex items-center justify-center">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
      <h3 className="font-bold text-gray-700 mb-1 text-base">{brand.name}</h3>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get trusted used cars nearby
        </h2>
      </div>

      {/* Mobile View - Swiper */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={2.2}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <BrandCard brand={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default TrustedCarsNearby;
