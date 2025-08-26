import React from "react";
import teamimage from "../../assets/team.jpg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Team = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: teamimage,
      description:
        "Expert in streamlining operations and improving customer satisfaction.",
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: teamimage,
      description:
        "Expert in streamlining operations and improving customer satisfaction.",
    },
    {
      name: "Amit Verma",
      position: "CTO",
      image: teamimage,
      description:
        "Tech enthusiast with a decade of experience in automotive platforms.",
    },
    {
      name: "Neha Singh",
      position: "Marketing Lead",
      image: teamimage,
      description:
        "Creative thinker driving campaigns and boosting brand visibility.",
    },
    {
      name: "Suresh Patil",
      position: "Sales Director",
      image: teamimage,
      description:
        "Results-driven professional with deep insight into customer needs.",
    },
    {
      name: "Anjali Mehta",
      position: "Customer Success Head",
      image: teamimage,
      description:
        "Ensuring seamless experiences and post-sale happiness for customers.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The passionate people behind We24 seven success
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-start">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-base font-semibold">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-start">
                    {member.description}
                  </p>
                  <div className="flex space-x-4">
                    <Facebook className="h-6 w-6 hover:scale-110 transition-transform text-[#2380D9] cursor-pointer" />
                    <Twitter className="h-6 w-6 hover:scale-110 transition-transform text-[#2380D9] cursor-pointer" />
                    <Instagram className="h-6 w-6 hover:scale-110 transition-transform text-[#2380D9] cursor-pointer" />
                    <Youtube className="h-6 w-6 hover:scale-110 transition-transform text-[#2380D9] cursor-pointer" />
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

export default Team;
