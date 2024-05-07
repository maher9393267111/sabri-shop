import React from "react";
import Carousel from "react-slick";
import CustomSliderArrow from "../../products/customSliderArrow";
import { motion } from "framer-motion";
//import { Fade } from 'react-reveal'


// ------------------------- offer slider the big one top of the page--------------------

const OfferSlider = ({ offerProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    className: "md:w-[75%] mx-auto !h-full  ",
    nextArrow: <CustomSliderArrow direction={"next"} />,
    prevArrow: <CustomSliderArrow />,
    swipeToSlide: true,
  };
  console.log("imagesssOfferrr ====>", offerProducts[0].images);
  return (
    <div className=" grid gap-1 mt-12 mb-8 px-12  grid-cols-1 lg:!h-[700px] h-full overflow-y-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
      {/* ---- parent of slider ---- */}

      <div className=" w-full lg:col-span-5 col-span-2 sm:!h-[700px] !h-[100%] ">
        <Carousel {...settings}>
          {offerProducts?.map((item, index) => {
            return (
              <div className="w-full h-full relative  " key={index}>
                <img
                  className=" p-[13px] relative lg:-top-[13px] w-full !h-full object-center  xs:!h-[700px]  !object-fit xs:object-cover    brightnes-50   rounded-[4%]
                   "
                  src={item?.images[0]}
                  alt=""
                />

                <div className="  z-10 absolute  inset-0   text-3xl flex  text-center  text-white ">
                  <div className="max-w-3xl z-10 space-y-4 px-4 mt-[65px] sm:px-6 lg:px-8 py-6 rounded-lg">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="text-4xl md:text-8xl font-bold uppercase bg-gray-950 bg-opacity-20 rounded-xl "
                    >
                      <div className="text-sm md:text-xl space-y-3" key={index}>
                        <div className="flex" >
                          <div className="font-content rounded-md bg-gray-300 px-3 py-2 bg-opacity-20">
                             {item.title} 
                          </div>
                        </div>
                        <div>
                          {item.desc}                    
                          <div className="font-bold underline animate-pulse">
                            {item.discount !== 0 && (
                           
                             
                              <div>
                                {item.discount}%
                                <img
                                  src="Sale-image.png"
                                  className="w-[120px] h-[60px] m-auto object-content rounded-lg"
                                />
                              </div>
                             )
                            
                            }
                          </div>



                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* -----two images  the right section of offer slider--- */}

      <div className="md:col-span-2 !h-full  flex justify-center lg:grid lg:grid-cols-1  lg:place-items-center gap-4 mt-[50px] lg:mt-[1px]">
        <img
          className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full "
          src="USDT.jpg"
        />
        <a
                                href='https://wa.me/96170480041' target="_blank" rel="noreferrer" 
                                
                                className='text-gray-200 '
                            >
        <img src="whatsApp.png" alt="whatsapp" width={30} height={30} className="absolute top-19 right-14"/>
        </a>
        <img
          className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full"
          src="https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg"
        />
        
      </div>
    </div>
  );
};

export default OfferSlider;

// import React from "react";
// import Carousel from "react-slick";
// import CustomSliderArrow from "../../products/customSliderArrow";
// import { motion } from "framer-motion";

// const OfferSlider = ({ offerProducts }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//     className: "md:w-[75%] mx-auto !h-full  ",
//     nextArrow: <CustomSliderArrow direction={"next"} />,
//     prevArrow: <CustomSliderArrow />,
//     swipeToSlide: true,
//   };
//   console.log("imagesssOfferrr ====>", offerProducts[0].images);
//   return (
//     <div className=" grid gap-1 mt-12 mb-8 px-12  grid-cols-1 lg:!h-[600px] h-full overflow-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
//       {/* ---- parent of slider ---- */}

//       <div className=" w-full lg:col-span-5 col-span-2 sm:!h-[600px] !h-[100%] ">
//         <Carousel {...settings}>
//           {offerProducts?.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="bg-cover  rounded-xl bg-no-repeat bg-center

//         bg-[url('/forsale.jpg')]"
//               >
//                 <div className="bg-blac bg-opacity-20 h-full text-gray-200 py-16 lg:py-40">
//                   <div className="max-w-7xl mx-auto font-content">
//                     <div className="max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8 py-6 rounded-lg">
//                       <motion.div
//                         initial={{ y: "100%" }}
//                         whileInView={{ y: 0 }}
//                         transition={{ duration: 1, ease: "easeInOut" }}
//                         className="text-4xl md:text-8xl font-bold uppercase bg-gray-950 bg-opacity-20 rounded-xl"
//                       >
//                         <div className="text-xl space-y-3">
//                           <div className="flex">
//                             <div className="font-content rounded-md bg-gray-300 px-3 py-2 bg-opacity-20">
//                               Join Hands for Infertility Free Karnataka
//                             </div>
//                           </div>
//                           <div>
//                             Even today many people believe that infertility is a
//                             curse. Garbhagudi IVF Center through the{" "}
//                             <span className="font-bold underline">
//                               Ghar Ghar GarbhaGudi initiative
//                             </span>{" "}
//                             has taken a bold step to overcome that and create
//                             awareness that every woman can achieve motherhood
//                             through modern reproductive treatment.
//                           </div>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Carousel>
//       </div>

//       {/* ----- parent of sideoffer images --- */}

//       <div className="md:col-span-2 !h-full  flex justify-center lg:grid lg:grid-cols-1  lg:place-items-center gap-4 mt-[50px] lg:mt-[1px]">
//         <img
//           className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full"
//           src="https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg"
//         />

//         <img
//           className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full"
//           src="https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg"
//         />
//       </div>
//     </div>
//   );
// };

// export default OfferSlider;

// // import React from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";

// // import Image from "next/image";

// // import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// // import { Box, HStack, Icon, Link as LinkUI, Text } from "@chakra-ui/react";

// // const SliderArrowRight = ({ onClick }) => (
// //   <Box
// //     bgColor="#d3d3d3cc"
// //     display="inline-flex"
// //     justifyContent="center"
// //     alignItems="center"
// //     borderRadius="50%"
// //     w="36px"
// //     h="36px"
// //     position="absolute"
// //     zIndex="999"
// //     top="50%"
// //     right="15px"
// //     cursor="pointer"
// //     onClick={onClick}
// //   >
// //     <Icon as={ChevronRightIcon} w="28px" h="28px" />
// //   </Box>
// // );

// // const SliderArrowLeft = ({ onClick }) => (
// //   <Box
// //     bgColor="#d3d3d3cc"
// //     display="inline-flex"
// //     justifyContent="center"
// //     alignItems="center"
// //     borderRadius="50%"
// //     w="36px"
// //     h="36px"
// //     position="absolute"
// //     zIndex="999"
// //     top="50%"
// //     left="15px"
// //     cursor="pointer"
// //     onClick={onClick}
// //   >
// //     <Icon as={ChevronLeftIcon} w="28px" h="28px" />
// //   </Box>
// // );

// // const renderArrowPrev = (clickHandler, hasPrev) => (
// //   <SliderArrowLeft isDisabled={!hasPrev} onClick={clickHandler} type="prev" />
// // );

// // const renderArrowNext = (clickHandler, hasNext) => (
// //   <SliderArrowRight isDisabled={!hasNext} onClick={clickHandler} type="next" />
// // );

// // export default function Test({ offerProducts }) {
// //   return (
// //     <div>
// //       <Carousel
// //         autoPlay={true}
// //         showArrows={false}
// //         showStatus={false}
// //         showIndicators={false}
// //         showThumbs={true}
// //         infiniteLoop
// //         swipeable
// //         className="w-100"
// //         stopOnHover={false}
// //         renderArrowPrev={renderArrowPrev}
// //         renderArrowNext={renderArrowNext}
// //       >
// //         {offerProducts?.map((item, index) => {
// //           return (
// //             <div
// //               className="h-[300px] relative md:h-[80vh] flex flex-col items-center justify-center  "
// //               key={index}
// //             >
// //               <Image
// //                 //   className="w-full h-full object-cove   brightness-50   rounded-lg "

// //                 fill
// //                 id="background-image"
// //                 style={{ objectFit: "cover" }}
// //                 priority
// //                 loading="eager"
// //                 // className="-z-10"
// //                 alt={""}
// //                 src={item?.images[0]}
// //               />

// //               <div className="  z-0 absolute  inset-0   text-3xl top-1/2   text-center  text-whit ">
// //                 {/* TEXT */}

// //                 <img src="./Testt.jpg"
// //                 className=""
// //                 />
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </Carousel>
// //     </div>
// //   );
// // }
