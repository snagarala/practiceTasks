import React, {useState} from 'react';
 
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

export default function ProductTable() {
    const [search, setSearch] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
  
    // Filtered products based on search and stock availability
    const filteredProducts = productTable.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (!inStockOnly || product.inStock)
    );
  
    return (
      <div className="p-4 max-w-md bg-lime-100 border my-5 ml-[50px]">
        <h1 className="text-xl font-bold">Product Table</h1>
  
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
  
        {/* Stock Filter Checkbox */}
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="mr-2"
          />
          Only show products in stock
        </label>
  
        {/* Render Product Tables */}
        <ProductCategory category="Drinks" products={filteredProducts} />
        <ProductCategory category="Snacks" products={filteredProducts} />
      </div>
    );
  }
  
  // Component to render each category separately
  const ProductCategory = ({ category, products }: { category: string; products: any[] }) => {
    const categoryProducts = products.filter((product) => product.category === category);
  
    if (categoryProducts.length === 0) return null; // Don't render empty categories
  
    return (
      <div className="my-[20px]">
        <h2 className="text-lg font-bold">{category}</h2>
        <table className="w-full border-collapse border border-gray-400 bg-white mt-2">
          <thead>
            <tr className="bg-gray-200 border-gray-500">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {categoryProducts.map((product, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  