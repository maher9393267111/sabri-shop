import React from 'react';
import  UpdateSubCategoryMain from '@/components/admin/slider/updaSider';
import { getDocuments,getDocument } from '@/functions/firebase/getData';
const EditSliderPage = ({subcat}) => {
    return (
        <div>
            <UpdateSubCategoryMain 
         
            subcat={subcat}

            />
        </div>
    );
}


export default EditSliderPage;




// serverside
EditSliderPage.getInitialProps = async (context) => {
    
    const subcat = await getDocument("slider", context.query.id);
    
    console.log("data", Categories);
 
    return {
   
      subcat: subcat,
    };
  };
