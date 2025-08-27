import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../assets/wish.webp";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & About */}
          <div className="pr-4 border-r border-black last:border-none">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className="w-40 h-full object-contain" />
            </Link>
            <p className="text-base text-black leading-relaxed mb-4 mt-2">
              India's most trusted platform for buying and selling pre-owned
              cars with complete transparency and a hassle-free experience.
            </p>
            <div className="flex space-x-5">
              <Facebook className="h-6 w-6 hover:scale-110 transition-transform text-black hover:text-[#2380D9] cursor-pointer" />
              <Twitter className="h-6 w-6 hover:scale-110 transition-transform text-black hover:text-sky-400 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:scale-110 transition-transform text-black hover:text-pink-500 cursor-pointer" />
              <Youtube className="h-6 w-6 hover:scale-110 transition-transform text-black hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="pr-4 border-r border-black last:border-none">
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/buy-cars"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Buy Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/sell-cars"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Sell Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/finance"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="pr-4 border-r border-black last:border-none">
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Company
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#2380D9] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#2380D9] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2380D9] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Contact Info
            </h4>
            <div className="space-y-4 text-base text-black">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-black mr-3" />
                <span>+91 8009006231</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-black mr-3" />
                <span>info@wishgeekstechserve.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-14 w-14 text-black mr-3 " />
                <span>
                  12A02 Tower C 13th Floor Iconic Corenthum Sector-62, Noida,
                  Uttar Pradesh India, 201301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <p>&copy; 2025 Wish Geeks Techserve. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            <Link to="/" className="hover:underline">
              Terms & Conditions
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
