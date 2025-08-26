import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchcar = () => {
  const [activeTab, setActiveTab] = useState("SUV");

  const carData = {
    SUV: [
      {
        id: 1,
        name: "Mahindra Bolero",
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
        name: "Mahindra Scorpio N",
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
        name: "Mahindra Thar",
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
        name: "Hyundai Creta",
        price: "₹11.11 - 20.50 Lakh*",
        image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
    ],
    Hatchback: [
      {
        id: 5,
        name: "Maruti Suzuki Swift",
        price: "₹5.85 - 8.67 Lakh*",
        image:
          "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 6,
        name: "Hyundai i20",
        price: "₹7.07 - 11.88 Lakh*",
        image:
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 7,
        name: "Tata Altroz",
        price: "₹6.60 - 10.74 Lakh*",
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
        name: "Honda Jazz",
        price: "₹7.49 - 9.96 Lakh*",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
    ],
    Sedan: [
      {
        id: 9,
        name: "Honda City",
        price: "₹11.82 - 16.35 Lakh*",
        image:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 10,
        name: "Hyundai Verna",
        price: "₹11.07 - 17.42 Lakh*",
        image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 11,
        name: "Maruti Ciaz",
        price: "₹8.31 - 12.23 Lakh*",
        image:
          "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 12,
        name: "Skoda Slavia",
        price: "₹11.69 - 18.69 Lakh*",
        image:
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
    ],
    MUV: [
      {
        id: 13,
        name: "Maruti Suzuki Ertiga",
        price: "₹8.69 - 13.03 Lakh*",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 14,
        name: "Mahindra Bolero Neo",
        price: "₹9.95 - 12.15 Lakh*",
        image:
          "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 15,
        name: "Toyota Innova Crysta",
        price: "₹19.99 - 26.55 Lakh*",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 16,
        name: "Kia Carens",
        price: "₹10.52 - 18.52 Lakh*",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
    ],
    Luxury: [
      {
        id: 17,
        name: "BMW 3 Series",
        price: "₹42.30 - 51.50 Lakh*",
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 18,
        name: "Mercedes C-Class",
        price: "₹55.40 - 68.40 Lakh*",
        image:
          "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 19,
        name: "Audi A4",
        price: "₹45.34 - 54.58 Lakh*",
        image:
          "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
      {
        id: 20,
        name: "Jaguar XE",
        price: "₹46.64 - 54.20 Lakh*",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        kmDriven: "12,000 km",
        fuelType: "Petrol",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Delhi",
      },
    ],
  };

  const tabs = ["SUV", "Hatchback", "Sedan", "MUV", "Luxury"];

  return (
    <div className="bg-gray-50  py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-white p-4  space-y-8"
          style={{
            border: "1px solid rgba(36, 39, 44, 0.1)",
            borderRadius: "16px",
            boxShadow: "0 1px 2px rgba(36, 39, 44, 0.1)",
          }}
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              The most searched cars{" "}
            </h1>

            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar space-x-2 rounded-lg border-b border-gray-200 pb-2 px-2 md:space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap  cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#2380D9] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carData[activeTab].map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800">
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

                  {/* CTA Button */}
                  <Link to="/buy-cars">
                    <button className="w-full bg-white border border-[#2380D9]  cursor-pointer text-[#2380D9] py-2 px-4 rounded-lg font-medium hover:bg-[#2380D9] hover:text-white transition-colors duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchcar;
