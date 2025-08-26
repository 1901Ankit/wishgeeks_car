import React from "react";
import {
  Calculator,
  CheckCircle,
  CreditCard,
  FileText,
  Clock,
  Shield,
} from "lucide-react";
const Eligiblity = () => {
  const eligibilityCriteria = [
    "Age: 21 to 65 years",
    "Income: Minimum ₹25,000 per month",
    "Employment: Salaried or Self-employed",
    "Credit Score: 650 and above",
    "Work Experience: Minimum 2 years",
  ];

  const requiredDocuments = [
    "Identity Proof (Aadhar/PAN/Passport)",
    "Address Proof (Utility Bills/Rent Agreement)",
    "Income Proof (Salary Slips/ITR)",
    "Bank Statements (Last 6 months)",
    "Employment Proof (Offer Letter/Business Proof)",
  ];
  return (
    <>
      {/* Eligibility & Documents */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Loan, Refined.
            </h2>
            <p className="text-xl text-gray-600">
              Discover the premium standards for eligibility and prepare the
              right documents for a seamless loan journey.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-10 ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="text-[#000]" /> Eligibility Criteria
              </h3>
              <ul className="space-y-5">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3 ">
                    <CheckCircle className="h-5 w-5 text-[#2380d9] mt-1" />
                    <span className="text-gray-700 text-lg group-hover:text-gray-900">
                      {criteria}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div
              className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-10
            "
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="text-[#000]" /> Required Documents
              </h3>
              <ul className="space-y-5">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 ">
                    <FileText className="h-5 w-5 text-[#2380d9] mt-1" />
                    <span className="text-gray-700 text-lg group-hover:text-gray-900">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eligiblity;
