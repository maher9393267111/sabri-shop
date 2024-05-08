import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import BannerSlider from "@/components/Main/BannerSlider";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductSlider from "@/components/Main/productsSlider";
import { NextSeo } from "next-seo";
// import Service from "@/components/Main/Services";
// import SectionOne from "@/components/Main/SectionOne";
// import Travels from "@/components/Main/Travels";
// import AbourSection from "@/components/Main/AboutUsSection";

export default function Index({}) {
  const { t } = useTranslation("common");

  const router = useRouter();

  const newproductstitle =
    router.locale === "ar"
      ? "احدث المنتجات"
      : router.locale === "en"
      ? "New Products"
      : "Yeni ürünler";
  const discounttitle =
    router.locale === "ar"
      ? "التخفيضات"
      : router.locale === "en"
      ? "Offers Products"
      : "indirimler";

  console.log("Lodale", router.locale, router);
  //  const aboutus = t("aboutus", { returnObjects: true });
  //  console.log("links", aboutus);

  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [news, setNews] = useState([]);
  const [sliders, setSliders] = useState([]);
  // const [loacding, setLoading] = useState(true);
  //subcategory"
  useEffect(() => {
    const getCats = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "cats",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch cats ====>>>>");
      setCats(data);
      // setPageLoading(false)
    };

    const getProducts = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch PRODUCCCCCCCCCCCC====>>>>");
      setProducts(data);
      // setPageLoading(false)
    };

    const getOffers = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        where("isoffer", "==", true)
      );

      console.log(data, "fetch PRODUCCCCCCCCCCCC====>>>>");
      setOffers(data);
      // setPageLoading(false)
    };

    const getFeatures = async () => {
      // setLoading(true);

      setProducts([]);
      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        null,
        2
      );

      console.log(data, "fetch Propertirs 3====>>>>");
      setNews(data);
    };

    const getSliders = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "slider",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch cats ====>>>>");
      setSliders(data);
      // setPageLoading(false)
    };

    getSliders();
    getFeatures();

    getCats();
    getProducts();
    getOffers();
  }, []);

  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>

<NextSeo title="Tedili  | Hakkımızda | Tedili Mermer" />


      <div className="scroll-smooth mb-16  ">
        {sliders && sliders?.length > 0 && <BannerSlider data={sliders} />}

        {cats && cats?.length > 0 && (
          <div className=" mx-4 mt-12 md:mx-8">
            <CategoryCard title={t("sectionstitle")} data={cats} />
          </div>
        )}

        <div>

      

        {offers && offers?.length > 0 && (
          <ProductSlider title={discounttitle} data={offers} />
        )}

        {news && news?.length > 0 && (
          <ProductSlider title={newproductstitle} data={news} />
        )}

</div>

        {/* <BannerSlider/>

<Service/>

<SectionOne/>

<Travels/>

<AbourSection/> */}
      </div>
    </Layout>
  );
}

// serverside

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};

// Index.getInitialProps = async (context) => {
//   let products = [];
//   //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
//   const category = context.query.category;
//   const subcategory = context.query.subcategory;
//   // step 1
//   const search = context.query.search;

//   //console.log("categoryyyyy", category);

//   //console.log("subcategoryyyyy", subcategory);

//   //    where("fieldname", "==", fieldValue)

//   products = await getDocumentsOrder(
//     "products",
//     orderBy("timeStamp", "desc"),

//     //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
//     category
//       ? where("category", "==", category)
//       : subcategory
//       ? where("subcategory", "==", subcategory)
//       : null
//   );

//   return {
//     // props from serverside will go to props in clientside
//     products: products,

//   };
// };
