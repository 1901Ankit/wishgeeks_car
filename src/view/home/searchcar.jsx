import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useVehicleStore from "../../Store/useVehicleStore";

const Searchcar = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { vehicles, fetchVehicles, loading } = useVehicleStore();

  const tabs = ["All", "SUV", "Hatchback", "Sedan", "MUV", "Luxury"];

  useEffect(() => {
    // fetch vehicles whenever tab changes
    fetchVehicles({ category: activeTab });
  }, [activeTab, fetchVehicles]);

  const filteredVehicles =
    activeTab === "All"
      ? vehicles
      : vehicles.filter((car) => car.vehicleType === activeTab);

  return (
    <div className="bg-gray-50  py-5">
      <div className=" mx-auto px-4">
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
          {loading ? (
            <p className="text-center text-gray-500">Loading cars...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((car) => (
                  <div
                    key={car._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="relative h-auto overflow-hidden">
                      <img
                        src={car.images?.exterior.frontLeft}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Car Details */}
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800">
                        {car.brand}
                      </h3>
                      <p className="text-gray-600 font-semibold mb-4">
                        ₹ {car.priceINR}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 mb-3">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.mileageKM} km
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.fuelType}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.transmission}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {car.owner.address}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <Link to="/buy-cars">
                        <button className="w-full bg-white border border-[#2380D9] cursor-pointer text-[#2380D9] py-2 px-4 rounded-lg font-medium hover:bg-[#2380D9] hover:text-white transition-colors duration-200">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-4 text-center text-gray-500">
                  No cars found in this category.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchcar;
