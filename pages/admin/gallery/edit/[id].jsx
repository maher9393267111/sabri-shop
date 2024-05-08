import React from 'react';
import  UpdateSubCategoryMain from '@/components/admin/gallery/updaGallery';
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


export default EditSubPage;




// serverside
EditSubPage.getInitialProps = async (context) => {
    
    const subcat = await getDocument("gallery", context.query.id);
    
    console.log("data", Categories);
 
    return {
   
      subcat: subcat,
    };
  };
