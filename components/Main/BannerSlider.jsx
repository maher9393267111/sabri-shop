import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomButton from "./customButton";
import { useRouter } from "next/router";
import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'


const Banner = ({ data}) => {

  


  const router =useRouter()






    return (
        <>
            <div dir="ltr" className=' sm:block border-t md:mx-12 mb-4'>

            <Swiper
    slidesPerView={1}
    loop={true}
    pagination={{ clickable: true }}
    navigation
    autoplay={{
      delay: 3000
    }}
    modules={[Navigation, Autoplay, Pagination]}
  >
    {data?.map((item) => (
      <SwiperSlide key={data.id}>
        {/* //!bg-black !opaci-[0.9]  */}
        <div key={data.id} className="relative overflow-hidden">
          <div className="">
            <Image
              src={item?.image}
              className="object-cover md:!h-[700px] !min-h-[300px] rounded-md w-full hover:scale-110 transition duration-500"
              width={2000}
              height={300}
              style={{ height: 260 }}
            />
            {/* //bg-black opacity-70 */}
            <div className="absolute top-0 left-0 h-full w-full hero-overlay "></div>
          </div>
          <div className="hero-overla ">

</div>
          <div className="absolute top-24 left-24 z-10">
          
            <div dir={router.locale === 'ar' && 'rtl'} className="text-xl arabic md:text-3xl font-bold capitalize w-[70%] shimmer my-5">
              {router.locale === 'ar' ? item?.titlear : router.locale === 'en' ? item?.title : item?.titletr}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>






            </div>
        </>
    )
}

export default Banner;








// import React, { useRef, useState } from "react";
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";

// // // import required modules
// // import { Autoplay, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import 'swiper/swiper-bundle.css';
// import'swiper/css';
// import'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const BannerSlider = () => {
//   return (
//     <div className=" h-screen w-full">
//       <Swiper
//         navigation={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, Navigation]}
//       >
//         <SwiperSlide>
//           <div
//             className="h-screen bg-no-repeat bg-cover bg-center"
//             style={{
//               backgroundImage: `url(https://www.hoponhopoffistanbul.com/uploads/900/product/2021/02/17/istanbul-airport-transfers-1-to-7ppl_1613567958.jpg)`,
//             }}
//           >
//             <div className="h-screen bg-black bg-opacity-10 ">
//               <div className=" h-[400px] md:h-screen flex flex-col justify-center items-center space-y-6">
//                 <p className="text-7xl text-white "> First Class . WorldWide</p>
//                 <p className="text-2xl font-light text-white ">
//                   A chauffer Service for Any Purpose
//                 </p>
//                 <button
//                   type="button"
//                   className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
//                 >
//                   CONTACT US
//                 </button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="h-screen bg-no-repeat bg-cover     bg-center"
//             style={{
//               backgroundImage: `url(https://rosytour.com/wp-content/uploads/2019/11/Mercedes-Benz-Vito-Tourer-Select-119.jpg)`,
//             }}
//           >
//             <div className="h-screen bg-black bg-opacity-10 ">
//               <div className="h-screen flex flex-col justify-center items-center space-y-6">
//                 <p className="text-7xl text-white "> First Class . WorldWide</p>
//                 <p className="text-2xl font-light text-white ">
//                   A chauffer Service for Any Purpose
//                 </p>
//                 <button
//                   type="button"
//                   className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
//                 >
//                   CONTACT US
//                 </button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="h-screen bg-no-repeat bg-cover bg-center"
//             style={{
//               backgroundImage: `url(https://www.hoponhopoffistanbul.com/uploads/900/product/2020/11/22/airport-transfers_1606050263.jpg)`,
//             }}
//           >
//             <div className="h-screen bg-black bg-opacity-10 ">
//               <div className="h-screen flex flex-col justify-center items-center space-y-6">
//                 <p className="text-7xl text-white "> First Class . WorldWide</p>
//                 <p className="text-2xl font-light text-white ">
//                   A chauffer Service for Any Purpose
//                 </p>
//                 <button
//                   type="button"
//                   className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
//                 >
//                   CONTACT US
//                 </button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };
// export default BannerSlider;
