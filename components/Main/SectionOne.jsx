import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const SectionOne = () => {


    const { t } = useTranslation("common");

  return (
    <div dir={'ltr'} className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image width={'700'} height={'700'} src={'/cars/sec1-1.webp'} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image width={'700'} height={'700'}  src={'/cars/sec1-2.webp'} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className=" text-xl md:text-3xl font-light text-gray-600">
        {t("seconeTitle")}
        </p>
       
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className=" text-xl md:text-3xl font-medium shimmer">
            {t('rent.title')}
          </p>
          <p className=" text-xl md:text-2xl  text-gray-500">
{t('rent.desc')}
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >

            <a href="https://wtspee.com/905523555222" target="_blank">

            
            {t('contactus')}

            </a>


            
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-1">
            <Image width={'1000'} height={'700'} src={"/cars/sec-1-5.webp"} alt="Picture of the author" />
           
          </div>

          <div className="col-span-1 row-span-1">

          <Image width={'1000'} height={'700'} src={"/cars/sec-1-4.webp"} alt="Picture of the author" />
</div>
          <div className="col-span-1 row-span-1">
            <Image width={'700'} height={'700'} src={"/cars/sec-1-6.webp"} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image width={'700'} height={'700'} src={"/cars/sec1-3.webp"} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
