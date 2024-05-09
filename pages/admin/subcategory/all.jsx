import React from "react";
import SubCategoriesMain from "@/components/admin/subCategory/subCategories";

import { useState, useEffect } from "react";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";

const AllSubsPage = ({}) => {

  const { pageLoading, setPageLoading } = useAuth();

  const [subcats, setSubCats] = useState([]);
  // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // setLoading(true);
      setPageLoading(true);
      
      const data = await getDocumentsOrder(
        "subcats",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch slider ====>>>>");
      setSubCats(data);
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
      <SubCategoriesMain subcats={subcats} />
    </div>
  );
};

export default AllSubsPage;

// serverside
// AllSubsPage.getInitialProps = async (context) => {
//   const SubCategories = await getDocuments("subcats"); //  []

//   console.log("data💡", SubCategories);

//   return {
//     // props from serverside will go to props in clientside
//     subcats: SubCategories,
//   };
// };
