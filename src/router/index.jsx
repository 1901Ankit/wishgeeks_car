import { Toaster } from "react-hot-toast";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../view/home";
import BuyCars from "../view/buycar";
import SellCars from "../view/sellcar";
import Services from "../view/services";
import Finance from "../view/finance";
import Insurance from "../view/insurances";
import About from "../view/about";
import Contact from "../view/contact";
import CarDetails from "../view/cardetail";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Delivery from "../view/delivery";
import Auth from "../view/auth";
import PersonalInformation from "../component/personal";
import Photo from "../view/sellcar/fileupload";
import ForgotPassword from "../view/auth/ForgotPassword";
import ResetPassword from "../view/auth/ResetPassword";
import ListingPage from "../view/buycar/ListingPage";
const AppLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-cars" element={<ListingPage />} />
        <Route path="/sell-cars" element={<SellCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/fileupload" element={<Photo />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const Router = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default Router;
