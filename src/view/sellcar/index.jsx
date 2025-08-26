import React, { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Stepper from "./steper";
import { Link } from "react-router-dom";

const SellCars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Separate state for each form field
  const [formData, setFormData] = useState({
    vin: "",
    make: "",
    model: "",
    registrationYear: "",
    trimLevel: "",
    transmission: "",
    fuelType: "",
    color: "",
    vehicleType: "",
    doors: "",
    driveType: "",
    enginePower: "",
    engineDisplacement: "",
    seats: "",
    mileage: "",
    ownership: "",
    interiorMaterial: "",
    vatDeduction: "",
    originCountry: "",
    price: "",
  });

  const [focusedField, setFocusedField] = useState("");

  const transmissionOptions = ["AUTOMATIC", "SEMI-AUTOMATIC", "MANUAL"];
  const doorOptions = ["2", "3", "4", "5"];
  const seatOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const yesNoOptions = ["YES", "NO"];

  const countryOptions = [
    "Germany",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Japan",
    "South Korea",
    "United States",
    "India",
    "China",
  ];

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFieldFocused = (field) => focusedField === field;
  const hasValue = (field) => formData[field] && formData[field] !== "";

  return (
    <>
      <Stepper />
      <div className="max-w-7xl mx-auto space-y-10 px-4 py-6 text-sm">
        <div className="mb-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Vehicle Specification
          </h2>

          <div className="flex">
            <div className="w-full sm:w-10/12">
              <p className="text-black font-medium text-sm md:text-base text-justify leading-relaxed">
                You only need to enter your car's VIN, and we'll immediately
                retrieve comprehensive details on it from the relevant
                authority. If any of the information in the authority database
                is outdated or inaccurate, you <span className="text-red-600 px-1">
                  may modify
                  </span> 
                   them.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 w-full" />
        {/* Step 1 - VIN */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              1
            </span>
            <label className="text-base font-semibold uppercase">
              Vehicle VIN
            </label>
            <span className="text-xs text-gray-500">
              (Vehicle Identification Number)
            </span>
          </div>

          <div className="relative mt-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Vehicle VIN"
                value={formData.vin}
                onChange={(e) => updateFormData("vin", e.target.value)}
                className="flex-1 border rounded-md p-4 text-lg"
              />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Enter a VIN (Vehicle Identification Number) in English alphanumeric
            format, typically 17 characters, including both letters and numbers.
          </p>
        </div>
        {/* Step 2 - Brand and Model */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              2
            </span>
            <label className="text-base font-semibold uppercase">
              Brand and Model
            </label>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="w-full  space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("make") || hasValue("make")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Make
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("make")}
                  onBlur={() => setFocusedField("")}
                  value={formData.make}
                  onChange={(e) => updateFormData("make", e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Audi">Audi</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Select the Brand of the Car
              </p>
            </div>

            <div className="w-full  space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("model") || hasValue("model")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Model
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("model")}
                  onBlur={() => setFocusedField("")}
                  value={formData.model}
                  onChange={(e) => updateFormData("model", e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  <option value="Elantra">Elantra</option>
                  <option value="Sonata">Sonata</option>
                  <option value="i30">i30</option>
                  <option value="Camry">Camry</option>
                  <option value="Civic">Civic</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Select the Model of the Car
              </p>
            </div>
          </div>
        </div>
        {/* Step 3 - Registration Year and Trim Level */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              3
            </span>
            <label className="text-base font-semibold uppercase">
              Registration Year and Trim Level
            </label>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("registrationYear") ||
                    hasValue("registrationYear")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Year of 1st Registration
                </label>

                <input
                  type="number"
                  min="1900"
                  max="2025"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("registrationYear")}
                  onBlur={() => setFocusedField("")}
                  value={formData.registrationYear}
                  onChange={(e) =>
                    updateFormData("registrationYear", e.target.value)
                  }
                />
              </div>
              <p className="text-sm text-gray-500">
                Select the manufacturing year of the Car
              </p>
            </div>

            <div className="w-full  space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("trimLevel") || hasValue("trimLevel")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Trim Level
                </label>

                <input
                  type="text"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("trimLevel")}
                  onBlur={() => setFocusedField("")}
                  value={formData.trimLevel}
                  onChange={(e) => updateFormData("trimLevel", e.target.value)}
                />
              </div>
              <p className="text-sm text-gray-500">
                Trim Level: Specific configuration or package of features.
              </p>
            </div>
          </div>
        </div>
        {/* Step 4 - Transmission */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              4
            </span>
            <label className="text-base font-semibold uppercase">
              TRANSMISSION
            </label>
          </div>
          <div className="flex gap-2  mt-4">
            {transmissionOptions.map((type) => (
              <button
                key={type}
                onClick={() => updateFormData("transmission", type)}
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all  cursor-pointer
              ${
                formData.transmission === type
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }
            `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Step 5 - Fuel */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              5
            </span>
            <label className="text-base font-semibold uppercase">Fuel</label>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("fuelType") || hasValue("fuelType")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Select Fuel Type
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("fuelType")}
                  onBlur={() => setFocusedField("")}
                  value={formData.fuelType}
                  onChange={(e) => updateFormData("fuelType", e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  <option value="CNG">CNG</option>
                  <option value="LPG">LPG</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Select Fuel Type of the Car
              </p>
            </div>

            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("color") || hasValue("color")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Enter Color of the Car
                </label>

                <input
                  type="text"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("color")}
                  onBlur={() => setFocusedField("")}
                  value={formData.color}
                  onChange={(e) => updateFormData("color", e.target.value)}
                />
              </div>
              <p className="text-sm text-gray-500">Enter Color of the Car</p>
            </div>
          </div>
        </div>
        {/* Step 6 - Vehicle Type */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              6
            </span>
            <label className="text-base font-semibold uppercase">
              Vehicle Type
            </label>
          </div>
          <div className="relative mt-4">
            <select
              className="w-full appearance-none border rounded-md px-3 py-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.vehicleType}
              onChange={(e) => updateFormData("vehicleType", e.target.value)}
            >
              <option value="" disabled hidden>
                Select Vehicle Type
              </option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>
          <p className="text-sm text-gray-600 mt-1">Select Body Type</p>
        </div>
        {/* Step 7 - Doors */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              7
            </span>
            <label className="text-base font-semibold uppercase">Doors</label>
          </div>
          <div className="flex gap-2 mt-4">
            {doorOptions.map((type) => (
              <button
                key={type}
                onClick={() => updateFormData("doors", type)}
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all  cursor-pointer
              ${
                formData.doors === type
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }
            `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Step 8 - Drive Type */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              8
            </span>
            <label className="text-base font-semibold uppercase">
              Drive Type 4x4
            </label>
          </div>
          <div className="flex gap-2 mt-4">
            {yesNoOptions.map((type) => (
              <button
                key={type}
                onClick={() => updateFormData("driveType", type)}
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all  cursor-pointer
              ${
                formData.driveType === type
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }
            `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Step 9 - Power and Engine */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              9
            </span>
            <label className="text-base font-semibold uppercase">
              Power and Engine displacement
            </label>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("enginePower") || hasValue("enginePower")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Engine Power (in KW)
                </label>

                <input
                  type="number"
                  min="0"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("enginePower")}
                  onBlur={() => setFocusedField("")}
                  value={formData.enginePower}
                  onChange={(e) =>
                    updateFormData("enginePower", e.target.value)
                  }
                />
              </div>
              <p className="text-sm text-gray-500">
                Enter Engine Power (in Kilo Watts)
              </p>
            </div>

            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("engineDisplacement") ||
                    hasValue("engineDisplacement")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Engine displacement (L)
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("engineDisplacement")}
                  onBlur={() => setFocusedField("")}
                  value={formData.engineDisplacement}
                  onChange={(e) =>
                    updateFormData("engineDisplacement", e.target.value)
                  }
                />
              </div>
              <p className="text-sm text-gray-500">
                Engine displacement (L): The Total volume of all the cylinders
                in an engine
              </p>
            </div>
          </div>
        </div>
        {/* Step 10 - Seats */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              10
            </span>
            <label className="text-base font-semibold uppercase">Seats</label>
          </div>
          <div className="flex gap-2 mt-4">
            {seatOptions.map((type) => (
              <button
                key={type}
                onClick={() => updateFormData("seats", type)}
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all  cursor-pointer
              ${
                formData.seats === type
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }
            `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Step 11 - Mileage and Ownership */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              11
            </span>
            <label className="text-base font-semibold uppercase">
              Mileage and Ownership
            </label>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("mileage") || hasValue("mileage")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Mileage (in KM)
                </label>

                <input
                  type="number"
                  min="0"
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("mileage")}
                  onBlur={() => setFocusedField("")}
                  value={formData.mileage}
                  onChange={(e) => updateFormData("mileage", e.target.value)}
                />
              </div>
              <p className="text-sm text-gray-500">
                Mileage: The Total distance that a vehicle has traveled
              </p>
            </div>

            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("ownership") || hasValue("ownership")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Select Ownership of Car
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("ownership")}
                  onBlur={() => setFocusedField("")}
                  value={formData.ownership}
                  onChange={(e) => updateFormData("ownership", e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  <option value="1st">1st Owner</option>
                  <option value="2nd">2nd Owner</option>
                  <option value="3rd">3rd Owner</option>
                  <option value="4th">4th Owner</option>
                  <option value="5th">5th Owner</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Ownership: Please specify your current ownership status for the
                car.
              </p>
            </div>
          </div>
        </div>
        {/* Step 12 - Interior Material */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              12
            </span>
            <label className="text-base font-semibold uppercase">
              Interior Material
            </label>
          </div>

          <div className="mt-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("interiorMaterial") ||
                    hasValue("interiorMaterial")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Select Interior Material
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("interiorMaterial")}
                  onBlur={() => setFocusedField("")}
                  value={formData.interiorMaterial}
                  onChange={(e) =>
                    updateFormData("interiorMaterial", e.target.value)
                  }
                >
                  <option value="" disabled hidden></option>
                  <option value="Alcantara">Alcantara</option>
                  <option value="Full">Full leather</option>
                  <option value="Part">Part leather</option>
                  <option value="Cloth">Cloth</option>
                  <option value="Velour">Velour</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Select Interior Material Of Car
              </p>
            </div>
          </div>
        </div>
        {/* Step 13 - VAT Deduction */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              13
            </span>
            <label className="text-base font-semibold uppercase">
              Possibility of VAT Deduction
            </label>
          </div>
          <div className="flex gap-2 mt-4">
            {yesNoOptions.map((type) => (
              <button
                key={type}
                onClick={() => updateFormData("vatDeduction", type)}
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all  cursor-pointer
              ${
                formData.vatDeduction === type
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
              }
            `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Step 14 - Country of Origin */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              14
            </span>
            <label className="text-base font-semibold uppercase">
              Country of origin of the car
            </label>
          </div>

          <div className="mt-4">
            <div className="w-full space-y-2">
              <div className="relative">
                <label
                  className={`absolute left-3 px-1 bg-white transition-all text-gray-500 ${
                    isFieldFocused("originCountry") || hasValue("originCountry")
                      ? "-top-2 text-xs"
                      : "top-3 text-sm"
                  }`}
                >
                  Choose a country
                </label>

                <select
                  className="w-full appearance-none border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setFocusedField("originCountry")}
                  onBlur={() => setFocusedField("")}
                  value={formData.originCountry}
                  onChange={(e) =>
                    updateFormData("originCountry", e.target.value)
                  }
                >
                  <option value="" disabled hidden></option>
                  {countryOptions.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Select Manufacturer Country of Car
              </p>
            </div>
          </div>
        </div>
        {/* Step 15 - Vehicle Type
         */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              15
            </span>
            <label className="text-base font-semibold uppercase">Price</label>
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Price (in Rupees)"
              value={formData.price}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
              className="w-full border rounded-md p-2 text-lg"
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Enter Desired Price of Car
          </p>
        </div>
        <div className="text-end">
          <Link to="/personal-information">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-semibold whitespace-nowrap cursor-pointer">
              CONTINUE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SellCars;
