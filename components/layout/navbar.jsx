import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "@/functions/context";

import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
  FaTiktok
} from "react-icons/fa";

import { useTranslation } from "next-i18next";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { locale } = useRouter();
  //const lang = locale === "en" ? en : es */
  const { t } = useTranslation("common");

  const slider = t("slider", { returnObjects: true });
  console.log("links", slider);

  const router = useRouter();

  const { profile } = useAuth();

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      viewBox="0 0 18 18"
      class="menu-close menu-icon !text-white"
    >
      <title>Close</title>
      <path d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      viewBox="0 0 20 20"
      class="menu-icon"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <>
      <div dir="ltr" className="bg-gray-100 ">
        <div className="container mx-auto lg:flex lg:flex-row  lg:justify-between justify-center items-center space-y-2  text-gray-500 py-3 w-full">
          <div className="lg:flex lg:flex-row flex flex-col justify-center items-center space-x-12 lg:space-y-0 space-y-2">
            <div className="flex flex-row space-x-2">
              <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
              <p>Istanbul , Turkey</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaMobileAlt className="w-5 h-5 text-gray-500" />
              <p> (+90) 552 355 52 22</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaRegClock className="w-5 h-5 text-gray-500" />
              <p>Mon-Sat: 07:00 - 17:00</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4  justify-center items-center ">

          <a href="https://www.facebook.com/profile.php?id=61552907010288&mibextid=ZbWKwL" target="_blank">
            <FaFacebook className="w-6 h-6 text-gray-500" />
            </a>


            <a href="https://www.instagram.com/alusturizm?utm_source=qr&igsh=MWZudWhscTh4dGppbg==" target="_blank">
            <FaInstagram className="w-6 h-6 text-gray-500" />


</a>

            <a href="https://wtspee.com/905523555222" target="_blank">
            <FaWhatsapp className="w-6 h-6 text-gray-500" />
            </a>
           

            

<a href="https://www.snapchat.com/add/saluosh6?share_id=rgFIQU-SU4k&locale=ar-EG" target="_blank">
<FaSnapchat className="w-6 h-6 text-gray-500" />
</a>

<a href="https://www.tiktok.com/@alwasitturizm?_t=8m1Fv865GeU&_r=1" target="_blank">
<FaTiktok className="w-6 h-6 text-gray-500" />
</a>



          </div>
        </div>
      </div>

      <nav className="  relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#171F49]">
        <div className="container px-4 mx-auto flex flex-wrap justify-between">
          <div className="w-full flex-grow  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              {/* <img className="w-18 logo object-cover rounded-full  h-16 mx-3" src="/cars/logo.png" alt="" /> */}
              {/* <Icon icon={spaIcon} className=" logo text-4xl mr-2"/> */}
              <span className="text-xl arabic shimmer">
                {locale === "en" ? "Al-Wasit Alloush Turizm Şirketi" : "شركة الوسيط علوش تورزم"}


              </span>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <div
            className={
              "lg:flex  flex-initial items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col !font-ib arabic  lg:flex-row list-none lg:ml-auto">
              {/* //media  <Icon icon="lucide:monitor-play" /> */}

              <li className="nav-item">
                <Link
                  className="px-3 py-2     flex items-center md:text-xl text-md uppercase font-semibold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  {/* <Icon  icon="lucide:home" className="text-lg leading-lg text-white opacity-75"/>   */}
                  <span className="ml-2 "> {t("home")} </span>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center md:text-xl text-md uppercase font-semibold leading-snug text-white hover:opacity-75"
                  href="/articles"
                >
                  
                  <span className="ml-2 "> {t("articles")} </span>
                </Link>
              </li> */}

              {/* {profile && (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center md:text-xl text-md uppercase font-semibold leading-snug text-white hover:opacity-75"
                    href="/admin/article/add"
                  >
             
                    <span className="ml-2 ">
                      {locale === "en" ? "Dashboard" : "لوحة التحكم"}
                    </span>
                  </Link>
                </li>
              )} */}

              <li className="nav-item">
                <button className="languages md:mt-[6px] cursor-pointer bg-transparent  rounded-lg py-1 px-4  text-center text-white    !bg-[#F89B1B] active:scale-110">
                  {router.locale == "ar" ? (
                    <Link href={router.asPath} locale="en">
                      English
                    </Link>
                  ) : (
                    <Link href={router.asPath} locale="ar">
                      العربية
                    </Link>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
