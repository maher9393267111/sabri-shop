import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";
import dayjs from "dayjs";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ChevronIcon } from "@/functions/icons";

import { getDocuments, getDocument } from "@/functions/firebase/getData";
import MainLayout from "@/components/layout";
import { useAuth } from "@/functions/context";

export default function Article() {
  const [product, setProduct] = useState({});
  console.log("🎭🎭🎭>", product.title);
//  const [loacding, setLoading] = useState(false);
  const {pageLoading, setPageLoading} = useAuth()

  const router = useRouter();
  const locale = router.locale;
  const id = router.query.id;
  
  const { t } = useTranslation();

  useEffect(() => {
    const getProduct = async () => {
     // setLoading(true);
     setPageLoading(true)
      //setProduct({});
      const data = await getDocument("articles", id);
      console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
      setProduct(data);
      setPageLoading(false)
     // setLoading(false);
    };

    if (id) getProduct();
  }, [id]);



  console.log("proooooo", product);

  function parseTimestamp(timestamp, format = "YYYY-MM-DD") {
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    const formattedDate = dayjs(date).format(format);
    return formattedDate;
  }

  return (
    <MainLayout>

      {product?.title && (
        <div
        
     

        className="mt-12 w-full arabic md:mt-16 px-4 md:px-20 font-Jost text-[#121212]">
          <span className=" flex flex-row items- space-x-3 items-center">
            <Link href="/">
              <p className=" text-[#121212] font-normal text-base">{t('home')}</p>
            </Link>
            <img className="w-4 h-4" src="/vector.svg" alt="" />
            <Link href="/articles">
              <p className=" text-[#121212] font-normal text-base arabic">{t('sigleArticle')}</p>
            </Link>
          </span>
          <div className=" w-full flex flex-col items-center justify-center mt-8">
            <p className=" font-medium text-2xl md:text-3xl text-center md:px-[10%]">
              {locale === "en" ? product.title : product?.titlear}
            </p>
            <p className=" font-normal text-lg md:text-xl text-center mt-3">
              {parseTimestamp(product?.timeStamp)}
            </p>
            {product?.images?.length > 0 &&
              product?.images?.map((img, index) => {
                return (
                  <div
                  key={index}
                    style={{
                      backgroundImage: `url(${product?.images[index]})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"
                  ></div>
                );
              })}
            {/* <div style={{backgroundImage:`url(${product?.images[0]})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div> */}

            <p
              dir={locale === "en" ? "ltr" : "rtl"}
              className=" text-base text-[#676767] font-normal py-8 border-b border-[#EAEBF0]"
            >
              {parse(locale === "en" ? product.desc : product?.descar)}
            </p>
          </div>
        </div>
      )}

    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  return {
    revalidate: 1,
    props: {
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
};
