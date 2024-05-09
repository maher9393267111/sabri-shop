import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "react-i18next";
import {useRouter} from 'next/router'
function Hakkimizda() {
  const { t } = useTranslation("common");
const router = useRouter()




  return (
    <Layout>

   
    <>
      <NextSeo title="Tedili  | Hakkımızda | Tedili Mermer" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
          <section className="grid gap-4 arabic">
            <h1 dir={router?.locale === 'ar' && 'rtl'} className="text-4xl font-bold tracking-tight shimmer sm:text-5xl md:text-6xl">
              {t("navbar.about")}
            </h1>
            <article dir={router?.locale === 'ar' && 'rtl'} className="grid gap-2">
              <p className="arabic text-[17px] sm:text-xl">



{t("aboutdescbig")}

                {/* Firmamızın ana gayesi,sektöründe yenilik ve gelişmeye açık
                olarak dünyada ve ülkemizde gelişmeleri izleyerek, hitap ettiği
                Türk ve dünya pazarına en uygun modern üretim teknikleri ile
                imalatı geliştirmiş olan ürünlerin, etkin bir satış ağıyla
                ülkemizde ve dünyada hakettiği yeri alması ve bu üstünlüğü
                muhafaza etmesidir. */}
              </p>
              {/* <p>
                Şirketimiz,benimsediği bu ana gayesinin gerçekleşebilmesi için
                ele alıp uyguladığı teknoloji, yatırım, pazarlama,operasyon
                planları ve politikaları ile üretim bütçe programlarını,bu ana
                gayenin birer aracı saymaktadır.
              </p> */}




{/* 
              <h2 className="text-2xl font-bold text-rose-600">
                Ayka Chair olarak kalite politikamız;
              </h2>
              <p>
                Modern mobilya pazarında lider olma hedefiyle kalite bilincini
                tüm çalışanlarımıza ve tedarikçilerimize benimsetmek, firmanın
                bütün süreçlerinde sürekli iyileştirme ve geliştirme
                düşüncesiyle çağdaş yöntem ilkelerini uygulamak suretiyle toplam
                kalite anlayışını yerleştirmek.
              </p>
              <p>
                Uluslararası kalite standartlarını hayata geçirmek kalite
                perspektifimizi kurumsal hale getirmek, müşterilerimize
                verdiğimiz kalite taahhüdünü yerine getirmektir.
              </p> */}



            </article>
          </section>
          <section className="shadow_image_left rounded-md relative order-first h-[355px] md:min-h-[355px] md:order-none md:h-full">
            <Image
              className="absolute"
              src={
                "/hak.jpg"
              }
              alt="Hakkımızda"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </section>
        </div>
      </div>
    </>

    </Layout>
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



export default Hakkimizda;
