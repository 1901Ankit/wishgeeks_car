import React from "react";

const Detailsbox = () => {
  const car = {
    details: {
      make: "Hyundai Creta",
      model: "V8 pro",
      color: "Black",
      interior: "Alcantara",
      body: "Estate Car",
      doors: 4,
      seats: 5,
      vin: "MATBT123XPTC12345",
    },
    engine: {
      fuel: "LPG",
      transmission: "Automatic",
      driveType: "4x2",
      power: "250 Kw",
    },
    condition: {
      mileage: "20000",
      Registration: "2010",
    },
  };
  return (
    <>
      {/* Detail Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-bold mb-4">Vehicle Detail</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {Object.entries(car.details).map(([label, value]) => (
              <li key={label} className="flex justify-between border-b pb-1">
                <span className="capitalize">{label.replace("_", " ")}</span>
                <span className="font-semibold">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          {/* Engine Block */}
          <div className="bg-white rounded-2xl p-6 shadow h-fit">
            <h3 className="text-lg font-bold mb-4">Engine</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {Object.entries(car.engine).map(([label, value]) => (
                <li key={label} className="flex justify-between border-b pb-1">
                  <span className="capitalize">{label.replace("_", " ")}</span>
                  <span className="font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Condition Block */}
          <div className="bg-white rounded-2xl p-6 shadow h-fit">
            <h3 className="text-lg font-bold mb-4">Vehicle Condition</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {Object.entries(car.condition).map(([label, value]) => (
                <li key={label} className="flex justify-between border-b pb-1">
                  <span className="capitalize">{label.replace("_", " ")}</span>
                  <span className="font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsbox;
