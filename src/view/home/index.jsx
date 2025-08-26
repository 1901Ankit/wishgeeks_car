import React, { useEffect, useState } from "react";
import Searchcar from "./searchcar";
import Ev from "./ev";
import Cube from "../../component/faq";
import Cta from "../../component/cta";
import bmw from "../../assets/bmw.jpg";
import insurance from "../../assets/insurance.jpg";
import finace from "../../assets/finace.webp";
import black from "../../assets/black.jpg";
import FeaturesSection from "./feature";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import CarBrandsExplorer from "./brand";
import TrustedCarsNearby from "./trust";
import Circular from "../about/circular";
import Client from "./client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("new");
  const bannerImages = [bmw, black, insurance, finace];

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full h-[500px]"
      >
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[500px] flex items-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(35,128,217,0.2)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-xl text-white"
      >
        <p className="text-[#2380D9] font-semibold tracking-widest uppercase">
          Welcome to Wish Geeks Techserve
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Best Way To Find <br />
          Your <span className="text-[#2380D9]">Dream Car</span>
        </h1>
        <p className="text-lg text-white/90">
          There are many variations of passages orem psum available but the
          majority have suffered alteration in some form by injected humour.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4 flex-wrap">
          <Link to="/about">
            <button className="bg-[#2380D9] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 cursor-pointer">
              About More →
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-white text-[#2380D9] font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 cursor-pointer">
              Learn More →
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Car Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-xl mt-10 lg:mt-0 hidden md:block"
      >
        <img
          src={img}
          alt="Car"
          className="w-full h-auto drop-shadow-2xl rounded-xl"
        />
      </motion.div>
    </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Searchcar  */}
      <Searchcar />
      <Ev />
      <CarBrandsExplorer />
      <FeaturesSection />
      <Circular />
      <TrustedCarsNearby />
      <Client />
      <Cube />
      <Cta />
    </div>
  );
};

export default Home;
