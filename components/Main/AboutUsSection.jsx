import React from 'react'
import Image from "next/image";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
import { useTranslation } from "next-i18next";

export default function AbourSection() {


    const { t } = useTranslation("common");

  return (
    <div dir={''} className=''>
          <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl md:text-3xl   shimmer   font-semibold ">
            {t("about.title")}
            </p>
            {/* <p className="text-gray-500">
              We address our offer to all who want to travel in comfortable
              conditions. We have over 120 top-class vehicles, so our customers
              can be assured of comfort and safety.
            </p> */}
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p> {t("about.list1")}</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>{t("about.list2")}</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>{t("about.list3")}</p>
              </div>

              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>{t("about.list4")}</p>
              </div>

              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>{t("about.list5")}</p>
              </div>


            </div>
          </div>
          <div className="col-span-1 mt-4 md:mt-0">
            <Image width={'700'} height={'700'} src={'/cars/about.webp'} alt="Picture of the author" />
          </div>
        </div>
    </div>
  )
}
