import React from "react";
import SubCategoriesMain from "@/components/admin/gallery/galleries";
import { getDocuments } from "@/functions/firebase/getData";
const AllSubsPage = ({ subcats }) => {
  return (
    <div>
      <SubCategoriesMain subcats={subcats} />
    </div>
  );
};

export default AllSubsPage;

// serverside
AllSubsPage.getInitialProps = async (context) => {
  const SubCategories = await getDocuments("gallery"); //  []

  console.log("data💡", SubCategories);

  return {
    // props from serverside will go to props in clientside
    subcats: SubCategories,
  };
};
