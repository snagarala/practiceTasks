import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import OrderBy from "./OrderBy";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
//import { setProductData } from "../../Redux/productSlice.js";

export default function MainPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const allProducts = useSelector((state: any) => {
    // console.log(`STATE = ${JSON.stringify(state)}`);
    return state.products.products;
  });
  console.log(allProducts, "products");

  //   const data = useSelector((state: any) => state.products);
  //   console.log(data, "data");
  //   const dispatch = useDispatch();

  // UseEffect to load static data into Redux
  //   useEffect(() => {
  //     dispatch(setProductData(productsData));
  //   }, []);

  // Filter the data based on user input
  const filteredProduct = allProducts?.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProduct].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className=" absolute top-0 right-0 h-screen w-[75%] z-20 h-scree  overflow-scroll">
      <div className="search flex items-center border my-6 rounded ">
        <input
          type="text"
          placeholder="Web Development"
          className="px-3 py-1 flex-9 w-full focus:outline-none bg-transparent text-small"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);

            //  setFilteredData(filteredData2);
            //dispatch(setProductData(filteredData2));
          }}
        />
        <div className="bg-sky-700 flex-1 p-3.5 cursor-pointer">
          <IoSearch size={20} color="white" />
        </div>
      </div>
      <div className="relative flex flex-col gap-4 h-[100px] ">
        <p className="text-gray-500 ">
          Showing all results matching "Web development.
        </p>

        <div className="orderBy relative w-[200px]">
          {/* Order By Dropdown */}
         <OrderBy
            title={"Order By:"}
             values={[
             { id: 0,name:"Order By:"},
             { id: 1, name: "Rating" },
             { id: 2, name: "Price:High to Low" },
             { id: 3, name: "Price:Low to High" },
            ]}
         />
        </div>
      </div>

      <div className="">
        {filteredProduct.length > 0 ? (
          sortedProducts?.map((product: any, index: number) => {
            return (
              <Product
                id={product.id}
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            );
          })
        ) : (
          <p className="text-center text-gray-500 mt-4">No products found.</p>
        )}
      </div>
    </div>
  );
}
