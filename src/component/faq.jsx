import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I sell my car on your platform?",
    answer:
      "Create a seller account, upload your car’s details and images. Once approved, your car will be live on the platform for potential buyers to view.",
  },
  {
    question: "Are there any listing charges?",
    answer:
      "Standard listings are free. You can also choose premium plans for more visibility, faster selling, and highlighted ads.",
  },
  {
    question: "Is vehicle inspection mandatory before selling?",
    answer:
      "No, but we recommend it. Verified cars with inspection reports sell faster and attract more genuine buyers.",
  },
  {
    question: "Can I apply for a loan when buying a used car?",
    answer:
      "Yes, we’ve partnered with trusted banks and NBFCs. You can check your eligibility instantly on each car’s page.",
  },
  {
    question: "Do you help with RC transfer & documentation?",
    answer:
      "Absolutely! We handle everything — RC transfer, insurance update, and even RTO formalities for a hassle-free experience.",
  },
  {
    question: "Is vehicle inspection mandatory before selling?",
    answer:
      "No, but we recommend it. Verified cars with inspection reports sell faster and attract more genuine buyers.",
  },
];

const Cube = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="container mx-auto px-6  md:py-10 mb-5">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
        Everything you need to know about buying, selling, and financing cars on
        our platform.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md transition-all"
          >
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full px-6 py-5 text-left text-lg 
               font-semibold text-gray-800 hover:bg-gray-100 transition  cursor-pointer"
            >
              <span>
                <span className="text-[#2380d9] mr-2 font-bold">
                  Question {i + 1}:
                </span>
                {faq.question}
              </span>
              {activeIndex === i ? (
                <ChevronDown className="w-5 h-5 rotate-180 text-[#2380d9] transition-transform duration-300" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-[#2380d9] transition-transform duration-300" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-lg text-gray-600 leading-relaxed pt-1">
                    <span className="text-[#2380d9] font-semibold mr-2">
                      Answer {i + 1}:
                    </span>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cube;
