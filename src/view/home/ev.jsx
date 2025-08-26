import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Ev = () => {
  const carData = [
    {
      id: 1,
      name: "Tata Harrier EV",
      price: "₹9.70 - 10.93 Lakh*",
      image:
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 2,
      name: "MG Windsor EV",
      price: "₹13.99 - 25.15 Lakh*",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 3,
      name: "Mahindra BE 6",
      price: "₹11.50 - 17.62 Lakh*",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 4,
      name: "MG Comet EV",
      price: "₹11.11 - 20.50 Lakh*",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 5,
      name: "Tata Harrier EV",
      price: "₹9.70 - 10.93 Lakh*",
      image:
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 6,
      name: "MG Windsor EV",
      price: "₹13.99 - 25.15 Lakh*",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 7,
      name: "Mahindra BE 6",
      price: "₹11.50 - 17.62 Lakh*",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 8,
      name: "MG Comet EV",
      price: "₹11.11 - 20.50 Lakh*",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      kmDriven: "12,000 km",
      fuelType: "Petrol",
      fuel: "Petrol",
      transmission: "Manual",
      location: "Delhi",
    },
  ];

  return (
    <div className="bg-gray-50  py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-white p-4 space-y-8"
          style={{
            border: "1px solid rgba(36, 39, 44, 0.1)",
            borderRadius: "16px",
            boxShadow: "0 1px 2px rgba(36, 39, 44, 0.1)",
          }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Electric Cars
            </h1>
          </div>

          {carData.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {carData.map((car) => (
                <SwiperSlide key={car.id}>
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform mb-2 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-600 font-semibold ">
                        {car.name}
                      </h3>
                      <p className="text-gray-600 font-semibold mb-4">
                        {car.price}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 mb-3">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.kmDriven}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.fuel}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.transmission}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.location}
                        </span>
                      </div>
                      <Link to="/buy-cars">
                        <button className="w-full bg-white border border-[#2380D9]  cursor-pointer text-[#2380D9] py-2 px-4 rounded-lg font-medium hover:bg-[#2380D9] hover:text-white transition-colors duration-200">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">
              No cars available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ev;
