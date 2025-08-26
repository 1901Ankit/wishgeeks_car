import React, { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/wish.webp";
const navLinks = [
  { label: "Buy Cars", path: "/buy-cars" },
  { label: "Sell Cars", path: "/sell-cars" }, 
  { label: "About", path: "/about" },
  { label: "Finance", path: "/finance" },
  { label: "Delivery", path: "/delivery" },
  { label: "Services", path: "/services" },
  { label: "Insurance", path: "/insurance" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-40 h-full object-contain" />
          
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl  cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-black text-lg font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className={`transition hover:text-blue-500 text-lg font-medium ${
                isActive(link.path) ? "text-blue-600 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/auth">
            <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition  cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed h-fit inset-0 z-40 transition-transform duration-500 ease-in-out overflow-y-auto bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "70px" }}
      >
        <div className="flex flex-col h-auto p-4 ">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center py-3 px-2 text-lg transition duration-300 hover:text-blue-500 ${
                isActive(link.path)
                  ? "text-blue-600 font-semibold"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/auth" onClick={() => setOpen(false)}>
            <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition  cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
