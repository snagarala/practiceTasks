import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

//here "searchValue"(parameter) searchTerm used to fetch products(i.e filter) that match the searchTerm
function fetchProductSuggestions(searchValue: string) {
  return fetch(`https://dummyjson.com/products/search?q=${searchValue}`).then(
    (res) => res.json()
  );
}

export default function GoogleSearch() {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState<any[]>([]);
  //to close & open suggestion box when user selects one / click on enter
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    async function fetchData() {
      //we wrap in async function
      const data = await fetchProductSuggestions(search); //fetched productsData we are placing in data
      console.log(data, "productsData");
      setProductData(data.products); //we are setting in useState
    }

    timeout = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timeout); // Cleanup previous timeout
  }, [search]);

  // Function to handle suggestion selection
  const handleSelectSuggestion = (title: string) => {
    setSearch(title);
    setIsFocused(false); // Close suggestion box
  };

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="wrapper relative bg-blue-200 w-[800px] h-[500px] p-10 gap-1 ">
        <div className="w-[600px] flex gap-3 h-[40px] border border-gray-400 bg-white px-4 items-center rounded">
          <FaSearch size={20} className="text-gray-400 " />
          <input
            type="text"
            value={search}
            placeholder="Search ..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full focus:outline-none  "
            onFocus={() => setIsFocused(true)}
            //onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && productData.length > 0) {
                handleSelectSuggestion(productData[0].title); // Select first suggestion on Enter
              }
            }}
          />
          <IoIosClose
            size={30}
            onClick={() => {
              setSearch("");
              setIsFocused(false); // Hide suggestions when cleared
            }}
            className="cursor-pointer text-gray-600"
          />
        </div>
        {search.length > 0 && isFocused && (
          <div className=" absolute w-[600px] h-[250px] overflow-hidden overflow-y-auto bg-white  border rounded">
            {productData.length > 0 && //display only when suggestions are there
              productData?.map((product: any, index: number) => (
                <div
                  onClick={() => handleSelectSuggestion(product.title)}
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                >
                  {product.title}{" "}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
