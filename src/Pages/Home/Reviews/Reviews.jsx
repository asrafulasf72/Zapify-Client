import React, { use } from "react";
import customerTop from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);
  return (
    <div>
      <div className=" text-center">
        <img className="mx-auto" src={customerTop} alt="" />
        <h2 className="text-[2.2rem] font-medium mt-4">
          What our customers are sayings
        </h2>
        <p className="text-[1rem] ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
        <>
      <Swiper
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper my-10"
      >
         
         {
            reviewData.map((review)=> <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>)
         }

      </Swiper>
    </>
      
    </div>
  );
};

export default Reviews;
