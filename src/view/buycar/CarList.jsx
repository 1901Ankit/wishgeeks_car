/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CarList({
  cars,
  currentPage,
  totalPages,
  setCurrentPage,
  clearFilters,
}) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.1 }}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="max-w-sm h-full flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={car.images?.exterior?.frontLeft}
                alt={car.brand}
                className="w-full h-44 object-cover bg-gray-50"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-gray-900 leading-tight max-w-[60%] truncate">
                  {car.registrationYear} {car.brand}
                </h3>
                <div className="text-right">
                  <p className="text-xs text-gray-400 line-through">
                    {car.priceINR}
                  </p>
                  <p className="text-base font-bold text-gray-800">
                    {car.priceINR}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex justify-between mb-3">
                <span>{car.model}</span>
                <span className="text-xs">EMI ₹59,336/m*</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {car.mileageKM}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {car.fuelType}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {car.transmission}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {car.owner?.city}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">
                {car.verified
                  ? "Wis Geeks Techserve Car Hub, Trillium Avenue, Gurugram"
                  : car.owner.address}{" "}
                {car.owner.city} {car.owner.state} {car.owner.zipCode}{" "}
                {car.owner.country}
              </p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">⭑ MAX</span>
                High quality, luxury cars
              </div>
              <Link
                to="/cardetails"
                className="text-blue-600 hover:underline text-xs font-semibold"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No cars found</p>
          <button
            onClick={clearFilters}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-full disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-full disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
