import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { HiInformationCircle, HiPhotograph } from "react-icons/hi";

const Stepper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    {
      name: "Specifications",
      icon: <HiInformationCircle />,
      path: "/sell-cars",
    },
    {
      name: "Personal Information",
      icon: <FaUser />,
      path: "/personal-information",
    },
    { name: "Photos", icon: <HiPhotograph />, path: "/fileupload" },
  ];

  const currentStepIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );
  const hasPrevious = currentStepIndex > 0;
  const previousStep = hasPrevious ? steps[currentStepIndex - 1].path : null;

  const getStepStatus = (stepPath) => {
    if (location.pathname === stepPath) return "active";
    if (currentStepIndex >= steps.findIndex((step) => step.path === stepPath))
      return "completed";
    return "inactive";
  };

  return (
    <div className="w-full border-b border-gray-200 py-4">
      <div className="max-w-7xl items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
          {/* Stepper UI */}

          <div className="flex-1 flex justify-between items-center relative">
            {steps.map((step, index) => {
              const stepStatus = getStepStatus(step.path);
              const isCompleted = currentStepIndex > index;

              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center text-center relative cursor-pointer"
                  onClick={() => navigate(step.path)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-base z-10 ${
                      stepStatus === "active"
                        ? "bg-[#2380D9] text-white"
                        : stepStatus === "completed"
                        ? "bg-[#2380D9] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <span
                    className={`mt-2 text-sm font-semibold w-[68px] md:w-full ${
                      stepStatus === "active"
                        ? "text-gray-900"
                        : stepStatus === "completed"
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute top-6 left-[70%] right-[-30%] h-[1px] z-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(to right, ${
                          isCompleted ? "#2380D9" : "#ccc"
                        } 0, ${
                          isCompleted ? "#2380D9" : "#ccc"
                        } 6px, transparent 6px, transparent 12px)`,
                      }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Stepper;
