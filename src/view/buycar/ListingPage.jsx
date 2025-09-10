/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useVehicleStore from "../../Store/useVehicleStore";
import CarList from "./CarList";
import CarFilters from "./CarFilters";

export default function ListingPage() {
  const { vehicles, fetchVehicles, pagination } = useVehicleStore();

  const [filters, setFilters] = useState({
    brand: "",
    year: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    transmission: "",
    fuel: "",
    bodyType: "",
    seats: "",
    location: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [limit, setLimit] = useState(8); // ✅ single source of truth for limit

  // ✅ Fetch vehicles when component loads
  useEffect(() => {
    fetchVehicles({ page: 1, limit, ...filters, search: searchTerm });
  }, [fetchVehicles, limit ,filters,searchTerm]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Apply filters → refetch API with page=1
  const handleApplyFilters = () => {
    fetchVehicles({ page: 1, limit, ...filters, search: searchTerm });
    setShowMobileFilters(false);
  };

  // ✅ Clear filters → refetch API
  const clearFilters = () => {
    const reset = {
      brand: "",
      year: "",
      model: "",
      minPrice: "",
      maxPrice: "",
      transmission: "",
      fuel: "",
      bodyType: "",
      seats: "",
      location: "",
    };
    setFilters(reset);
    setSearchTerm("");
    fetchVehicles({ page: 1, limit, ...reset });
  };

  // ✅ Page change handler
  const handlePageChange = (page) => {
    fetchVehicles({ page, limit, ...filters, search: searchTerm });
  };

  return (
    <div className="container-fluid px-2 py-6 flex flex-col md:flex-row gap-6 flex-grow">
      {/* Sidebar Filters */}
      <div className="hidden md:block w-1/4 lg:w-1/5 border-r border-gray-300 pr-4 overflow-y-auto sticky  top-0 h-full">
        <CarFilters
          filters={filters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleFilterChange={handleFilterChange}
          handleApplyFilters={handleApplyFilters}
          clearFilters={clearFilters}
        />

      
       
      </div>

      {/* Car Listings with API pagination */}
      <CarList
        cars={vehicles}
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        setCurrentPage={handlePageChange}
        clearFilters={clearFilters}
      />
    </div>
  );
}
