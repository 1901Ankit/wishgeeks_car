import React, { useEffect } from "react";
import contact from "../../assets/contact.webp";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Cube from "../../component/faq";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px]">
        <img
          src={contact}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto mt-10 px-6 ">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Contact Us
              </h3>
              <h2 className="text-blue-600 text-3xl md:text-5xl font-extrabold mt-2">
                Buy or Sell Cars — Hassle-Free and Trusted
              </h2>
              <p className="text-blue-600 font-medium mt-4">
                We’re here to help you buy or sell your car with ease. India’s
                most trusted platform for verified pre-owned vehicles, fair
                pricing, and a seamless experience. Reach out today — let’s put
                you on the road!
              </p>
            </div>

            <ul className="space-y-6 mt-6">
              {/* Location */}
              <li className="flex gap-4 items-start">
                <div className="min-w-[40px] h-10 w-10 flex items-center justify-center bg-blue-600 rounded-full">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <p className="text-gray-600 font-medium">
                  12A02 Tower C 13th Floor, Iconic Corenthum, Sector-62, Noida,
                  UP, India - 201301{" "}
                </p>
              </li>

              {/* Phone */}
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <a
                  href="tel:+918009006231"
                  className="text-gray-600 font-medium hover:text-blue-600 transition"
                >
                  +91 8009006231{" "}
                </a>
              </li>

              {/* Email */}
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <a
                  href="mailto:info@wishgeekstechserve.com"
                  className="text-gray-600 font-medium hover:text-blue-600 transition"
                >
                  info@wishgeekstechserve.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <form className="bg-white border-2 border-blue-200 shadow-xl rounded-xl p-6 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Send Message
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="pl-10 pr-3 py-2 border-2 border-blue-300 rounded-lg w-full"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="pl-10 pr-3 py-2 border-2 border-blue-300 rounded-lg w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="pl-10 pr-3 py-2 border-2 border-blue-300 rounded-lg w-full"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
                    <FaPhoneAlt />
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="pl-10 pr-3 py-2 border-2 border-blue-300 rounded-lg w-full"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border-2 border-blue-300 rounded-lg px-3 py-2"
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold cursor-pointer rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Cube />
      {/* Google Map */}
      <div className="w-full h-[300px] md:h-[450px] mt-10 overflow-hidden rounded-xl border-2 border-blue-100 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0720412029264!2d77.37075817375235!3d28.627602884307645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3a54dd752b45917%3A0xb94b2c6ee531f041!2sWish%20Geeks%20Techserve%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756196372292!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
