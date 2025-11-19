import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/amazon_vector.png";
import brand3 from "../../../assets/brands/casio.png";
import brand4 from "../../../assets/brands/moonstar.png";
import brand5 from "../../../assets/brands/randstad.png";
import brand6 from "../../../assets/brands/star.png";
import brand7 from "../../../assets/brands/start_people.png";

const Brand = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-base-100 py-4">
      <p className="text-black text-[1.8rem] font-semibold  px-3 py-2">We've helped thousands of sales teams</p>
      <Marquee  pauseOnHover={true} speed={80}>
        <div className="flex gap-6">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brand;
