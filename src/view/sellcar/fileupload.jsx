import React, { useEffect, useRef, useState } from "react";

import frontLeft from "../../assets/exterior/frontleft.webp";
import frontView from "../../assets/exterior/frontview.webp";
import frontRight from "../../assets/exterior/frontright.webp";
import rearRight from "../../assets/exterior/backright.webp";
import rearView from "../../assets/exterior/backview.webp";
import rearLeft from "../../assets/exterior/backleft.webp";
import headlamp from "../../assets/exterior/frontlight.webp";
import engine from "../../assets/exterior/engine.webp";
import driversdoor from "../../assets/interior/driversdoor.webp";
import driverSeat from "../../assets/interior/driverseat.webp";
import codriversSeat from "../../assets/interior/codriverseat.webp";
import instrumentPanel from "../../assets/interior/instrumentpanel.webp";
import dashboard from "../../assets/interior/dashboard.webp";
import rearPanel from "../../assets/interior/backcenterpanel.webp";
import rearseats from "../../assets/interior/backseats.webp";
import headlining from "../../assets/interior/ceiling.webp";
import tyres from "../../assets/wheel/wheel.webp";
import frontleftTyre from "../../assets/wheel/pneu.webp";
import Stepper from "./steper";
import { Link } from "react-router-dom";

const defaultImages = {
  frontLeft,
  frontView,
  frontRight,
  rearRight,
  rearView,
  rearLeft,
  headlamp,
  engine,
  driversdoor,
  driverSeat,
  codriversSeat,
  instrumentPanel,
  dashboard,
  rearPanel,
  rearseats,
  headlining,
  tyres,
  frontleftTyre,
};

const Photo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const inputRefs = useRef({});
  const [imagePreviews, setImagePreviews] = useState(defaultImages);
  const [modalImage, setModalImage] = useState(null);

  const handleImageUpload = (id) => {
    const file = inputRefs.current[id]?.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreviews((prev) => ({ ...prev, [id]: url }));
    }
  };

  const renderImageGrid = (fields) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
      {fields.map(({ label, key }) => (
        <div
          key={key}
          className="flex flex-col items-center space-y-2 rounded-xl p-4 "
          style={{
            boxShadow: `
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04)
    `,
          }}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={(el) => (inputRefs.current[key] = el)}
            onChange={() => handleImageUpload(key)}
          />
          <div
            onClick={() => inputRefs.current[key]?.click()}
            className="w-full  bg-gray-100 rounded-md overflow-hidden cursor-pointer shadow group-hover:scale-[1.03] transition-all duration-300"
          >
            <img
              src={imagePreviews[key]}
              alt={label}
              onDoubleClick={() => setModalImage(imagePreviews[key])}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between gap-4 w-full mt-2">
            <button
              type="button"
              onClick={() => inputRefs.current[key]?.click()}
              className="flex-1  py-2 border border-[#2380D9] text-[#2380D9] rounded-md font-medium
               hover:bg-[#2380D9] hover:text-white transition-colors duration-200  cursor-pointer"
            >
              {label}
            </button>

            <button
              type="button"
              onClick={() => setModalImage(imagePreviews[key])}
              className="flex-1  py-2 bg-[#2380D9] text-white rounded-md font-medium  hover:bg-[#2380D9] transition-colors duration-200  cursor-pointer"
            >
              Preview
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Stepper />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* EXTERIOR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Exterior
          </h2>
          {renderImageGrid([
            { label: "Front Left", key: "frontLeft" },
            { label: "Front View", key: "frontView" },
            { label: "Front Right", key: "frontRight" },
            { label: "Rear Right", key: "rearRight" },
            { label: "Rear View", key: "rearView" },
            { label: "Rear Left", key: "rearLeft" },
            { label: "Headlamp", key: "headlamp" },
            { label: "Engine", key: "engine" },
          ])}
        </section>

        {/* INTERIOR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Interior
          </h2>
          {renderImageGrid([
            { label: "Driver's Door", key: "driversdoor" },
            { label: "Driver's Seat", key: "driverSeat" },
            { label: "Co-driver's Seat", key: "codriversSeat" },
            { label: "Instrument Panel", key: "instrumentPanel" },
            { label: "Dashboard", key: "dashboard" },
            { label: "Rear Panel", key: "rearPanel" },
            { label: "Rear Seats", key: "rearseats" },
            { label: "Headlining", key: "headlining" },
          ])}
        </section>

        {/* TYRES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Wheels & Tyres
          </h2>
          {renderImageGrid([
            { label: "Tyres", key: "tyres" },
            { label: "Front Left Tyre", key: "frontleftTyre" },
          ])}
        </section>

        {/* Submit */}
        <div className="text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow transition cursor-pointer">
            Submit
          </button>
        </div>

        {/* Modal Preview */}
        {modalImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-lg relative overflow-y-auto">
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-1 text-black text-3xl font-semibold cursor-pointer"
              >
                &times;
              </button>
              <img
                src={modalImage}
                alt="Preview"
                className="w-full h-auto rounded-md"
              />{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Photo;
