import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../view/home";
import BuyCars from "../view/buycar";
import SellCars from "../view/sellcar";
import Services from "../view/services";
import Finance from "../view/finance";
import Insurance from "../view/insurance";
import About from "../view/about";
import Contact from "../view/contact";
import CarDetails from "../view/cardetail";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Delivery from "../view/delivery";
import Auth from "../view/auth";
import PersonalInformation from "../component/personal";
import Photo from "../view/sellcar/fileupload";

const AppLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-cars" element={<BuyCars />} />
        <Route path="/sell-cars" element={<SellCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/fileupload" element={<Photo />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default Router;
