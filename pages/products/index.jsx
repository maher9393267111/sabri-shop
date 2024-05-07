import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";



export default function ProductsPage({
  products,

}) {
  console.log("ProductsPage" + products);

 


  return (
    <div className="scroll-smooth">
     
     
    </div>
  );
}

// serverside
ProductsPage.getInitialProps = async (context) => {
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

 



  return {
    // props from serverside will go to props in clientside
    products: products,

  
  };
};
