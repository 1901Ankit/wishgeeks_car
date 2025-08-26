import React from "react";
import image1 from "../../assets/bajaj.png";
import image2 from "../../assets/mahindra.png";
import image3 from "../../assets/idfc.png";
const logos = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
   image1,
  image2,
  image3,
  image1,
  image2,
  image3,
];

const PartnerMarquee = () => {
  return (
    <div className="bg-gray-50 py-5 overflow-hidden">
      <h1 className="text-4xl font-semibold leading-tight mt-1 capitalize text-center mb-10">
        Our Partners
      </h1>

      {/* First Row - Left to Right */}
      <div className="w-full overflow-hidden ">
        <div className="flex gap-12 animate-marquee-left whitespace-nowrap">
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={`right-${idx}`}
              src={src}
              alt={`Partner ${idx}`}
  className="h-16 w-auto object-contain mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
