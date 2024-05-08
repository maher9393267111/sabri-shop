import React, { useState, useEffect } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "@/functions/firebase/getData";
import {
  Button,
  Form,
  Upload,
  message,
  Input,
  Select,
  Switch,
  InputNumber,
} from "antd";
const { TextArea } = Input;

import Image from "next/image";

const ProductForm = ({
  onFinish,
  initialValues,
  files,
  setFiles,
  cats,
  subcats,
  isupdate = false,
}) => {
  const [images, setImages] = useState(initialValues?.images || []);

  const [offerToggle, setOfferToggle] = useState(
    initialValues?.isoffer || false
  );

  const onChange = (checked) => {
    setOfferToggle(checked);
  };


  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);

    console.log(selectedCategory)


  };


  //   onChange={handleCategoryChange}



  return (
    <div className=" w-[80%] mx-auto ">
      <div className=" w-full md:w-[70%] border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
              images,
            })
          }
          initialValues={{
            title: initialValues?.title || "",
            titlear: initialValues?.title || "",
            titletr: initialValues?.title || "",
            category: initialValues?.category || "",
            subcategory: initialValues?.subcategory || "",
            price: initialValues?.price || 0,
            desc: initialValues?.desc || "",
            descar: initialValues?.descar || "",
            desctr: initialValues?.desctr || "",
            instock: initialValues?.instock || true,
            images: initialValues?.images || [],
            video: initialValues?.video || "",
            isoffer: initialValues?.isoffer || false,
            discount: initialValues?.discount || 0,
            offerdesc: initialValues?.offerdesc || "",
          }}
        >
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            <Form.Item name="title" label="English - Title">
              <Input />
            </Form.Item>

            <Form.Item name="titlear" label="Arabic - Title">
              <Input />
            </Form.Item>

            <Form.Item name="titletr" label="Turkish- Title">
              <Input />
            </Form.Item>
          </div>

          <Form.Item name="desc" label="English Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item name="descar" label="Arabic Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item name="desctr" label="Turkish Description">
            <TextArea rows={4} />
          </Form.Item>

          <div className=" grid gap-3 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
            {/* -----category--- */}
            <Form.Item name="category" label="category">
              <Select  onChange={handleCategoryChange} placeholder="Select Category">
                {cats?.map((category) => {
                  return (
                    <Select.Option key={category?.id} value={category?.title}>
                      {category?.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            {/* -----subcategory--- */}
            <Form.Item name="subcategory" label="subcategory">
              <Select placeholder="Select SubCategory">
                {subcats?.filter(
    (subcategory) => subcategory.category === selectedCategory
  ).map((subcat) => {
                  return (
                    <Select.Option key={subcat?.id} value={subcat?.title}>
                      {subcat?.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <div className=" flex  md:col-span-2 gap-2 items-center justify-center md:justify-start">
              {/* ----Price--- */}

              <Form.Item name="price" label="Price">
                <InputNumber min={0} />
              </Form.Item>

              {/* ----InStock----- */}

              <Form.Item name="instock" label="InStock">
                <Switch
                  // checked="true"
                  defaultChecked
                  className=" bg-red-400 "
                />
              </Form.Item>

              {/* ----isoffer----- */}

              <Form.Item name="isoffer" label="IsOffer">
                <Switch
                  checked={offerToggle}
                  // defaultChecked
                  className=" bg-red-400 "
                  onChange={onChange}
                />
              </Form.Item>
            </div>
          </div>
          {offerToggle ? (
            <div className="flex-col flex md:flex-row md:gap-12 ">
              {/* ----offerDesciption--- */}

              <Form.Item
                className="md:w-[70%]"
                name="offerdesc"
                label="OfferDesc"
              >
                <TextArea rows={2} />
              </Form.Item>

              {/* ----Discount--- */}

              <Form.Item name="discount" label="Discount">
                <InputNumber min={0} />
              </Form.Item>
            </div>
          ) : null}

          {/* -----images upload----- */}

          <div>
            <Upload
              accept="image/*"
              multiple
              // files is data of images will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
              onRemove={(file) => {
                console.log("fileDATA", file);
                setFiles((prev) => {
                  const index = prev.indexOf(file);
                  const newFileList = prev.slice();
                  newFileList.splice(index, 1);
                  return newFileList;
                });

                console.log("files", files);
              }}
            >
              Upload Images {files?.length}
            </Upload>
          </div>

          {/* -----show product images {update product} ---- */}

          <div className="flex flex-wrap gap-3 mt-2 ">
            {images?.map((data, index) => (
              <div key={index}>
                <img src={data} className="w-20 h-20 rounded-full " />
                <h1
                  onClick={() => {
                    // prev all previous images
                    setImages((prev) => {
                      // all images put into new array
                      const temp = [...prev];
                      // delete  image with clicked index
                      temp.splice(index, 1);
                      // return this new array after delete clicked image
                      return temp;
                    });
                  }}
                  className="text-center cursor-pointer text-red-600"
                >
                  remove
                </h1>
              </div>
            ))}
          </div>

          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
