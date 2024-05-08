import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { useAuth } from "@/functions/context";
import { useState,useEffect } from "react";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductCard from "@/components/Main/productCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import safeJsonStringify from "safe-json-stringify";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Loader from "@/components/common/Loader";

export default function ProductsPage({ }) {
  //console.log("ProductsPage", subcategory);

  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation();


  const [products, setProducts] = useState([]);
  const [subcats ,setsubCats] = useState([])
  const [subcategory ,setSubCategory] =useState(null)
 const [pageLoading, setPageLoading] = useState(true);


 const category = router.query.category;
 const subcategorydata = router.query.subcategory;

 const search = router.query.search;


  useEffect(() => {
    const getData = async () => {
      setPageLoading(true)
      let productsdata = []

    
    
      productsdata = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "desc"),
    
     
        category
          ? where("category", "==", category)
          : subcategorydata
          ? where("subcategory", "==", subcategorydata)
          : null
      );
    
      const subcatsdata = await getDocumentsOrder(
        "subcats",
        orderBy("timeStamp", "asc"),
    
    
        category ? where("category", "==", category) : null
      );
   
      setProducts(productsdata)
      setsubCats(subcatsdata)
      setSubCategory(subcategorydata)
setPageLoading(false)

    
    };
    getData();
  }, [subcategorydata ,category]);



if (pageLoading )
  {
    return <Loader/>
  }



  return (
    <Layout>
      
      <div className="scroll-smooth  mx-7">
        {!subcategorydata  && (
          <div dir={locale === 'ar' && 'rtl'} className="mt-12">
            {subcats?.length && subcats?.length > 0 && (
              <CategoryCard title={t("subsectionstitle")} sub={true} data={subcats} />
            )}
          </div>
        )}

        <div className="mb-16">

        {products?.length && products?.length > 0 ? (
          <div className="grid grid-cols-1 mt-12 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product, index) => {
              return <ProductCard {...product} key={product?.id} />;
            })}
          </div>
        )
        :
        
        <div className=" text-center text-3xl   font-semibold text-red-500 arabic my-28">
          No Products Found
        </div>


        
        }

</div>


      </div>



    </Layout>
  );
}



export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};





//serverside
//ProductsPage.getInitialProps =
// export const getServerSideProps = async (context) => {

//   try {
//   let products = [];
  
//   const category = context.query.category;
//   const subcategory = context.query.subcategory;
 
//   const search = context.query.search;


//   products = await getDocumentsOrder(
//     "products",
//     orderBy("timeStamp", "desc"),

 
//     category
//       ? where("category", "==", category)
//       : subcategory
//       ? where("subcategory", "==", subcategory)
//       : null
//   );

//   const subcats = await getDocumentsOrder(
//     "subcats",
//     orderBy("timeStamp", "asc"),


//     category ? where("category", "==", category) : null
//   );

//   const productss = JSON.parse(
//     safeJsonStringify(
//       products?.map((docSnap) => ({
//         id: docSnap.id,
//         ...docSnap,
//       }))
//     )
//   );

//   const subcatss = JSON.parse(
//     safeJsonStringify(
//       subcats?.map((docSnap) => ({
//         id: docSnap.id,
//         ...docSnap,
//       }))
//     )
//   );

//   return {
//     props: {
//       // props from serverside will go to props in clientside
//       products: products ? productss : [],

//       subcats: subcats ? subcatss : [],
//       subcategory: subcategory ? subcategory : null,
//       // ...(await serverSideTranslations(context.locale, ["common"])),
//     },
//   };

// }

//   catch (error) {
//     console.log(error)
//     return null
// }




// };
