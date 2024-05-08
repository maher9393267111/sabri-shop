import React, {useRef ,useState} from "react";


import { CheckCircleIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
function ContactUs() {

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
        title="itpromax | ITPRO | IT PROMAX | IT PRO MAX"
        description="ITPROMAX is a small business "
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
        <section>
          <h1 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="my-4 text-lg duration-200 hover:text-rose-600 md:justify-start">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/aVHAza3KnaQqYdfy6"
            >
              <strong>Address:</strong> Lebanon, Beirut - Hamra Street
            </a>
          </p>
        </section>
     
        <div className="md:grid grid-cols-1 gap-5 py-4 md:grid-cols-2 md:py-8 flex  flex-col-reverse">
          <section className="h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.454391220492!2d35.47801366604833!3d33.89667909785311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17283e7e3ced%3A0x740bcfc330ca9eb0!2sHamra%2C%20Beirut!5e0!3m2!1sen!2slb!4v1706309292921!5m2!1sen!2slb"
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
                      Name
                    </label>
                    <input
                       name="Name"
                       ref={nameRef}
                       
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="Name"
                      type="text"
                      id="name"
                      
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="Email "
                        type="email"
                        id="email"
                        name="Email"
                        ref={mailRef}
                        required={true}
                        
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="Phone Number"
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
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="Message"
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
                      <span className="font-medium"> Submit </span>
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

export default ContactUs;