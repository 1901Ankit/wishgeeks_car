/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";

export default function CarFilters({
  filters,
  searchTerm,
  setSearchTerm,
  handleFilterChange,
  handleApplyFilters,
  clearFilters,
  isMobile = false,
}) {
  return (
    <div
      className={`space-y-6 text-sm px-1 text-gray-700 ${
        isMobile ? "mt-4" : "mt-3"
      }`}
    >
      {/* Header */}
      <div className="p-0 bg-primary-600 flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold gap-2">Car Filters</h2>
        <span className="text-[18px] text-blue-600">
          <FaFilter />
        </span>
      </div>

      {/* Search Input (only for mobile) */}
      {isMobile && (
        <div className="relative flex-1 mb-4">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
      )}

      {/* Filter Dropdowns */}
      {[
        {
          label: "Make",
          key: "brand",
          options: [
            "Maruti",
            "Hyundai",
            "Kia",
            "Toyota",
            "Honda",
            "Mahindra",
            "Nissan",
            "Skoda",
            "Jeep",
          ],
        },
        { label: "Year", key: "year", options: ["2023", "2022", "2021", "2020", "2019"] },
        { label: "Transmission", key: "transmission", options: ["Manual", "Automatic"] },
        { label: "Fuel Type", key: "fuel", options: ["Petrol", "Diesel"] },
        { label: "Body Type", key: "bodyType", options: ["Hatchback", "SUV", "Sedan", "MPV"] },
        { label: "Seats", key: "seats", options: [4, 5, 7] },
        {
          label: "Location",
          key: "location",
          options: [
            "Delhi",
            "Mumbai",
            "Chandigarh",
            "Pune",
            "Jaipur",
            "Lucknow",
            "Hyderabad",
            "Goa",
            "Bengaluru",
            "Ahmedabad",
            "Chennai",
            "Kolkata",
            "Gurugram",
            "Bhopal",
          ],
        },
      ].map(({ label, key, options }) => (
        <div key={key}>
          <label className="block text-base font-semibold mb-1">{label}</label>
          <select
            className="w-full p-2 border rounded"
            value={filters[key]}
            onChange={(e) => handleFilterChange(key, e.target.value)}
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* Model Input */}
      <div>
        <label className="block text-base font-semibold mb-2">Model</label>
        <input
          type="text"
          value={filters.model}
          onChange={(e) => handleFilterChange("model", e.target.value)}
          placeholder="e.g. Swift"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-base font-semibold mb-1">Price Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            placeholder="Min"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            placeholder="Max"
            className="w-1/2 p-2 border rounded"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleApplyFilters}
          className="flex-1 bg-[#2380D9] text-white py-2 px-4 rounded-lg font-semibold"
        >
          Apply Filters
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={clearFilters}
          className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Clear All
        </motion.button>
      </div>
    </div>
  );
}
