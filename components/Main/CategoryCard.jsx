import React from "react";
import Image from "next/image";
import CustomButton from "./customButton";
import Link from "next/link";
import {useRouter} from 'next/router'

const CategorySection = (props) => {

  const router =useRouter()

console.log(props?.data ,"SS@@@@@@@@@@@@")

  return (
    <div dir="ltr">
      

<div className="flex  flex-row justify-between items-center">
        <div className=" my-6">
          {/* <p className="text-base font-medium text-primary">Shop by Category</p> */}
          <h1 className=" text-xl text-center  md:text-4xl font-bold my-4 arabic">{props?.title ? props?.title : "Best Sellers"}</h1>
        </div>
       
      </div>

   
    <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-8">



      {props?.data.map((category) => (
        <div key={category?.id} className="relative overflow-hidden">
          <div className="">
            <Image
              src={category?.image}
              alt={category}
              className="object-cover  rounded-md w-full hover:scale-110 transition duration-500"
              width={500}
              height={500}
              style={{ height: 260 }}
            />
          </div>
          <div className="absolute top-10 left-10 z-10">
            {/* <div className="text-3xl capitalize text-gray-800 my-5">
              {category?.title} 
            </div> */}
            <Link href={`/products?${!props?.sub ? 'category'  : 'subcategory'}=${category?.title}`}>
              <CustomButton
                title= {`${ router.locale === 'ar' ? category?.titlear : router.locale === 'en' ? category?.title : category?.titletr} ->`} //"Shop Now ->"
                containerStyles="px-6 arabic py-2 mt-12 items-center justify-center border bg-primary border-primary text-black text-lg font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategorySection;