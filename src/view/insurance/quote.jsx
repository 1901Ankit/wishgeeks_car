"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  const [quoteData, setQuoteData] = useState({
    carBrand: "",
    carModel: "",
    carYear: "",
    registrationCity: "",
    previousInsurer: "",
    claimHistory: "",
  });

  return (
    <div className="container mx-auto md:py-8 px-6 ">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-10">
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Get Instant Quote
          </h2>

          <p className="text-black font-bold text-sm md:text-xl mt-2">
            Discover the most competitive car insurance plans tailored to your
            needs. Compare quotes from top insurers, explore policy features,
            and get covered in minutes — all in one place.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base mt-5">
            <li className="border border-blue-300 rounded-lg text-black font-semibold text-[15px] p-3 shadow-md shadow-blue-500/90">
              Instantly compare quotes from multiple leading car insurance
              providers, ensuring you get the best price without compromising on
              coverage.
            </li>
            <li className="border border-blue-300 rounded-lg text-black font-semibold text-[15px] p-3 shadow-md shadow-blue-500/90">
              Customize your policy by choosing add-ons like zero depreciation,
              roadside assistance, and engine protection to suit your unique
              driving needs.
            </li>
          </ul>

          <Link to="/about">
            <button
              type="button"
              className="rounded-lg mt-5 text-white font-semibold py-3 px-5 text-sm  cursor-pointer"
              style={{ background: "#2382dc" }}
            >
              READ MORE
            </button>
          </Link>
        </div>

        {/* Form */}
        <div className="w-full flex justify-center mb-6 md:mb-0">
          <form
            className="border-2 border-blue-300 shadow-lg shadow-blue-500 rounded-lg p-0 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Quote Data Submitted:", quoteData);
            }}
          >
            <h2 className="text-xl md:text-2xl text-center mb-2 font-bold text-white rounded-t-lg p-2 bg-[#0094D3]">
              Get the Best Car Insurance Quote Instantly!
            </h2>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-4  justify-between w-[100%] mx-auto">
                {[
                  {
                    name: "carBrand",
                    label: "Car Brand",
                    options: [
                      "",
                      "Maruti Suzuki",
                      "Hyundai",
                      "Tata",
                      "Honda",
                      "Mahindra",
                    ],
                  },
                  {
                    name: "carModel",
                    label: "Car Model",
                    options: ["", "Swift", "Creta", "Nexon", "City"],
                  },
                  {
                    name: "carYear",
                    label: "Year of Manufacture",
                    options: ["", "2023", "2022", "2021", "2020"],
                  },
                  {
                    name: "registrationCity",
                    label: "Registration City",
                    options: ["", "Mumbai", "Delhi", "Bangalore", "Pune"],
                  },
                  {
                    name: "previousInsurer",
                    label: "Previous Insurer",
                    options: [
                      "",
                      "New Car",
                      "ICICI Lombard",
                      "HDFC ERGO",
                      "Bajaj Allianz",
                    ],
                  },
                  {
                    name: "claimHistory",
                    label: "Claim History",
                    options: ["", "No Claims", "Yes, I have claims"],
                  },
                ].map((field) => (
                  <div key={field.name} className="relative w-full md:w-[46%] ">
                    <label className="block mb-1 font-medium text-gray-700">
                      {field.label}
                    </label>
                    <select
                      className="w-full text-gray-500 p-3 border-2 border-[#2380D9] rounded-lg focus:outline-none focus:border-[#2380D9] appearance-none"
                      value={quoteData[field.name]}
                      onChange={(e) =>
                        setQuoteData({
                          ...quoteData,
                          [field.name]: e.target.value,
                        })
                      }
                    >
                      {field.options.map((opt) => (
                        <option
                          key={opt}
                          value={opt.toLowerCase().replace(/ /g, "")}
                        >
                          {opt || `Select ${field.label}`}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button
                  type="submit"
                  className="bg-[#0094D3] text-white rounded-lg py-2 px-10 text-lg font-bold w-full mt-4 cursor-pointer"
                >
                  Get Quotes Now
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
