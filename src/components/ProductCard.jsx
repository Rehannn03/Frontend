import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext ,useState,useEffect} from "react";
import Sidebar from "./Sidebar";
export default function ProductCard({search}) {
  const {addToCart} =useContext(CartContext)
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    priceRange: '',
    type: '',
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://raw.githubusercontent.com/RehannS/t-shirt-data/main/t-shirt.json?token=GHSAT0AAAAAACTD3LHHYQXBXPRQGPJFDZXSZS6BA6Q");
        const products = await response.json();
        console.log(products);
        setProducts(products);
        // Now that we have the products, you can set them in state or perform any other necessary actions
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Run only once on component mount
  const filterProducts = (products) => {
      
    return products.filter((product) => {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      return (
        (!filters.gender || product.gender === filters.gender || product.gender=='Unisex') && 
        (!filters.color || product.color === filters.color) &&
        (!filters.priceRange || (
          product.price >= minPrice &&
          product.price <= maxPrice
        )) &&
        (!filters.type || product.type === filters.type)&&
        (!search ||
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.color.toLowerCase().includes(search.toLowerCase()) ||
          product.type.toLowerCase().includes(search.toLowerCase()))
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <section className="flex flex-col md:flex-row">
      <Sidebar filters={filters} setFilters={setFilters}/>
      <div className="w-full md:w-3/4 container px-4 mx-auto">
        <div className="flex items-stretch flex-wrap -mx-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 px-3 py-3 mb-16 md:mb-0">
              <div className="mx-auto max-w-max">
                <Card>
                  <CardHeader>
                    <img
                      className="mb-6 lg:mb-10 max-w-md w-full rounded-xl"
                      src={product.image_url}
                      alt="image"
                      style={{ height: "300px", width: "250px" }}
                    />
                  </CardHeader>
                  <CardTitle>
                    <Link
                      to={"/"}
                      className="block mb-5 text-2xl font-heading font-medium hover:underline ml-3"
                    >
                      {product.name}
                    </Link>
                    <div className="flex justify-between items-center">
                    <p className="ml-3 text-md font-thin">{product.brand}</p>
                    <p className="ml-3 text-md font-thin mr-3 mb-2">{product.rating}</p>
                    </div>
                  </CardTitle>
                  <CardFooter className='flex justify-between items-center'>
                    <p className="flex items-center m-0 text-2xl text-black font-heading font-medium tracking-tighter">
                      <span className="mr-2 text-sm">Rs.</span>
                      <span>{product.price}</span>
                    </p>
                    <button
                      type='button'
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
