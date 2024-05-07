import React from "react";
import { useState } from "react";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
//import { useAuth } from "@/functions/context";



const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  //const { setName } = useAuth();
  const handleFind = () => {

    if (search === "") {
        toast.error("please enter a product name")
        
    }

    // ?search ---> context.query.search --> in products page

    router.push(`/products?search=${search.toLowerCase()}`);
  };

  return (
    <div className="w-[112px] sm:w-[220px] xs:w-[150px]">
      <div className="flex items-center justify-center">
        <div
          className="flex items-center max-w-md mx-auto bg-white rounded-lg "
          x-data="{ search: '' }"
        >
          <div className="w-full">
            <input
              onKeyDown={(event) => {
                if (event.key === "Enter" && event.target.value) {
                  router.push("/products?search=" + event.target.value);
                } else if (!event.target.value && event.key === "Enter") {
                  router.push("/products");
                }
              }}
              //onChange={(e) => setName(e.target.value)}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="w-full px-2 py-[5px] text-gray-800 rounded-md rounded-r-none  border-1 border border-gray-400 focus:outline-none"
              placeholder="search"
            />
          </div>

          <div>
            <button
              onClick={handleFind}
              type="submit"
              className="flex items-center bg-black justify-center w-8 h-9 text-white rounded-r-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
