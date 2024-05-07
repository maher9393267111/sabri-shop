import React ,{useState ,useEffect} from 'react';
import UpdateProduct from '@/components/admin/article/updateProduct';
import { getDocument } from '@/functions/firebase/getData';
import Loader from '@/components/common/Loader';
import { useAuth } from '@/functions/context';
import { useRouter } from 'next/router';
const EditSubPage = ({}) => {


    const [product, setProduct] = useState({});
    console.log("🎭🎭🎭>", product.title);
  //  const [loacding, setLoading] = useState(false);
    const {pageLoading, setPageLoading} = useAuth()
  
    const router = useRouter();
    
    const id = router.query.id;
    
  console.log("IDDD" , id)
  
    useEffect(() => {
      const getProduct = async () => {
       // setLoading(true);
       setPageLoading(true)
        //setProduct({});
        const data = await getDocument("articles", id);
        console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
        setProduct(data);
        setPageLoading(false)
       // setLoading(false);
      };
  
      if (id) getProduct();
    }, [id]);
  

    if(pageLoading){
        return <Loader/>
    }



    return (
        <div>
            <UpdateProduct
            product={product}
          
            />
        </div>
    );
}


export default EditSubPage;



// serverside to fetch single catgory in serverside from firestore




// EditSubPage.getInitialProps = async (context) => {
 
//     // context.query.id ==> admin/category/edit/${context.query.id} in browser
//         const product = await getDocument("articles", context.query.id);
        
     
       

     
//         return {
//             product: product,
           
//         };
//       };