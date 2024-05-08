import Image from "next/image";
import React, { useState, useEffect } from "react";

import MainLayout from "@/components/layout/index";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { orderBy, where } from "firebase/firestore";
import Loader from "@/components/common/Loader";
import { useAuth } from "@/functions/context";
import Link from "next/link";
import { Zoom, Fade } from "react-awesome-reveal";

import { useRouter } from "next/router";

const featuredTestimonial = {
  image:
    "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-02_fphdlo.webp",
};
const testimonials = [
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-28_u0zpq2.webp",
    height: "h-80",
    rotation: "rotate-2",
    alt: "Stunning natural scenery for unforgettable footage",
    scale: "sm:scale-110",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559688/Loop%20Film/LoopFilm_img-25_eytw4c.webp",
    height: "h-60",
    rotation: "-rotate-2",
    alt: "Shooting in Norway’s picturesque fjords",
    scale: "sm:scale-105",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/RA_bro2-kopi_stimib.webp",
    height: "h-72",
    rotation: "sm:-rotate-3",
    alt: "LoopFilm’s crew and equipment work together seamlessly to bring your Norway shoot to life",
    scale: "sm:scale-110",
  },

  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-22_fl2jiv.webp",
    height: "h-56",
    rotation: "-rotate-3",
    alt: "LoopFilm’s team of experts makes filming in Norway easy and effortless for you",
    scale: "sm:scale-105",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559687/Loop%20Film/LoopFilm_img-11_yz81f0.webp",
    height: "h-56",
    rotation: "rotate-2",
    alt: "Cinematic shots of Norway’s fjords and other beautiful landscapes",
    scale: "sm:scale-110",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-08_aefnzo.webp",
    height: "h-64",
    rotation: "-rotate-2",
    alt: "Creative filming solutions with LoopFilm",
    scale: "sm:scale-105",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-09_kaxmg6.webp",
    height: "h-56",
    rotation: "rotate-1",
    alt: "Bringing your vision to life with LoopFilm’s expertise in filming in Norway’s extreme environments",
    scale: "sm:scale-110",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-13_oagr2e.webp",
    height: "h-64",
    rotation: "-rotate-3",
    alt: "A team of professionals for your filming needs in Norway",
    scale: "sm:scale-105",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559687/Loop%20Film/LoopFilm_img-14_emstqh.webp",
    height: "h-60",
    rotation: "rotate-2",
    alt: "Teamwork to bring your vision to life in Norway",
    scale: "sm:scale-110",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/RA_julebilde-kopi_b3gecs.webp",
    height: "h-72",
    rotation: "-rotate-1",
    alt: "From snow-covered roads to icy glaciers, LoopFilm captures the essence of Norway",
    scale: "sm:scale-105",
  },
  {
    image:
      "https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-33_zgzprj.webp",
    height: "h-64",
    rotation: "-rotate-3",
    alt: "On board with LoopFilm: Filming stunning scenes on the boat in Norway’s crystal-clear waters",
    scale: "sm:scale-105",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GalleryPage() {
  const { pageLoading, setPageLoading } = useAuth();

  const { t } = useTranslation();
  const { locale } = useRouter();

  const [products, setProducts] = useState([]);
  // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // setLoading(true);
      setPageLoading(true);
      setProducts([]);
      const data = await getDocumentsOrder(
        "slider",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch products ====>>>>");
      setProducts(data);
      setPageLoading(false);
      //  setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <MainLayout>
      <section className="w-full overflow-hidden ">
        <div className="relative isolate bg-white pb-6 pt-28 sm:pb-16 sm:pt-32">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[max(50%,38rem)] w-[82.0625rem]"
            >
              <path
                id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
              />
              <defs>
                <linearGradient
                  id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                  x1="1313.17"
                  x2="-88.881"
                  y1=".201"
                  y2="539.417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f5d0fe" />
                  <stop offset={1} stopColor="#f0abfc" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            >
              <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
            </svg>
          </div>
          <div className="mx-auto -mt-24 max-w-7xl px-6 sm:-mt-16 lg:px-8">
            <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-8">
              {products?.map((column, columnIdx) => (
                <div key={columnIdx} className={classNames(" ")}>
                  <figure
                    key={column?.image}
                    className={classNames(
                      "relative rounded-2xl bg-white h-60 sm:scale-110 rotate-3 p-6 shadow-lg ring-1 ring-gray-900/5 sm:-mt-0"
                      //   column.height,
                      // //   column.rotation,
                      // //   column.scale
                    )}
                  >
                    <div className="absolute inset-0">
                      <Image
                        className="overflow-hidden rounded-2xl object-cover"
                        fill
                        src={column?.image}
                        alt={column?.title}
                      />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
