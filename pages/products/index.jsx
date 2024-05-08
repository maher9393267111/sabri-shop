import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductCard from "@/components/Main/productCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProductsPage({
  products,
   subcats,
   subcategory

}) {
  console.log("ProductsPage"  ,subcategory);


  const router =useRouter()
  const {locale} = router

  const { t } = useTranslation();



  return (
    <Layout>

 
    <div className="scroll-smooth  mx-7">
     


{!subcategory &&
     <div className="mt-12">


     
     {subcats?.length && subcats?.length > 0 &&

<CategoryCard sub={true} data={subcats}/>

     }


</div>
}


<div>
  
</div>

{products?.length && products?.length > 0 && (

<div className="grid grid-cols-1 mt-12 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

  {products?.map((product ,index)=>{
return (
  
<ProductCard {...product} key={product?.id}/>

)


  })}



</div>



)}





    </div>
    </Layout>
  );
}





// serverside
ProductsPage.getInitialProps 

//export const getServerSideProps
 = async (context) => {
  let products = [];
  //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
  const category = context.query.category;
  const subcategory = context.query.subcategory;
  // step 1
  const search = context.query.search;

  //console.log("categoryyyyy", category);

  //console.log("subcategoryyyyy", subcategory);

  //    where("fieldname", "==", fieldValue)

  products = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "desc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    category
      ? where("category", "==", category)
      : subcategory
      ? where("subcategory", "==", subcategory)
      : null
  );



  const subcats = await getDocumentsOrder(
    "subcats",
    orderBy("timeStamp", "asc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    //contextquery.query  // null all subcategories , category parent te3 subcategories ( sub cat limited)
    category ? where("category", "==", category) : null
  );

 



  return {

   // props: {
    // props from serverside will go to props in clientside
    products: products,
    
    subcats:subcats,
    subcategory:subcategory
   // ...(await serverSideTranslations(context.locale, ["common"])),

  //  }

  
  };
};
