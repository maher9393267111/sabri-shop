import Layout from "@/components/layout/index";
import { doc, getDoc } from "firebase/firestore";
import { getDocument } from "@/functions/firebase/getData";
import { db } from "@/functions/firebase";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import {useState ,useEffect} from 'react'
import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const NFT = ({}) => {



const [product, setProduct] = useState({});
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
    console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
    setProduct(data);
    setPageLoading(false)
   // setLoading(false);
  };

  if (id) getProduct();
}, [id]);





const dir =router.locale === 'ar' && 'rtl'

if (!product ){

    return <div><h1>No Product Founded</h1></div>
}




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


                <div className="aspect-w-1 aspect-h-1 ">
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
    
    <p className="inline-flex arabic items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-xl mt-12 font-medium text-black ">
   { router?.locale === 'ar' ?  "السعر" : router.locale === 'en' ? "Price" : "Fiyat"}:   {product?.price}$
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