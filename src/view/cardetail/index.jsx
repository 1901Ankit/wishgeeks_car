import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import Detailsbox from "./detailsbox";
import Sidedetail from "./sidedetail";
import bmw from "../../assets/bmw.jpg";
import black from "../../assets/black.jpg";
import finace from "../../assets/finace.webp";
import insurance from "../../assets/insurance.jpg";
const CarDetails = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const car = {
    id: 1,
    name: "Hyundai Creta",
    price: "₹20000.00",
    originalPrice: "₹22000.00",
    images: [bmw, black, finace, insurance, bmw, black, finace],
    mileage: "21000",
    fuel: "LPG",
    transmission: "Automatic",
    power: "250 Kw",
    location: "Germany",
    registrationYear: "2010",
    features: [
      "220V Socket",
      "Air Suspension",
      "Gear Shift Lock",
      "Electric Adjustable Front Seats",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="bg-white shadow-xl rounded-md overflow-hidden">
            <div className="relative">
              <img
                src={car.images[activeImageIndex]}
                alt={car.name}
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div className="flex overflow-x-auto space-x-2 items-center justify-between p-4">
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-24 h-16 object-cover rounded-lg cursor-pointer ${
                    activeImageIndex === index ? "ring-2 ring-blue-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <Detailsbox />
        </div>
        <Sidedetail />
      </div>
    </div>
  );
};

export default CarDetails;
