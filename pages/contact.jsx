import React, {useRef ,useState} from "react";


import { CheckCircleIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import {useRouter} from 'next/router'
function ContactUs() {


  const { t } = useTranslation("common");
const router =useRouter()

  const {pageLoading, setPageLoading} = useAuth()
   
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);

  function Submit(e) {
	e.preventDefault();
	const formEle = document.querySelector("form");
	const name = nameRef?.current?.value;
	const phone = mobileRef?.current?.value;
	const email = mailRef?.current?.value;
	const desc = descriptionRef?.current?.value;

	console.log(name, phone, email, desc);

	// pushing data to google sheet

	// const formDatab = new FormData(formEle);
	const formDatab = formEle;
	console.log(formDatab, "body");

	

	setPageLoading(true);

	fetch("/api/contact", {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },

	  body: JSON.stringify({
		name: name,
		email: email,
		
		desc:'ارجو التواصل',

		phone: phone,
		type:"contact"
	  }),
	})
	  .then((res) => res.json())
	  .then((data) => {
		setPageLoading(false);
		console.log(data);
		alert("شكرا لك سنتواصل معكم قريبا");
		// clear the form
		try {
		  nameRef.current.value = "";
		  mailRef.current.value = "";
		  if (mobileRef.current) mobileRef.current.value = "";
		  descriptionRef.current.value = "";
		} catch (error) {
		  console.log(error);
		}
	  })
	  .catch((error) => {
		setPageLoading(false);
		console.log(error);
	  });
  }




  
  if(pageLoading ){
    return <Loader/>
}






  return (
    <Layout>

    
    <>
      <NextSeo
        title="Tedili Mermer | Tedili | Tedili | Tedili Mermer"
        description="Tedili Mermer"
      />
      <div className="mx-auto arabic max-w-7xl px-6 py-8  sm:px-6 md:py-16 lg:px-8">
        <section dir={router?.locale === 'ar' && 'rtl'}>
          <h1 className="text-4xl arabic font-bold tracking-tight shimmer sm:text-5xl md:text-6xl">
          {t("contactus")}
          </h1>
          <p className="my-4 text-lg duration-200 hover:shimmer md:justify-start">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/aVHAza3KnaQqYdfy6"
            >
              <strong>{t("address")}:</strong> 
              ESKİ HAMAM MAH.ANKARA-AFYON KARAYOLU  No:7/2 İscehisar/ Afyonkarahisar
            </a>
          </p>
        </section>
     
        <div className="md:grid grid-cols-1 gap-5 py-4 md:grid-cols-2 md:py-8 flex  flex-col-reverse">
          <section className="h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3107.6416372148756!2d30.73896208465131!3d38.84066727957938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUwJzI2LjQiTiAzMMKwNDQnMTIuNCJF!5e0!3m2!1sar!2str!4v1715176272556!5m2!1sar!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </section>
          <section className="">
            <div className="rounded-lg bg-white p-8 drop-shadow-lg lg:col-span-3 lg:p-12">
          
                <form className="space-y-4"  onSubmit={(e) => Submit(e)}>
                  <div>
                    <label className="sr-only" htmlFor="name">
                    {t("name")}
                    </label>
                    <input
                    
                       name="Name"
                       ref={nameRef}
                       
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder={t("name")}
                      type="text"
                      id="name"
                      
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                      {t("email")}
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder={t("email")}
                        type="email"
                        id="email"
                        name="Email"
                        ref={mailRef}
                        required={true}
                        
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">
                      {t("phone")}
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder={t("phone")}
                        type="tel"
                        id="Phone"
                        name="Phone"
                        ref={mobileRef}
                        required={true}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                    {t("message")}
                    </label>
                    <textarea
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder={t("message")}
                      rows={8}
                      id="message"
                      name="message"
                      
                      ref={descriptionRef}
                      required={true}
                      defaultValue={""}
                      
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white sm:w-auto"
                    >
                      <span className="font-medium"> {t("send")} </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
            
            </div>
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




export default ContactUs;