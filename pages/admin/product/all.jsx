

import ProductsMain from "@/components/admin/product/products";
import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";
const AllProductsPage = ({}) => {
  const { pageLoading, setPageLoading } = useAuth();

  const [products, setProducts] = useState([]);
  // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // setLoading(true);
      setPageLoading(true);
      setProducts([]);
      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch products ====>>>>");
      setProducts(data);
      setPageLoading(false);
      //  setLoading(false);
    };
    getArticles();
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ProductsMain products={products} />
    </div>
  );
};

export default AllProductsPage;

// serverside
// AllProductsPage.getInitialProps = async (context) => {
//   const Products = await getDocuments("products"); //  []

//   console.log("productsData", Products);

//   return {
//     // props from serverside will go to props in clientside
//     products: Products,
//   };
// };
