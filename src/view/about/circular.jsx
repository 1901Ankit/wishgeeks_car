import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Star, Users, Shield } from "lucide-react";

const Circular = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const stats = [
    { number: 90, label: "Years Experience", icon: <TrendingUp size={28} /> },
    { number: 75, label: "Happy Clients", icon: <Users size={28} /> },
    { number: 85, label: "Customer Satisfaction", icon: <Star size={28} /> },
    { number: 70, label: "Success Rate", icon: <Shield size={28} /> },
  ];
  return (
    <>
      <section className="py-10 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-36 h-36 mx-auto mb-4">
                  <CircularProgressbarWithChildren
                    value={inView ? stat.number : 0}
                    styles={buildStyles({
                      pathColor: "#2380D9",
                      trailColor: "#E5E7EB",
                    })}
                  >
                    <div className="text-blue-600 mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">
                      {inView ? (
                        <CountUp end={stat.number} duration={1.5} suffix="%" />
                      ) : (
                        "0%"
                      )}
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <p className="mt-2 text-gray-700 font-semibold text-xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circular;
