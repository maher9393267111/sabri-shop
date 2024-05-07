import React from "react";
import ProductForm from "./articleForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection ,serverTimestamp } from "firebase/firestore";
import { uploadImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const AddArticleMain = ({  products }) => {
  const [files, setFiles] = useState([]);
  const [videoFile,setVideoFile] = useState("");
  
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;


  const onFinish = async (values) => {
    console.log("values-->", values);
    


    /////urls [array of images]
    values.images = await uploadImages(files);
    
    
    if (videoFile) {
      values.video = await uploadImages(videoFile,true)
      message.success("Video Uploaded Successfully")
    }

    values.timeStamp = serverTimestamp()


    await addDoc(collection(db, "articles"), values);


    message.success(`Product Uploaded Successfully`);
  };


  return (
    <AdminLayout>
      <ProductForm {...{ onFinish, files, setFiles,videoFile,setVideoFile }} />
    </AdminLayout>
  );
};


export default AddArticleMain;
