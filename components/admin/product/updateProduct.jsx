import React, { useEffect, useState } from "react";


import { useRouter } from "next/router";
import { getDocument } from "@/functions/firebase/getData";
import { useAuth } from "@/functions/context";
import ProductForm from "./productForm";
import { message } from "antd";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/functions/firebase";
import AdminLayout from "../AdminLayout";


import { uploadImages, deleteImages ,deleteImage } from "@/functions/firebase/getData";
const UpdateProductMain = ({ product, cats, subcats }) => {
  const { query, replace } = useRouter();
  const { id } = query;
  //const [product, setProduct] = useState(null);
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");


  const isupdate = true;
  const { setPageLoading, pageLoading } = useAuth();


  const initialValues = product;


 


  const onFinish = async (values) => {
    try {


      console.log("?????-?????-" + values ,"file" , file ,"init" ,initialValues?.image);


      setPageLoading(true);

      if (!file && !values?.image) {
        message.error("Please select main image");
        
        return; // stoppppp progress the function
      } 


      else if(file && values?.image){

        if (initialValues?.image){
        await deleteImage(initialValues?.image);

        }

        message.info("image deleted");
        values.image = await uploadImages(file, true, "product");
        message.success("image Uploaded Sucessfully file true init true");

    }



    else if(file && !values?.image){
      values.image = await uploadImages(file, true, "product");

      
      if (initialValues?.image){
        await deleteImage(initialValues?.image);

        }

      


      message.success("image Uploaded Sucessfully NOT init  file true");

  }



  if (file || values?.image){

    console.log("INITI IMAGE --->" , values?.image)

      // delete images
      const imagesToDelete = product.images.filter(
        (image) => !values.images.includes(image)
      );
      await deleteImages(imagesToDelete);
      const newImagesUploaded = await uploadImages(files);
      values.images = [...values.images, ...newImagesUploaded];
      await updateDoc(doc(db, "products", id), values);


      message.success("Product Updated Successfully");

    }


      // router.push("/admin?tab=1");
    } catch (error) {
      message.error(error.message);
    } finally {
      setPageLoading(false);
    }
  };


  return (
    <AdminLayout>
      <ProductForm
        {...{
          initialValues,
          cats,
          subcats,
          files,
          setFiles,
          isupdate,
          onFinish,
          file ,setFile
        }}
      />
    </AdminLayout>
  );
};


export default UpdateProductMain;

