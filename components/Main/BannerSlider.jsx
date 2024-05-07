import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'


const Banner = ({  }) => {
//https://bzmmotors.com/mercedes/vito/25821

  const bannerData = [
    // { id: 1, img: "/cars/three.webp" },
     //{ id: 2, img: "/cars/four.webp" },
   // { id: 3, img: "/cars/three.webp" },
     { id: 4, img: "/cars/slider-1.jpg" },
     { id: 5, img: "/cars/slider-33.jpg" },
     { id: 6, img: "/cars/slider-34.jpg" },
     { id: 7, img: "/cars/slider-36.jpg" },  
     { id: 8, img: "/cars/slider-37.jpg" },  
  
  ];




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
                modules=
                
                
                {[Navigation, Autoplay, Pagination]} >
                


                {bannerData.map((data) => (
            <SwiperSlide key={data.id}>
              <div>
                <Image
                className=" md:!h-[700px]  !min-h-[300px]    object-conatin"
                  src={data.img}
                  width={2000}
                  height={300}
                  alt="banner-image"
                  priority={true}
                />
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
