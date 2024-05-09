import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";
import SubCategoriesMain from "@/components/admin/gallery/galleries";

const AllGalleryPage = ({}) => {

  const { pageLoading, setPageLoading } = useAuth();

  const [subcats, setSubCats] = useState([]);
  // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // setLoading(true);
      setPageLoading(true);
      
      const data = await getDocumentsOrder(
        "gallery",
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

export default AllGalleryPage;

// serverside
// AllGalleryPage.getInitialProps = async (context) => {
//   const SubCategories = await getDocuments("gallery"); //  []

//   console.log("data💡", SubCategories);

//   return {
//     // props from serverside will go to props in clientside
//     subcats: SubCategories,
//   };
// };
