import React from "react";
import SubCategoryForm from "./galleryForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection,serverTimestamp } from "firebase/firestore";
import { uploadImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const  AddGalleryMain = ({}) => {
  const [file, setFile] = useState("");
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = false;

  const onFinish = async (values) => {
    console.log("values-->", values);
    console.log("file", file);

    if (!file) {
      message.error("Please select image");
      return; // stoppppp progress the function
    } else {
      values.image = await uploadImages(file, true, "gallery"); // result is image link from firebase/storage
      values.timeStamp = serverTimestamp()
      await addDoc(collection(db, "gallery"), values);

      message.success("Gallery image added  successfully");
    }
  };

  return (
    <AdminLayout>
      <SubCategoryForm {...{ onFinish, file, setFile }} />
    </AdminLayout>
  );
};

export default AddGalleryMain;
