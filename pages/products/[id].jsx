import Layout from "@/components/layout/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/functions/firebase";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
const NFT = ({nft:product}) => {
console.log("nft" ,product)
const router =useRouter()

const dir =router.locale === 'ar' && 'rtl'


    return (
        <Layout>
          <div>
      <NextSeo
        title={product?.title + " | Sandalye" + " | Ayka Chair"}
        description={"İnegöl Sandalye " + product?.title + " Model"}
        canonical={router.asPath}
        openGraph={{
          url: `https://aykachair.com.tr/sandalye/${product?.id}`,
          title: product?.title + " | Sandalye" + " | Ayka Chair",
          description: "İnegöl Sandalye " + product?.title + " Model",
          images: [
            {
              url: product?.images[0],
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
      />
      <div>
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

<div className="inline-flex rounded-md shadow">
    
      <p className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-black ">
        250$
      </p>
    
  </div>

  
  <div className="inline-flex rounded-md shadow">
    <Link legacyBehavior href="/iletisim">
      <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-black ">
        Teklif Al
      </a>
    </Link>
  </div>
  <div className="ml-3 inline-flex rounded-md shadow">
    <Link legacyBehavior href="/magaza">
      <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-600 hover:bg-rose-50">
        Mağaza
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
                    </article>
                  )}
                  
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
        
        
    </Layout>
    )
}

const getNFTbyId = async (id) => {
    const nftDocument = doc(db, `products`, id);
    const nft = await getDoc(nftDocument);

    if (!nft.exists()) {
        return false;
    }

    return nft.data();
}

NFT.getInitialProps = async (ctx) => {
    const nftData = await getNFTbyId(ctx.query.id)

    return {
        nft : nftData,
    }
}
export default NFT;