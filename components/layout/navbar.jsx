import { useState ,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

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
import { useAuth } from "@/functions/context";
import { getDocumentsOrder } from "@/functions/firebase/getData";
import { orderBy } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClinicalDropdownOpen, setIsClinicalDropdownOpen] = useState(false);

  const { profile } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleClose = () => setIsMenuOpen(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsClinicalDropdownOpen(false);
  };

  // const [menu, setMenu] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const dropdownToggler = (e) => {
  //   let menu = e.target.nextElementSibling;
  //   menu.classList.toggle("hidden");
  // };
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  





  const { pageLoading, setPageLoading } = useAuth();

  const { t } = useTranslation();
  const { locale, asPath } = useRouter();

  const [cats, setCats] = useState([]);
  const [subcats, setsubCats] = useState([]);
  // const [loacding, setLoading] = useState(true);
  //subcategory"
  useEffect(() => {
    const getCats = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "cats",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch cats ====>>>>");
      setCats(data);
      // setPageLoading(false)
    };

    const getSubCats = async () => {
      // setPageLoading(true)

      const data = await getDocumentsOrder(
        "subcats",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "*************** ====>>>>");
      setsubCats(data);
      //  setPageLoading(false)
    };

    getCats();
    getSubCats();
  }, []);

  const combinedData = cats?.map((category) => {
    const matchingSubcategories = subcats?.filter(
      (subcategory) => subcategory.category === category.title
    );
    return {
      ...category,
      subcats: matchingSubcategories,
      isSubcatOpen: false,
    };
  });

  console.log("DAS>>>", combinedData);

  return (
    <div>
      {/* headewr-- */}

      <div className="container mx-auto lg:flex lg:flex-row  lg:justify-between justify-center items-center space-y-2  text-gray-500 py-3 w-full">
        <div className="lg:flex lg:flex-row flex flex-col justify-center items-baseline md:items-center space-x-12 lg:space-y-0 space-y-2">
          <div className="flex flex-row space-x-2">
            <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
            <p className="arabic"> 
               {locale === 'ar' ? 'تركيا-افيون' : 'TÜRKİYE-AFYONKARAHİSAR'}
               </p>
          </div>
          <div className="flex flex-row space-x-2">
            <FaMobileAlt className="w-5 h-5 text-gray-500" />
            <p>00905379732131</p>
          </div>
          <div className="flex flex-row space-x-2">
            <FaRegClock className="w-5 h-5 arabic text-gray-500" />
            <p className="arabic"> Cumartesi-Perşembe
             08:00 - 6:00</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4  justify-center items-center ">
          {/* <a
            href="https://www.facebook.com/profile.php?id=100083511842889&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook className="w-6 h-6 text-gray-500" />
          </a> */}
{/* 
          <a href="https://www.instagram.com/tedili.mermer?igsh=MWJ4cnQzMzBlbjJqag%3D%3D" target="_blank">
            <FaInstagram className="w-6 h-6 text-gray-500" />


</a>

          <a href="https://wtspee.com/905379732131" target="_blank">
            <FaWhatsapp className="w-6 h-6 text-gray-500" />
          </a> */}

    

          {/* 
<a href="https://www.snapchat.com/add/saluosh6?share_id=rgFIQU-SU4k&locale=ar-EG" target="_blank">
<FaSnapchat className="w-6 h-6 text-gray-500" />
</a>

<a href="https://www.tiktok.com/@alwasitturizm?_t=8m1Fv865GeU&_r=1" target="_blank">
<FaTiktok className="w-6 h-6 text-gray-500" />
</a> */}
        </div>
      </div>

      {/* --end header */}

      <nav
      ref={navbarRef}
        dir=""
        className="   bg-black bg-yelow-100 px-3 arabic py-5 bg-opacity-80 md:bg-opacity-80 sticky top-0 z-50   text-black md:bg-primar font-primary mx-0 mt-0  bg-no-repeat bg-top md:bg-cover md:bg-top"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

<div className="flex gap-3 items-center">


          <Link className="flex flex-row shimmer !shadow-2xl" href="/">
            <Image
            className=" object-cover"
            src={'/logo.png'}
            // src="https://ik.imagekit.io/m1akscp5q/logo%20bac%20horizontal%20hitam%201.png?updatedAt=1705581337965"
              width={80}
              height={80}
              alt="logo bac"
            />

       
          </Link>



          <div className=" arabic shimmer text-2xl ">

TEDILI MERMER
</div>


</div>


{/* <div className="md:hidden arabic shimmer text-3xl ">

TEDILI MERMER
</div> */}





          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-black ">
              <li onClick={toggleClose}>
                <Link
                  href="/"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li className="relative">
                <button
                  className="flex  items-center justify-between w-full py-2 px-3 !text-primary rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:w-auto  "
                  onClick={toggleDropdown}
                >
                  <Link
                    onClick={closeAllMenus}
                    href="/products"
                    className=" hover:text-secondary"
                  >
                    {t("navbar.products")}
                  </Link>

{combinedData?.length > 0 &&
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
}


                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div
                    id="dropdownNavbar"
                    className="absolute z-10 font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 bg-white  dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-md text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {combinedData?.map((item, index) => {
                        return (
                          <li key={index} onClick={closeAllMenus}>
                            <Link
                              href={`/products?category=${item?.title}`}
                              className="block arabic px-4 py-2 hover:bg-primary "
                            >
                              {item?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  onClick={closeAllMenus}
                  href="/about"
                  className="block py-2 px-3 !text-primary rounded  md:hover:bg-transparent md:hover:text-secondary md:p-0    "
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeAllMenus}
                  href="/gallery"
                  className="block py-2 px-3 !text-primary rounded  md:hover:bg-transparent md:hover:text-secondary md:p-0     "
                >
                  {t("navbar.gallery")}
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeAllMenus}
                  href="/contact"
                  className="block py-2 px-3 !text-primary rounded  md:hover:bg-transparent md:hover:text-secondary md:p-0  "
                >
                  {t("navbar.contact")}
                </Link>
              </li>

              {profile && (
                <li>
                  <Link
                    onClick={closeAllMenus}
                    href="/admin/product/all"
                    className="block py-2 px-3 !text-primary rounded  md:hover:bg-transparent md:hover:text-secondary md:p-0    "
                  >
                    {t("navbar.dash")}
                  </Link>
                </li>
              )}

              {/* ... other navigation items ... */}

              <li className="nav-item">
                <button className="languages md:mt-[-6px] cursor-pointer bg-transparent  rounded-lg py-1 px-4  text-center text-black     active:scale-110">
                  {locale == "ar" ? (
                    <div className="flex gap-2">
                      <Link
                        className="bg-black text-white rounded-xl  px-4"
                        href={asPath}
                        locale="en"
                      >
                        English
                      </Link>
                      <Link
                        className="bg-black text-white rounded-xl  px-4"
                        href={asPath}
                        locale="tr"
                      >
                        Turkish
                      </Link>
                    </div>
                  ) : locale == "tr" ? (
                    <div className="flex gap-2">
                      <Link
                        className="bg-black !text-primary rounded-xl  px-4"
                        href={asPath}
                        locale="en"
                      >
                        English
                      </Link>

                      <Link
                        className="bg-black !text-primary rounded-xl  px-4"
                        href={asPath}
                        locale="ar"
                      >
                        Arabic
                      </Link>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Link
                        className="bg-black !text-primary rounded-xl  px-4"
                        href={asPath}
                        locale="ar"
                      >
                        Arabic
                      </Link>

                      <Link
                        className="bg-black !text-primary rounded-xl  px-4"
                        href={asPath}
                        locale="tr"
                      >
                        Turkish
                      </Link>
                    </div>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
