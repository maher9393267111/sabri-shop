import Layout from "@/components/layout/index";
import { doc, getDoc } from "firebase/firestore";
import { getDocument } from "@/functions/firebase/getData";
import { db } from "@/functions/firebase";
//  import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import {useState ,useEffect ,useRef} from 'react'
import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { calculateDiscountedPrice } from "@/functions/firebase/getData";

import { Carousel, message, Image } from 'antd'
const NFT = ({}) => {



const [product, setProduct] = useState({});
const [images ,setImages] = useState([])
console.log("🎭🎭🎭>", product.title);
//  const [loacding, setLoading] = useState(false);
const {pageLoading, setPageLoading} = useAuth()
const {t}= useTranslation()

const router = useRouter();
const locale = router.locale;
const id = router.query.id;

//const { t } = useTranslation();

useEffect(() => {
  const getProduct = async () => {
   // setLoading(true);
   setPageLoading(true)
    //setProduct({});
    const data = await getDocument("products", id);

if (data){



}


    console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
setProduct(data)


    console.log("PRODUCT" ,data?.image)


    setPageLoading(false)
   // setLoading(false);
  };

  if (id) getProduct();
}, [id]);



const carouselRef =  useRef()
function slider(index) {
  carouselRef?.current.goTo(index)
}



const dir =router.locale === 'ar' && 'rtl'

if (!product ){

    return <div><h1>No Product Founded</h1></div>
}



const imagesData = product && product.images ? [product?.image, ...product?.images] : [];

console.log("IMAGESDATA ---><" , imagesData)


    return (
        <Layout>
          <div>
      {/* <NextSeo
        title={product?.title + " | Sandalye" + " | Ayka Chair"}
        description={"İnegöl Sandalye " + product?.title + " Model"}
        canonical={router.asPath}
        openGraph={{
          url: `https://aykachair.com.tr/sandalye/${product?.id}`,
          title: product?.title + " | Sandalye" + " | Ayka Chair",
          description: "İnegöl Sandalye " + product?.title + " Model",
          images: [
            {
              url: product?.images[0] || null,
              alt: product?.title,
              type: "image/jpeg",
            },
          ],
          site_name: "Ayka Chair",
        }}
        twitter={{
          handle: "@aykachair",
          site: "@aykachair",
          cardType: "summary_large_image",
        }}
      /> */}
      <div>

        {product?.images &&
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
              <div className="relative order-2 grid grid-cols-1 gap-4 md:order-none">


                {/* <div className="aspect-w-1 aspect-h-1 ">
                  <Image
                    className="bg-grad rounded-xl"
                    src={product?.images[0]}
                    alt={product?.title}
                    layout="responsive"
                    width={"700"}
                    height={"700"}
                    objectFit="cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                  {product?.images?.map((image ,index) => (
                    <div
                      key={index}
                      className="aspect-w-1 aspect-h-1 hover:z-50"
                    >
                      <img
                        className="rounded-xl md:!w-[288px] md:!h-[200px] border object-cover transition hover:scale-150 "
                        src={image}
                      />
                    </div>
                  ))}
                </div>
 */}



<div className='g-m-b-30'>
              <Carousel autoplay={true} ref={carouselRef} dots={true}>
                {
                  imagesData?.map((item, index) => (
                    <div key={index}>
                      <Image
                     
                        src={item}
                        alt=""
                        preview={true}
                        className=' object-cover !w-full  !overlflow-hidden !h-[500px] '
                        // rootClassName='g-w-100per g-m-b-12'
                        fallback="data:image/png;base64,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"
                      />
                    </div>
                  ))
                }
              </Carousel>
</div>

<ul className=" grid grid-cols-4">
              {
                imagesData?.map((item , index) => (
                  <li key={index} onClick={() => slider(index)} className='g-c-p'>
                    <Image
                      
                      src={item}
                      alt=""
                      preview={false}
                      className=' object-cover min-w-[25%] !w-full  !overlflow-hidden !h-[100px] '
                      // rootClassName=' object-cover   !overlflow-hidden !h-[100px] '
                      fallback="data:image/png;base64,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"
                    />
                  </li>
                ))
              }
            </ul>






              </div>
              <div className="top-8 block md:sticky">

              <div dir={dir} className="mt-8 gap-3 flex lg:mt-0 lg:flex-shrink-0">
{/* 
<div className="inline-flex rounded-md shadow">
    
      <p className="inline-flex arabic items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-black ">
        {product?.price}$
      </p>
    
  </div> */}

  
  <div className="inline-flex rounded-md shadow">
 
      <a
      href="https://wtspee.com/905379732131" target="_blank"
      className="inline-flex arabic items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-black ">
      {t('whatsapptitle')}
      </a>
    
  </div>
  <div className="ml-3 inline-flex rounded-md shadow">
    <Link legacyBehavior href="/products">
      <a className="inline-flex arabic items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-600 hover:bg-rose-50">
        {t('shopgo')}
      </a>
    </Link>
  </div>
</div>




                <h1 dir={dir} className="text-5xl arabic font-bold  mt-12">{ router?.locale === 'ar' ?  product?.titlear : router.locale === 'en' ? product?.title : product?.titletr }</h1>
                <section className="group relative mt-4">
                  {product?.desc && (
                    <article dir={dir} className="prose arabic text-xl max-w-none pb-6">
                        { router?.locale === 'ar' ?  product?.descar : router.locale === 'en' ? product?.desc : product?.desctr }
                      {/* <RichText content={chair.content.raw} /> */}


                      <div  dir={dir} className="inline-fle rounded-md shado">
    
    <p className="inline-flex arabi gap-3 items-center  justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-xl mt-12 font-medium text-black ">
   { router?.locale === 'ar' ?  "السعر" : router.locale === 'en' ? "Price" : "Fiyat"}:
     <span className={`${product?.isoffer && 'line-through'}`}>{product?.price} <span className="  font-serif">₺</span> </span> 

    {product?.isoffer  && <span className="">{calculateDiscountedPrice(product?.price ,product?.discount)} <span className="  font-serif">₺</span></span> }
    </p>
  
</div>


                    </article>





                  )}

                  


                  
                </section>
              </div>
            </div>
          </div>
        </section>
}
      </div>
    </div>
        
        
    </Layout>
    )
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




// const getNFTbyId = async (id) => {
//     const nftDocument = doc(db, `products`, id);
//     const nft = await getDoc(nftDocument);

//     if (!nft.exists()) {
//         return false;
//     }

//     return nft.data();
// }

// NFT.getInitialProps = async (ctx) => {
//     const nftData = await getNFTbyId(ctx.query.id)

//     return {
//         nft : nftData,
//     }
// }


export default NFT;