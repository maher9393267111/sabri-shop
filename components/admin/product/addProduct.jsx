import React from "react";
import ProductForm from "./productForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection ,serverTimestamp } from "firebase/firestore";
import { uploadImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const AddProductMain = ({ cats, subcats, products }) => {
  const [files, setFiles] = useState([]);
  
  
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;


  const onFinish = async (values) => {
    console.log("values-->", values);
    


    /////urls [array of images]
    values.images = await uploadImages(files);
    


    values.timeStamp = serverTimestamp()


    await addDoc(collection(db, "products"), values);


    message.success(`Product Uploaded Successfully`);
  };


  return (
    <AdminLayout>
      <ProductForm {...{ cats, subcats, onFinish, files, setFiles }} />
    </AdminLayout>
  );
};


export default AddProductMain;
