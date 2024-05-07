import { NextSeo } from "next-seo";
import React from "react";

function AboutUs() {
  return (
    <>
      <NextSeo title="itpromax | ITPRO | IT PROMAX | IT PRO MAX" />
      
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-8  md:py-12 ">
          <section className=" gap-4 xs:py-10 py-2 px-6">
            <h1 className="text-6xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-6xl mt-9 xs:mt-5">
              About Us
            </h1>
            <article className="grid gap-2 grid-cols-1 mt-10">
              <p>
              <b>IT PRO MAX</b> is a small business company located in Lebanon,Beirut. It provides you to buy and sell any product such as smart phones, desktops and laptops. Moreover, we have many Services: Network Communications, Data Cabling, General IT Services, Website Hosting, Web Development using REACT & Next JS ,HTML,CSS,JS ,also we install Surveillance Systems CCTV cameras.
              </p>
              <h2 className="text-2xl font-bold text-rose-600">
              After-Sales Service Support;
              </h2>
              <p>
                After-sales service support provided to a customer after the product or service has already been purchased.
                It includes warranty service, training, or repair for a product. We provide for our customers satisfaction and trusted service and sales. 
              </p>
              <h2 className="text-2xl font-bold text-rose-600">
                There are many services that customer will get it after purchasing any item from us:
              </h2>
              <p>
              &bull; <b>Help Desk and Technical Support Services </b>
               after-sales support may come free with the purchase of an item and may also be sold as part of a more comprehensive service plan. This Service offered through a help or support desk may include technical assistance for personal computers, mobile phones, software, machinery and a variety of other products.
            </p>
             <p>
             &bull; <b>Real-time online support</b> includes email, chat, forums, and a social media interface (and monitoring) that assists in responding to public complaints. This may include handling returns or repairs.
                </p>
            <p>
            &bull; <b>Automated customer service lines</b> can give advice and solutions to frequent or even more complex issues and questions. Typically, rather than employing more human customer service representatives, automated responses and bots allow customers to easily access support at any time, either by phone or online.

              </p>
            </article>
          </section>

          <section className="  justify-center mx-auto flex  items-center shadow_image_left order-first h-64 md:order-none md:h-full">
            <img
              className=" rounded-3xl md:rounded-4xl w-[500px] lg:w-[700px] px-2    "
              src={
                "/aboutusIMG.jpg"
              }
              alt="pic"
              layout="fill"
              objectFit="cover"
              priority={true}
              width={"50%"}
              
            />
          </section>
        </div>
   
    </>
  );
}

export default AboutUs;

