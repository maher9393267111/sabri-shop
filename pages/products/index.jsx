import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductCard from "@/components/Main/productCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import safeJsonStringify from "safe-json-stringify";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProductsPage({ products, subcats, subcategory }) {
  console.log("ProductsPage", subcategory);

  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation();

  return (
    <Layout>
      <div className="scroll-smooth  mx-7">
        {!subcategory && (
          <div className="mt-12">
            {subcats?.length && subcats?.length > 0 && (
              <CategoryCard sub={true} data={subcats} />
            )}
          </div>
        )}

        <div></div>

        {products?.length && products?.length > 0 && (
          <div className="grid grid-cols-1 mt-12 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product, index) => {
              return <ProductCard {...product} key={product?.id} />;
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

//serverside
//ProductsPage.getInitialProps =
export const getServerSideProps = async (context) => {

  try {
  let products = [];
  
  const category = context.query.category;
  const subcategory = context.query.subcategory;
 
  const search = context.query.search;


  products = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "desc"),

 
    category
      ? where("category", "==", category)
      : subcategory
      ? where("subcategory", "==", subcategory)
      : null
  );

  const subcats = await getDocumentsOrder(
    "subcats",
    orderBy("timeStamp", "asc"),


    category ? where("category", "==", category) : null
  );

  const productss = JSON.parse(
    safeJsonStringify(
      products?.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap,
      }))
    )
  );

  const subcatss = JSON.parse(
    safeJsonStringify(
      subcats?.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap,
      }))
    )
  );

  return {
    props: {
      // props from serverside will go to props in clientside
      products: products ? productss : [],

      subcats: subcats ? subcatss : [],
      subcategory: subcategory ? subcategory : null,
      // ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };

}

  catch (error) {
    console.log(error)
    return null
}




};
