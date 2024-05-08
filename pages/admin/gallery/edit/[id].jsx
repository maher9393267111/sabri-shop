import React from 'react';
import  UpdateSubCategoryMain from '@/components/admin/gallery/updaGallery';
import { getDocuments,getDocument } from '@/functions/firebase/getData';
const EditGalleryPage = ({subcat}) => {
    return (
        <div>
            <UpdateSubCategoryMain 
         
            subcat={subcat}

            />
        </div>
    );
}


export default EditGalleryPage;




// serverside
EditGalleryPage.getInitialProps = async (context) => {
    
    const subcat = await getDocument("gallery", context.query.id);
    
    console.log("data");
 
    return {
   
      subcat: subcat,
    };
  };
