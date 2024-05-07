import React, { useState, useEffect } from "react";

import MainLayout from "@/components/layout/index";
import parse from "html-react-parser";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
  getDocuments,
getDocumentsOrder,
} from "@/functions/firebase/getData";
import { orderBy, where } from "firebase/firestore";
import Loader from "@/components/common/Loader";
import { useAuth } from "@/functions/context";
import Link from 'next/link'
import { Zoom ,Fade } from "react-awesome-reveal";

  import { useRouter } from "next/router";

export default function Recipes() {


  const {pageLoading, setPageLoading} = useAuth()
  
  
 
    const { t } = useTranslation();
    const {locale}= useRouter();




  const [products, setProducts] = useState([]);
 // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
     // setLoading(true);
     setPageLoading(true)
      setProducts([]);
      const data = await getDocumentsOrder(
        "articles",
        orderBy("timeStamp", "asc"),
       
      );

      console.log(data, "fetch products ====>>>>");
      setProducts(data);
      setPageLoading(false)
    //  setLoading(false);
    };
    getArticles();
  }, []);

  
  return (
    <MainLayout>

{/* {loacding ? <Loader/> : */}

{/* <Fade direction="right">  */}
<div
 


className="min-h-[80vh] " dir={ locale === 'en' ? 'ltr' :'rtl'}>
    
<div className=" px-4 md:px-20 py-8 md:py-16 flex justify-center  items-center text-[#121212] flex-col">
  <Fade direction="top">

  
            <p className=" text-center  font-Jost text-2xl md:text-5xl font-medium text-primar shimmer mb-4 arabic">{t('articlesTitle')}</p>
            </Fade>
            {/* <p className=" text-center text-[#121212CC] font-Jost text-base md:text-xl mt-2">
              We solve the world's most serious and complex medical challenges.</p> */}

            <div className=" w-full arabic  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {products?.map((item, index) => (
                    <div key={index} className=" w-full border border-[#EAEBF0] rounded-[10px] mt-6 md:mt-11 flex flex-col relative">
                        <div style={{backgroundImage:`url(${item.images[0]})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[220px] bg-[#242424] rounded-t-[10px]">
                        </div>
                        <div className=" px-8 py-6">
                            <p className=' font-Jost text-[#5F6D7E] text-sm font-medium'>{item.date}</p>
                            <p className=' mt-5 text-xl md:text-[22px] pb-9 md:leading-[30px] font-Jost font-semibold'>{locale === 'en' ?  item.title :  item?.titlear}</p>
                            {/* <p className=' mt-4 text-[#121212CC] text-base font-normal font-Jost pb-8'>
                            {parse( locale === 'en' ?  item?.desc.slice(0,12) :  item?.descar.slice(0,12  ))}
                            </p> */}
                            <Link href={`/articles/single?id=${item?.id}`}><button className=' flex items-center space-x-2 absolute bottom-6'>
                                <p className=' gradient-text text-[18px] font-Jost font-semibold text-primary'>
                                  
                                  {locale === 'en' ? 'Learn more' : 'تفاصيل المقالة'}
                                  
                                  </p> 
                                {/* <img src={ arrLeft } className='' alt="" /> */}
                            </button></Link> 
                        </div>
                    </div>
                ))}            
            </div>

            {/* <Link href='/blog'>
            <button className=' bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] px-7 md:px-[18px] py-2 md:py-3 rounded-[50px] mt-8 md:mt-16 text-white font-Jost font-semibold text-sm md:text-base'>Show more</button>
            </Link> */}
        </div>
    
    
    </div>

{/* </Fade> */}

    
    {/* } */}





   
    </MainLayout>
  );
}

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};
