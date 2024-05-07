import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const Service = () => {

    const { t } = useTranslation("common");



  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">{t("services.title1")}</p>
        <p className="text-gray-600">
        {t("services.desc1")}
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">{t("services.title2")}</p>
        <p className="text-gray-600">
        {t("services.desc2")}
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaBusAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">{t("services.title3")}</p>
        <p className="text-gray-600">
        {t("services.desc3")}
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaDrawPolygon className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">{t("services.title4")}</p>
        <p className="text-gray-600">
        {t("services.desc4")}
        </p>
      </div>
    </div>
  );
};
export default Service;
