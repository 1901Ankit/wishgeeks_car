import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import user1 from "../../assets/team.jpg"; // Replace with real client images

const Client = () => {
  const testimonials = [
    {
      name: "Aman Verma",
      feedback:
        "Absolutely amazing service! The team guided me through every step and made car buying hassle-free.",
      image: user1,
      location: "Delhi, India",
    },
    {
      name: "Sneha Kapoor",
      feedback:
        "Professional and prompt support. I got the perfect deal thanks to their knowledgeable staff.",
      image: user1,
      location: "Mumbai, India",
    },
    {
      name: "Ravi Mishra",
      feedback:
        "They understood my needs and helped me find the right car quickly. Very satisfied!",
      image: user1,
      location: "Bangalore, India",
    },
    {
      name: "Divya Sharma",
      feedback:
        "I loved how simple and transparent the process was. Highly recommend them to all car buyers!",
      image: user1,
      location: "Chennai, India",
    },
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-500">
            Hear directly from customers who’ve experienced our service.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white/70  backdrop-blur-md border border-gray-200
               rounded-2xl  p-6  h-full flex flex-col justify-between"
              >
                <p className="text-gray-600 text-base  mb-6 leading-relaxed">
                  “{client.feedback}”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500">{client.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Client;
