import React, { useState,useEffect} from 'react';



const Sidebar = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [availableColors, setAvailableColors] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://raw.githubusercontent.com/RehannS/t-shirt-data/main/t-shirt.json?token=GHSAT0AAAAAACTD3LHHYQXBXPRQGPJFDZXSZS6BA6Q");
        const products = await response.json();
        setProducts(products);
        // Now that we have the products, you can set them in state or perform any other necessary actions
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    const colors = [...new Set(products.map(tshirt => tshirt.color))];
    const types = [...new Set(products.map(tshirt => tshirt.type))];
    setAvailableColors(colors);
    setAvailableTypes(types);
  }, []); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  
  return (
    <div className="md:w-1/4 w-full md:static fixed bg-white md:bg-transparent z-50 md:z-auto transform md:transform-none transition-transform duration-300 ease-in-out md:translate-x-0" style={{ top: 0, left: 0 }}>
      <button
        className="md:hidden p-2 text-gray-800 bg-gray-200 rounded focus:outline-none focus:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>
      <div className={`p-4 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select name="gender" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Color</label>
          <select name="color" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">All</option>
            {availableColors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <select name="priceRange" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">All</option>
            <option value="0-500">0 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001-2000">1001 - 2000</option>
            <option value="2001-5000">2001 - 5000</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select name="type" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">All</option>
            {availableTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
