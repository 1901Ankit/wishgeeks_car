import React, { useState } from "react";
import { Share2, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Emi() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [months, setMonths] = useState(0);

  const calculateEmi = () => {
    const principal = price - downPayment;
    const annualRate = parseFloat(interestRate);
    const monthlyRate = annualRate / 12 / 100;
    const totalMonths = tenure * 12;

    if (principal > 0 && monthlyRate > 0 && totalMonths > 0) {
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
      const totalPayment = emi * totalMonths;
      const interest = totalPayment - principal;

      setEmi(emi.toFixed(2));
      setTotalInterest(interest.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));
      setLoanAmount(principal);
      setMonths(totalMonths);
    }
  };

  const resetForm = () => {
    setPrice("");
    setDownPayment("");
    setInterestRate("");
    setTenure("");
    setEmi(0);
    setTotalInterest(0);
    setTotalPayment(0);
    setLoanAmount(0);
    setMonths(0);
  };

  const formatCurrency = (value) => {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold leading-tight mt-1 capitalize text-center mb-10">
          EMI Calculate
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-6">
              {[
                { label: "Vehicle Price (₹)", value: price, set: setPrice },
                {
                  label: "Down Payment (₹)",
                  value: downPayment,
                  set: setDownPayment,
                },
                {
                  label: "Interest Rate (% per annum)",
                  value: interestRate,
                  set: setInterestRate,
                },
                {
                  label: "Loan Tenure (in years)",
                  value: tenure,
                  set: setTenure,
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <label className="block mb-1 font-medium text-gray-700">
                    {item.label}
                  </label>
                  <input
                    type="number"
                    placeholder={item.label}
                    className="pl-3 pr-3 py-2 border-2 border-[#2380D9] rounded-lg w-full"
                    value={item.value}
                    onChange={(e) => item.set(Number(e.target.value))}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={calculateEmi}
                className="flex-1 bg-[#2380D9] text-white py-2   cursor-pointer rounded-md font-semibold hover:bg-[#2380D9] transition"
              >
                Calculate EMI
              </button>
              <button
                onClick={resetForm}
                className="flex-1 border border-gray-400 text-gray-700 py-2  cursor-pointer rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-5 h-full">
            <div className="bg-[#2380D9] rounded-xl p-6 text-white shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-xl font-bold">{formatCurrency(emi)}</div>
                  <div className="text-base opacity-90">Monthly EMI</div>
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {formatCurrency(totalInterest)}
                  </div>
                  <div className="text-base opacity-90">Total Interest</div>
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {formatCurrency(totalPayment)}
                  </div>
                  <div className="text-base opacity-90">Total Payment</div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className=" bg-white rounded-xl shadow p-4 space-y-3 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                Loan Summary
              </h3>

              {[
                ["Vehicle Price", price],
                ["Down Payment", downPayment],
                ["Loan Amount", loanAmount],
                ["Total Interest", totalInterest],
                ["Loan Tenure", `${tenure} years (${months} months)`],
              ].map(([label, value], idx) => (
                <div
                  className="flex justify-between text-base  text-gray-600"
                  key={idx}
                >
                  <span>{label}</span>
                  <span className="font-semibold text-gray-800">
                    {label.includes("Tenure") ? value : formatCurrency(value)}
                  </span>
                </div>
              ))}

              <Link to="/auth">
                <button className="mt-4 w-full bg-white border border-[#2380D9]  cursor-pointer text-[#2380D9] py-2 rounded-md flex items-center justify-center hover:bg-[#2380D9] transition hover:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share EMI Details
                </button>
              </Link>
              <Link to="/auth">
                <button className="mt-4 w-full bg-[#2380D9] border border-[#2380D9] text-white py-2  cursor-pointer rounded-md flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Share Email Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emi;
