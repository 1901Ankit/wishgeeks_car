import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import bmw from "../../assets/bmw.jpg";
import black from "../../assets/black.jpg";
import finace from "../../assets/finace.webp";
import insurance from "../../assets/insurance.jpg";
const allCars = [
  {
    id: 1,
    name: "Swift",
    brand: "Maruti",
    model: "Swift",
    year: 2023,
    price: "₹7,0000",
    priceValue: 7000,
    originalPrice: "₹8,000",
    kmDriven: "12,000 km",
    fuelType: "Petrol",
    fuel: "Petrol",
    transmission: "Manual",
    interiorMaterial: "Fabric",
    bodyType: "Hatchback",
    seats: 5,
    is4x4: false,
    location: "Delhi",
    image: bmw,
    verified: true,
  },
  {
    id: 2,
    name: "Creta",
    brand: "Hyundai",
    model: "Creta",
    year: 2022,
    price: "₹15,0000",
    priceValue: 15000,
    originalPrice: "₹16,000",
    kmDriven: "20,000 km",
    fuelType: "Diesel",
    fuel: "Diesel",
    transmission: "Automatic",
    interiorMaterial: "Leather",
    bodyType: "SUV",
    seats: 5,
    is4x4: true,
    location: "Mumbai",
    image:
          "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 3,
    name: "Swift",
    brand: "Maruti",
    model: "Swift",
    year: 2023,
    price: "₹7,0000",
    priceValue: 7000,
    originalPrice: "₹8,000",
    kmDriven: "12,000 km",
    fuelType: "Petrol",
    fuel: "Petrol",
    transmission: "Manual",
    interiorMaterial: "Fabric",
    bodyType: "Hatchback",
    seats: 5,
    is4x4: false,
    location: "Delhi",
    image: black,
    verified: true,
  },
  {
    id: 4,
    name: "Creta",
    brand: "Hyundai",
    model: "Creta",
    year: 2022,
    price: "₹15,0000",
    priceValue: 15000,
    originalPrice: "₹16,000",
    kmDriven: "20,000 km",
    fuelType: "Diesel",
    fuel: "Diesel",
    transmission: "Automatic",
    interiorMaterial: "Leather",
    bodyType: "SUV",
    seats: 5,
    is4x4: true,
    location: "Mumbai",
    image: finace,
    verified: true,
  },
  {
    id: 5,
    name: "Swift",
    brand: "Maruti",
    model: "Swift",
    year: 2023,
    price: "₹7,0000",
    priceValue: 7000,
    originalPrice: "₹8,000",
    kmDriven: "12,000 km",
    fuelType: "Petrol",
    fuel: "Petrol",
    transmission: "Manual",
    interiorMaterial: "Fabric",
    bodyType: "Hatchback",
    seats: 5,
    is4x4: false,
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 6,
    name: "Creta",
    brand: "Hyundai",
    model: "Creta",
    year: 2022,
     price: "₹15,0000",
    priceValue: 15000,
    originalPrice: "₹16,000",
    kmDriven: "20,000 km",
    fuelType: "Diesel",
    fuel: "Diesel",
    transmission: "Automatic",
    interiorMaterial: "Leather",
    bodyType: "SUV",
    seats: 5,
    is4x4: true,
    location: "Mumbai",
    image: insurance,
    verified: true,
  },
  {
    id: 7,
    name: "Swift",
    brand: "Maruti",
    model: "Swift",
    year: 2023,
    price: "₹7,0000",
    priceValue: 7000,
    originalPrice: "₹8,000",
    kmDriven: "12,000 km",
    fuelType: "Petrol",
    fuel: "Petrol",
    transmission: "Manual",
    interiorMaterial: "Fabric",
    bodyType: "Hatchback",
    seats: 5,
    is4x4: false,
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 8,
    name: "Creta",
    brand: "Hyundai",
    model: "Creta",
    year: 2022,
     price: "₹15,0000",
    priceValue: 15000,
    originalPrice: "₹16,000",
    kmDriven: "20,000 km",
    fuelType: "Diesel",
    fuel: "Diesel",
    transmission: "Automatic",
    interiorMaterial: "Leather",
    bodyType: "SUV",
    seats: 5,
    is4x4: true,
    location: "Mumbai",
    image:
          "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 9,
    name: "Swift",
    brand: "Maruti",
    model: "Swift",
    year: 2023,
    price: "₹7,0000",
    priceValue: 7000,
    originalPrice: "₹8,000",
    kmDriven: "12,000 km",
    fuelType: "Petrol",
    fuel: "Petrol",
    transmission: "Manual",
    interiorMaterial: "Fabric",
    bodyType: "Hatchback",
    seats: 5,
    is4x4: false,
    location: "Delhi",
    image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    verified: true,
  },
];

const checkYear = (year, filter) => {
  if (filter === "2024") return year === 2024;
  if (filter === "2023") return year === 2023;
  if (filter === "2020 - 2022") return year >= 2020 && year <= 2022;
  return true;
};

export default function CarListingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    make: "",
    period: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    transmission: "",
    fuel: "",
    interior: "",
    bodyType: "",
    is4x4: false,
    seats: "",
  });

  const [filteredCars, setFilteredCars] = useState(allCars);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    const result = allCars.filter((car) => {
      const matchesSearch =
        searchTerm === "" ||
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        matchesSearch &&
        (!filters.make || car.brand === filters.make) &&
        (!filters.period || checkYear(car.year, filters.period)) &&
        (!filters.model ||
          car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
        (!filters.minPrice || car.priceValue >= Number(filters.minPrice)) &&
        (!filters.maxPrice || car.priceValue <= Number(filters.maxPrice)) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.fuel || car.fuelType === filters.fuel) &&
        (!filters.interior || car.interiorMaterial === filters.interior) &&
        (!filters.bodyType || car.bodyType === filters.bodyType) &&
        (!filters.seats || car.seats === Number(filters.seats)) &&
        (!filters.is4x4 || car.is4x4 === true)
      );
    });
    setFilteredCars(result);
    setShowMobileFilters(false);
  };

  const clearFilters = () => {
    setFilters({
      make: "",
      period: "",
      model: "",
      minPrice: "",
      maxPrice: "",
      transmission: "",
      fuel: "",
      interior: "",
      bodyType: "",
      is4x4: false,
      seats: "",
    });
    setSearchTerm("");
    setFilteredCars(allCars);
    setShowMobileFilters(false);
  };

  const FilterContent = ({ isMobile = false }) => (
    <div
      className={`space-y-6 text-sm px-1 text-gray-700 ₹{
        isMobile ? "mt-4" : "mt-3"
      }`}
    >
      {/* Filter Fields */}
      {[
        {
          label: "Make",
          key: "make",
          options: ["Maruti", "Hyundai", "Honda"],
        },
        {
          label: "Period",
          key: "period",
          options: ["2024", "2023", "2020 - 2022"],
        },
        {
          label: "Transmission",
          key: "transmission",
          options: ["Automatic", "Manual"],
        },
        {
          label: "Fuel Type",
          key: "fuel",
          options: ["Petrol", "Diesel", "Electric", "Hybrid"],
        },
        {
          label: "Interior Material",
          key: "interior",
          options: ["Leather", "Fabric", "Vinyl"],
        },
        {
          label: "Body Type",
          key: "bodyType",
          options: ["SUV", "Sedan", "Hatchback", "Coupe", "Convertible"],
        },
        { label: "Seats", key: "seats", options: [2, 4, 5, 6, 7, 8] },
      ].map(({ label, key, options }) => (
        <div key={key}>
          <label className="block text-base font-semibold mb-1">{label}</label>
          <select
            className="w-full p-2 border rounded  "
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

      {/* Model */}
      <div>
        <label className="block text-base font-semibold mb-2">Model</label>
        <input
          type="text"
          value={filters.model}
          onChange={(e) => handleFilterChange("model", e.target.value)}
          placeholder="e.g. Swift"
          className="w-full p-2 border rounded "
        />
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-base font-semibold mb-1">
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            placeholder="Min"
            className="w-1/2 p-2 border rounded "
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            placeholder="Max"
            className="w-1/2 p-2 border rounded "
          />
        </div>
      </div>

      {/* Apply Buttons */}
      <div className={`₹{isMobile ? "flex gap-3" : ""}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleApplyFilters}
          className={`₹{
            isMobile ? "flex-1" : "w-full"
          } bg-[#3E2AD9] text-white py-3 px-4 rounded-lg  cursor-pointer font-semibold hover:bg-[#2b1bbd] transition-all duration-200`}
        >
          Apply Filters
        </motion.button>
        {isMobile && (
          <button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={clearFilters}
            className="flex-1 bg-gray-500 text-white py-3 px-4   cursor-pointer rounded-lg
             font-semibold "
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="container-fluid px-2 py-6 flex flex-col md:flex-row gap-6 flex-grow">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between w-full mt-10 px-4 gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg "
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors whitespace-nowrap"
        >
          <FaFilter />
          Filters
        </motion.button>
      </div>

      {/* Mobile Filters Modal with Framer Motion */}
      <AnimatePresence>
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setShowMobileFilters(false)}
            />

            {/* Modal Content - Sliding from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors  cursor-pointer" 
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Filter Content */}
              <div className="p-6 overflow-y-auto h-full pb-32">
                <FilterContent isMobile={true} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop Search */}
      <div className="hidden md:block w-1/4 lg:w-1/5 border-r border-gray-300 pr-4 overflow-y-auto sticky top-0 h-full">
        <div className="p-0">
          <div className="p-0 bg-primary-600 flex items-center justify-between">
            <h2 className="text-xl font-bold gap-2">Car Filters</h2>
            <span className="text-[18px] text-blue-600">
              <FaFilter />
            </span>
          </div>
          <div className="border-b border-gray-300 w-full mt-3" />

          <FilterContent />

          <button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={clearFilters}
            className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg  cursor-pointer font-semibold
             "
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Car Listings */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCars.map((car, index) => (
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
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={car.image}
                  alt={car.name}
                  className="w-full h-44 object-cover bg-gray-50"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-semibold text-gray-900 leading-tight max-w-[60%] truncate">
                    {car.year} {car.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 line-through">
                      {car.originalPrice}
                    </p>
                    <p className="text-base font-bold text-gray-800">
                      {car.price}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex justify-between mb-3">
                  <span>{car.model}</span>
                  <span className="text-xs">EMI ₹59,336/m*</span>
                </div>
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
                <p className="text-xs text-gray-500 truncate">
                  {car.verified
                    ? "Wis Geeks Techserve Car Hub, Trillium Avenue, Gurugram"
                    : car.location}
                </p>
              </div>
              <div className="flex items-center justify-between bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">⭑ MAX</span>
                  High quality, luxury cars
                </div>
                <a
                  href="/car/:id"
                  className="text-blue-600 hover:underline text-xs font-semibold"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No cars found matching your criteria
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
