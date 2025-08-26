import React, { useEffect } from "react";
import Cube from "../../component/faq";
import Country from "./country";
import Careffect from "./careffect";
import delivery from "../../assets/delivery.jpg";
import Cta from "../../component/cta";

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const deliverySections = [
    {
      id: 1,
      title: "Car Delivery at Your Doorstep",
      content: `Think about having the car of your choice delivered right to your home from anywhere in Europe. Our dedicated service makes it possible to fulfil your automotive dreams effortlessly. Our seamless car delivery service ensures that your car is delivered right to your doorstep at unbeatable rates. Its complete journey can be tracked by you. With the help of this service, clients may enjoy the utmost convenience of receiving their vehicle without having to bother about making transportation arrangements or going to a dealership. This service is especially helpful to those people who do not have the time or means to pick up their car.`,
      images: [
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
      ],
      reverse: false,
    },
    {
      id: 2,
      title: "Car Delivery at Your Doorstep",
      content: `Think about having the car of your choice delivered right to your home from anywhere in Europe. Our dedicated service makes it possible to fulfil your automotive dreams effortlessly. Our seamless car delivery service ensures that your car is delivered right to your doorstep at unbeatable rates. Its complete journey can be tracked by you. With the help of this service, clients may enjoy the utmost convenience of receiving their vehicle without having to bother about making transportation arrangements or going to a dealership. This service is especially helpful to those people who do not have the time or means to pick up their car.`,
      images: [
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
      ],
      reverse: true,
    },
  ];
  return (
    <div className="bg-[#F6F8FA]">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px]">
        <img
          src={delivery}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold">
            Delivery{" "}
          </h1>
        </div>
      </div>

      <div className="px-6  py-10 space-y-20">
        {deliverySections.map(({ id, title, content, images, reverse }) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="w-full md:w-5/12">
              <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4">
                {title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                {content}
              </p>
            </div>

            {/* Image Grid */}
            <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <div className="h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-md bg-white">
                  <img
                    src={images[0]}
                    alt="Delivery Main"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="h-[130px] md:h-[190px] rounded-xl overflow-hidden shadow-md bg-white">
                  <img
                    src={images[1]}
                    alt="Delivery Side 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-[130px] md:h-[190px] rounded-xl overflow-hidden shadow-md bg-white">
                  <img
                    src={images[2]}
                    alt="Delivery Side 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Careffect />
      <Country />

      <Cube />
      <Cta/>
    </div>
  );
};

export default Delivery;
