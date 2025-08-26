import { ArrowRight, Car, Star, Users } from "lucide-react";
import React from "react";
import { BiAward } from "react-icons/bi";
import { Link } from "react-router-dom";

const Award = () => {
  return (
    <>
      {/* Awards Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <BiAward className="h-8 w-8" />,
                title: "Best Used Car Platform 2023",
                description:
                  "Awarded by Indian Automotive Awards for excellence in customer service",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer Choice Award 2022",
                description:
                  "Recognized for highest customer satisfaction ratings in the industry",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Innovation Excellence 2021",
                description:
                  "Honored for technological innovation in automotive marketplace",
                color: "from-green-400 to-green-600",
              },
              {
                icon: <Car className="h-8 w-8" />,
                title: "Innovation Excellence 2021",
                description:
                  "Honored for technological innovation in automotive marketplace",
                color: "from-red-400 to-red-600",
              },
            ].map((award, index) => (
              <div key={index} className="text-center ">
                <div className="bg-white rounded-2xl p-4 shadow-lg h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${award.color} flex items-center justify-center mb-6 text-white `}
                  >
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2  text-start">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-start">
                    {award.description}
                  </p>
                  <Link to="/auth">
                    <div className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
