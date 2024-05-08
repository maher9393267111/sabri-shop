import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation ,Autoplay } from "swiper/modules";
import ProductCard from "./productCard";

import CustomButton from "./customButton";
import Link from "next/link";

export default function BestSellerSection(props) {

const  {t} = useTranslation()


  return (
    <div dir="ltr"  className=" mx-12 mb-12">
      <div  className="flex my-6  flex-row justify-between items-center">
        <div>
          {/* <p className="text-base font-medium text-primary">Shop by Category</p> */}
          <h1 className=" text-xl md:text-4xl font-bold my-4 arabic">{props?.title ? props?.title : "Best Sellers"}</h1>
        </div>
        <Link href="/products">
          <CustomButton
            title={`${t("allproductstitle") }`}
            containerStyles=" px-3 md:px-6 arabic py-2 items-center justify-center border bg-primary border-transparent text-black text-md md:text-xl font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        dir=""
        // modules={[Pagination, Navigation]}
        
       
        
        autoplay={{
          delay: 3000
        }}
        modules={[Navigation, Autoplay, Pagination]}


        className="mySwiper">
        {props?.data?.map((product) => (
          <SwiperSlide key={product?.id}>
            <ProductCard {...product} key={product?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
