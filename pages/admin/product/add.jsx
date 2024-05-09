import React, { useState, useEffect } from "react";
import { Input, Box, Button, Stack } from "@chakra-ui/react";
import AddProductMain from "@/components/admin/product/addProduct";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { orderBy } from "@firebase/firestore";
import Loader from "@/components/common/Loader";

const AddProductPage = ({}) => {
  const [products, setProducts] = useState([]);
  const [subcats, setsubCats] = useState([]);
  const [cats, setCats] = useState([]);
  
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setPageLoading(true);
      let productsdata = [];

      productsdata = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "desc"),

        null
      );

      const categorydata = await getDocumentsOrder(
        "cats",
        orderBy("timeStamp", "asc"),

        null
      );



      const subcatsdata = await getDocumentsOrder(
        "subcats",
        orderBy("timeStamp", "asc"),

        null
      );

      setProducts(productsdata);
      setsubCats(subcatsdata);
      setCats(categorydata);
      setPageLoading(false);
    };
    getData();
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <div>
      <AddProductMain subcats={subcats} cats={cats} />
    </div>
  );
};

export default AddProductPage;

// serverside
// AddProductPage.getInitialProps = async (context) => {
//   const SubCategories = await getDocuments("subcats"); //  []
//   const Categories = await getDocuments("cats"); //  []

//   console.log("data SubCats💡", SubCategories);
//   console.log("data Cats💡", Categories);

//   return {
//     // props from serverside will go to props in clientside
//     subcats: SubCategories,
//     cats: Categories,
//   };
// };
