import React from "react";
import SubCategoriesMain from "@/components/admin/slider/sliders";
import { getDocuments } from "@/functions/firebase/getData";
const AllSlidersPage = ({ subcats }) => {
  return (
    <div>
      <SubCategoriesMain subcats={subcats} />
    </div>
  );
};

export default AllSlidersPage;

// serverside
AllSlidersPage.getInitialProps = async (context) => {
  const SubCategories = await getDocuments("slider"); //  []

  console.log("data💡", SubCategories);

  return {
    // props from serverside will go to props in clientside
    subcats: SubCategories,
  };
};
