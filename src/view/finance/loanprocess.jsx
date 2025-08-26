import React from "react";
import car from "../../assets/car.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Loanprocess = () => {
  const loanProcess = [
    {
      step: "1",
      title: "Apply Online",
      description:
        "Fill out our simple online application form with basic details",
    },
    {
      step: "2",
      title: "Document Verification",
      description: "Submit required documents for quick verification process",
    },
    {
      step: "3",
      title: "Loan Approval",
      description: "Get instant loan approval with competitive interest rates",
    },
    {
      step: "4",
      title: "Car Purchase",
      description:
        "Complete your car purchase with hassle-free loan disbursement",
    },
  ];
  return (
    <>
      <section className=" bg-gray-50 py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Simple Loan Process
            </h2>
            <p className="text-xl text-gray-600">
              Benefits that make us the preferred choice for car financing
            </p>
          </div>

          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanProcess.map((process, index) => (
              <div
                key={index}
                className=" bg-[#ffff] text-black rounded-xl p-4"
                style={{
                  boxShadow: `
            0 4px 20px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(0, 0, 0, 0.04)
          `,
                }}
              >
                <img
                  alt="Feature"
                  className="w-16 h-16  text-[#000] text-4xl"
                  src={car}
                />

                <h3 className="text-xl font-bold mb-2  text-start">
                  {" "}
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-start">
                  {process.description}
                </p>
                <Link to="/auth">
                  <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Loanprocess;
