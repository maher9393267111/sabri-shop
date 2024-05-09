import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";
import CategoriesMain from '@/components/admin/category/Categories';


const All = ({}) => {

    const { pageLoading, setPageLoading } = useAuth();

    const [cats, setCats] = useState([]);
    // const [loacding, setLoading] = useState(true);
  
    useEffect(() => {
      const getArticles = async () => {
        // setLoading(true);
        setPageLoading(true);
        
        const data = await getDocumentsOrder(
          "cats",
          orderBy("timeStamp", "asc")
        );
  
        console.log(data, "fetch cats ====>>>>");
        setCats(data);
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
            <CategoriesMain
            cats={cats}
            />
        </div>
    );
}

export default All;



// serverside
//     All.getInitialProps = async (context) => {
//     const Categories = await getDocuments("cats"); //  []
  
  
//     console.log("data", Categories);
  
  
//     return {
//       // props from serverside will go to props in clientside
//       cats: Categories,
//     };
//   };
  
  
  