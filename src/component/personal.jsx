import React, { useEffect, useState } from "react";
import Stepper from "../view/sellcar/steper";
import { Link } from "react-router-dom";

const PersonalInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Stepper />
      <div className=" flex flex-col sm:flex-row bg-white">
        <div className="min-w-full rounded-lg overflow-hidden px-4  py-4 mt-5">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputField
              label="Contact Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <InputField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <InputField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
            <InputField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />

            <div className="col-span-1 md:col-span-3 flex gap-4 mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-transparent text-[#2380D9] border border-[#2380D9] rounded-md font-medium hover:bg-[#2380D9] hover:text-white transition  cursor-pointer"
              >
                Cancel
              </button>

              <Link to="/fileupload">
                <button
                  type="submit"
                  className="px-6 py-2  cursor-pointer bg-[#2380D9] text-white rounded-md font-medium "
                >
                  CONTINUE
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="text-base font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className=" mt-1 block w-full border border-blue-300 rounded-md py-2 px-3 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default PersonalInformation;
