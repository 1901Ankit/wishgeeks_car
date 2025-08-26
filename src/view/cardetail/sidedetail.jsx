import { Calendar, Fuel, Gauge, Settings } from "lucide-react";
import React from "react";

const Sidedetail = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="flex flex-col gap-4">
        <div className="max-w-2xl mx-auto p-4 bg-white  rounded-xl space-y-4 h-fit">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Hyundai Creta</h1>
            <p className="text-xl text-gray-800 font-semibold mt-1">
              ₹20000.00
            </p>
          </div>

          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex justify-between border-b pb-1">
              <span className="capitalize">Monthly installment</span>
              <span className="font-semibold">Not Included</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span className="capitalize">Extended Warranty</span>
              <span className="font-semibold">Not Included</span>
            </li>
          </ul>

          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex justify-between border-b pb-1">
              <span className="flex items-center gap-2 capitalize">
                <Gauge className="w-4 h-4" />
                Mileage
              </span>
              <span className="font-semibold">20000</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span className="flex items-center gap-2 capitalize">
                <Calendar className="w-4 h-4" />
                First Registration
              </span>
              <span className="font-semibold">2010</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span className="flex items-center gap-2 capitalize">
                <Settings className="w-4 h-4" />
                Transmission
              </span>
              <span className="font-semibold">Automatic</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span className="flex items-center gap-2 capitalize">
                <Gauge className="w-4 h-4" />
                Power
              </span>
              <span className="font-semibold">290 kw</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span className="flex items-center gap-2 capitalize">
                <Fuel className="w-4 h-4" />
                Fuel
              </span>
              <span className="font-semibold">LPG</span>
            </li>
          </ul>

          <div>
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "220V Socket",
                "Air Suspension",
                "Gear Shift Lock",
                "Electric Adjustable Front Seats",
              ].map((feature) => (
                <span
                  key={feature}
                  className="bg-gray-200 text-sm font-medium px-4 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Test Drive Button */}
          <button className="w-full bg-[#2380D9] text-white py-3 rounded hover:opacity-90 transition  cursor-pointer">
            BOOK YOUR TEST DRIVE
          </button>
        </div>

        {/* Sidebar Contact Info Block */}
        <div className="w-full mx-auto p-4 bg-white  rounded-xl space-y-4 h-fit">
          <div className="space-y-3.5 text-sm text-gray-800">
            {/* CarAudit */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-bold">
                CarAudit<sup>™</sup>
              </span>
              <span className="font-medium text-gray-700">Not Included</span>
            </div>

            {/* Divider with title */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
              <div className="flex-grow border-t border-gray-300" />
              <span className="px-2">ADDITIONAL SERVICES</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Home Delivery */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-bold">Home Delivery</span>
              <span className="font-medium text-gray-700">Not Included</span>
            </div>

            {/* Divider with title */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
              <div className="flex-grow border-t border-gray-300" />
              <span className="px-2">OPTIONAL SERVICES</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Extended Warranty */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Extended Warranty</span>
              <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded">
                FREE
              </span>
            </div>

            <p className="text-[14px] text-gray-700">
              When ordering a car, you can choose additional ancillary services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidedetail;
