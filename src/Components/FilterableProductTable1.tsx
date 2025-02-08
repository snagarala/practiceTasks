import React, { useState } from "react";

const productTable = [
    { category: "Drinks", name: "Lemonade", price: "$1.50", inStock: true },
    { category: "Drinks", name: "Chocolate Milk", price: "$1.40", inStock: false },
    { category: "Drinks", name: "Water", price: "$2.50", inStock: true },
    { category: "Drinks", name: "Coffee", price: "$1.00", inStock: true },
    { category: "Drinks", name: "Coke", price: "$3.00", inStock: false },
    { category: "Snacks", name: "Chips", price: "$1.20", inStock: true },
    { category: "Snacks", name: "Popcorn", price: "$1.70", inStock: false },
    { category: "Snacks", name: "Nuts", price: "$1.80", inStock: true },
    { category: "Snacks", name: "Cookies", price: "$2.50", inStock: true },
    { category: "Snacks", name: "French Fries", price: "$2.90", inStock: false },
];

export default function Product_Table() {
  const [search, setSearch] = useState("");
  const [InStockOnly, setInStockOnly] = useState(false);

  // Filtered products based on search and stock availability
  const SearchBar = productTable.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (!InStockOnly || product.inStock)
    );
  });

  const render = (category: any) => (
    <table className="w-full bg-red-100 border-spacing-2 border border-gray-400 dark:border-gray-500 mt-4">
      <thead>
        <tr className="bg-gray-200 border-gray-500">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {SearchBar
          .filter((product) => product.category === category)
          .map((product, index) => (
            <tr key={index} className="border-spacing-2 ">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-4 max-w-md bg-lime-100 border mt-[20px]">
      <h1 className="text-xl font-bold mt-6 px-4 py-4">Product_Table</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border-gray-200 rounded"
      />
      <label className="flex items-center mt-2">
        <input
          type="checkbox"
          checked={InStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="mr-2"
        />
        Only show products in stock
      </label>
       {/* Render Product Tables */}
      <h2 className="text-lg font-bold mt-4">Drinks{render("Drinks")}</h2>
      <h2 className="text-lg font-bold mt-4">Snacks{render("Snacks")}</h2>
    </div>
  );
}