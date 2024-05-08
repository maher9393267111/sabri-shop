import React from "react";
import { useState } from "react";
import { Table, Space, Button } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import { handleDelete } from "@/functions/firebase/getData";
import Image from "next/image";

const ProductTable = ({ products }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns = [
    {
      title: "Products",
      // same name from database   // category={title ,....}
      dataIndex: "title",

      filters: [
        {
          text: "Used Laptops",
          value: "Used Laptops",
        },
        {
          text: "iphone 14",
          value: "iphone 14",
        },
      ],
      filteredValue: products.name || null,
      onFilter: (value, record) => {
        console.log("record", record, value);
        record.desc.includes(value);
      },
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Category",
      // same name from database   // category={title ,....}
      dataIndex: "category",
    },
    {
      title: "SubCategory",
      // same name from database   // category={title ,....}
      dataIndex: "subcategory",
    },
    
    {
      title: "Is Offer",
      // same name from database   // category={title ,....}
      render: (record) => {
        return (
          <div>
          {record.isoffer ? <h1 className=" text-green-500"> True</h1> : <h1 className=" text-red-500"> False</h1> }
          </div>
          )
    }},


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
                  onClick={() => handleDelete("products", record, true)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>

              <div>
                <Link href={`/admin/product/edit/${record?.id}`}>
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
        <Button onClick={setAgeSort}>Sort age</Button>
                 <Button onClick={clearFilters}>Clear filters</Button>
                 <Button onClick={clearAll}>Clear filters and sorters</Button>
              
      </Space>
      <Table onChange={handleChange} columns={columns} dataSource={products} />
    </div>
  );
};

export default ProductTable;
