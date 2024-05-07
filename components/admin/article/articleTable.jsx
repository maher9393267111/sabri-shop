import React from "react";
import { useState } from "react";
import { Table, Space, Button ,Message } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import { handleDelete ,deleteImages } from "@/functions/firebase/getData";
import { db } from "@/functions/firebase";
import { deleteDoc ,doc } from "@firebase/firestore";
import Image from "next/image";

const ArticleTable = ({ products }) => {
  
   
const [currentProducts , setCurrentProducts] = useState(products)


  const deletePost = async (article) =>{ 
    
    await deleteDoc(doc(db, "articles",article?.id))
    await  deleteImages(article?.images)
    Message.success(' article deleted successfully')

   let filtered = products?.filter((item)=>item.id !== article.id)
  
   setCurrentProducts(filtered)




}


  const columns = [
    {
      title: "English title",
      // same name from database   // category={title ,....}
      dataIndex: "title",
    },

    {
      title: "Arabic Title",
      // same name from database   // category={title ,....}
      dataIndex: "titlear",
    },

    {
      title: "Image",
      // single category {record} --> record.image.url === category.image.url
      render: (record) => {
        return (
          <div className="flex justify-start w-[100%]  gap-4 ">
            {/* {record.images.map((img, index) => (
              <Image
                width={50}
                height={50}
                className="  relative  w-24 h-24 object-cover object-center rounded-full"
                src={img}
                key={index}
                alt=""
              />
            ))} */}
            <Image
              width={50}
              height={50}
              className="  relative  w-24 h-24 object-cover object-center rounded-full"
              src={record.images[0]}
              alt=""
            />
          </div>
        );
      },
    },

    {
      title: "Actions",
      // 💡💡  render to make style in table in single category
      // single category data ==> title , image , id
      render: (record) => {
        return (
          <>
            <div className=" flex gap-4  items-center">
              <div>
                <AiFillDelete
                  // send collection name and single category data to delete
                  onClick={() =>
                    deletePost(record)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>

              <div>
                <Link href={`/admin/article/edit/${record?.id}`}>
                  <AiFillEdit
                    className="hover:text-blue-700 text-blue-500 cursor-pointer"
                    size={"25"}
                  />
                </Link>
              </div>

          
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className=" w-[90%]  md:w-[70%] mx-auto">
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        
      </Space>
      <Table  columns={columns} dataSource={currentProducts} />
    </div>
  );
};

export default ArticleTable;
