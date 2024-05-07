import React from "react";
import Image from "next/image";
import CustomButton from "./customButton";
import Link from "next/link";

const CategorySection = (props) => {


console.log(props?.data ,"SS@@@@@@@@@@@@")

  return (
    <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-8">
      {props?.data.map((category) => (
        <div key={category?.id} className="relative overflow-hidden">
          <div className="">
            <Image
              src={category?.image}
              alt={category}
              className="object-cover w-full hover:scale-110 transition duration-500"
              width={500}
              height={500}
              style={{ height: 260 }}
            />
          </div>
          <div className="absolute top-10 left-10 z-10">
            <div className="text-3xl capitalize text-gray-800 my-5">
              {category?.title} 
            </div>
            <Link href={`/products?${!props?.sub ? 'category'  : 'subcategory'}=${category?.title}`}>
              <CustomButton
                title="Shop Now ->"
                containerStyles="px-6 py-2 items-center justify-center border bg-primary border-primary text-black text-md font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;