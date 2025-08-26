import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import toyota from "../../assets/brand/toyota.png";
import tesla from "../../assets/brand/tesla.png";
import bmw from "../../assets/brand/bmw.png";
import { motion } from "framer-motion";

const CarBrandsExplorer = () => {
  const brands = [
    {
      name: "Maruti Suzuki",
      cars: "350+ cars",
      image: toyota,
    },
    {
      name: "Hyundai",
      cars: "300+ cars",
      image: toyota,
    },
    {
      name: "Honda",
      cars: "150+ cars",
      image: tesla,
    },
    { name: "Tata", cars: "130+ cars", image: bmw },
    { name: "Kia", cars: "70+ cars", image: tesla },
    {
      name: "Renault",
      cars: "70+ cars",
      image: bmw,
      textColor: "text-yellow-600",
    },
    {
      name: "Ford",
      cars: "50+ cars",
      image: toyota,
    },
    {
      name: "Mahindra",
      cars: "40+ cars",
      image: tesla,
    },
    {
      name: "Toyota",
      cars: "20+ cars",
      image: toyota,
    },
    {
      name: "Volkswagen",
      cars: "20+ cars",
      image: bmw,
    },
    {
      name: "Mg Motors",
      cars: "10+ cars",
      image: tesla,
    },
    {
      name: "Volkswagen",
      cars: "20+ cars",
      image: bmw,
    },
  ];

  const BrandCard = ({ brand }) => (
 <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Only animate once when 30% visible
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
      }}
      className="bg-white rounded-xl p-4 text-center border border-gray-100 cursor-pointer"
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
      <h3 className="font-bold text-gray-700 mb-1 text-base">
        {brand.name}
      </h3>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Popular Brands
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
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4 ">
        {brands.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default CarBrandsExplorer;
