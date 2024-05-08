import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import {
  MdClose,
  MdNotes,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleClose = () => setIsMenuOpen(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsClinicalDropdownOpen(false);
  };

  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggler = (e) => {
    let menu = e.target.nextElementSibling;
    menu.classList.toggle("hidden");
  };

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
    <nav dir="" className=" bg-primary px-3 arabic py-5 bg-opacity-80 md:bg-opacity-80 sticky top-0 z-50   text-black md:bg-primary font-primary mx-0 mt-0  bg-no-repeat bg-top md:bg-cover md:bg-top">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link className="flex flex-row" href="/">
          <Image
            src="https://ik.imagekit.io/m1akscp5q/logo%20bac%20horizontal%20hitam%201.png?updatedAt=1705581337965"
            width={193}
            height={48}
            alt="logo bac"
          />
        </Link>
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
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-white ">
            <li onClick={toggleClose}>
              <Link
                href="/"
                className="block md:hover:text-secondary py-2 px-3 hover:bg-gray-100 text-black rounded hover:md:bg-transparent md:text-black md:p-0   "
              >
              {t("navbar.home")}
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex  items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:w-auto  "
                onClick={toggleDropdown}
              >
                <Link
                  onClick={closeAllMenus}
                  href="/products"
                  className=" hover:text-secondary"
                >
                  {t('navbar.products')}
                </Link>
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
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0    "
              >
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeAllMenus}
                href="/Promo"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0     "
              >
                {t('navbar.gallery')}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeAllMenus}
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0  "
              >
               {t('navbar.gallery')}
              </Link>
            </li>
            {/* ... other navigation items ... */}

            <li className="nav-item">
              <button className="languages md:mt-[-6px] cursor-pointer bg-transparent  rounded-lg py-1 px-4  text-center text-black     active:scale-110">
                {locale == "ar" ? (
                  <div className="flex gap-2">
                    <Link href={asPath} locale="en">
                      English
                    </Link>
                    <Link href={asPath} locale="tr">
                      Turkish
                    </Link>
                  </div>
                ) : locale == "tr" ? (
                  <div className="flex gap-2">
                    <Link className="" href={asPath} locale="en">
                      English
                    </Link>

                    <Link href={asPath} locale="ar">
                      Arabic
                    </Link>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Link className="" href={asPath} locale="ar">
                      Arabic
                    </Link>

                    <Link href={asPath} locale="tr">
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
  );
};

export default Navbar;
