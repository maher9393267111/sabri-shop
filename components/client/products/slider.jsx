import React from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box, Center, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import CustomSliderArrow from "./customSliderArrow";
import Link from "next/link";

// Settings for the slider


const ProdSlider = ({ data ,linkText }) => {

  const conditionSlider  =  data?.length >= 3 ? 4 : data?.length >=2 ? 4: 1

  console.log('Slider--->' , conditionSlider)

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: conditionSlider  ,
    slidesToScroll: 1,
    className: "md:w-[750px] mx-auto mt-4 w-[95%] py-12",
    nextArrow: <CustomSliderArrow direction={"next"} />,
    prevArrow: <CustomSliderArrow />,
  
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
  
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };



  const [slider, setSlider] = React.useState(null);
  return (
    <div>
     
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data?.map((item, index) => (
          <div key={index} className="flex-col py-6 justify-center items-center">
<Link href={`/products?${linkText}=${item.title}`}>
<div className="w-[130px] mx-auto h-[130px] rounded-full overflow-hidden hover:border-4 border-blue-600 border-2 p-1" >


            <img
              src={item.image}
              width={100}
              height={100}
              className="rounded-full w-full h-full mx-auto object-fit
              hover:cursor-pointer   border-solid hover:transition-all hover:duration-700 hover:scale-110 hover:shadow-2xl "
            />

</div>
</Link>
            <div className=" text-center mt-3 font-semibold text-lg hover:animate-pulse cursor-pointer  hover:text-blue-600">
              {item.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProdSlider;
