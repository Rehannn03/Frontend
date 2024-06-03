import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Sidebar from "./Sidebar";
// const products = [
//   {
//     title: "Polo Shirt",
//     image: tShirt,
//     price: 20,
//   },
//   {
//     title: "Plain t-shirt",
//     image: rightImage,
//     price: 30,
//   },
// ];

const products= await fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.catch(err=>console.log(err))

export default function ProductCard() {
  const {addToCart} =useContext(CartContext)
  return (
    <section>
      <Sidebar/>
      <div class="container px-4 mx-auto">
        <div class="flex items-stretch flex-wrap -mx-3">
          {products.map((products) => (
            <div class="w-full md:w-1/3 px-3 py-3 mb-16 md:mb-0">
              <div class="mx-auto max-w-max">
                <Card>
                  <CardHeader>
                    <img
                      className="mb-6 lg:mb-10 max-w-md w-full rounded-xl"
                      src={products.image}
                      alt="image"
                      style={{ height: "300px" , width:"250px"}}
                    />
                  </CardHeader>
                  <CardTitle>
                    <Link
                      to={"/products"}
                      className="block mb-5 text-2xl font-heading font-medium hover:underline ml-3"
                    >
                      {products.title}
                    </Link>
                  </CardTitle>
                  <CardFooter className='flex justify-between items-center'>
                    <p className="flex items-center m-0 text-2xl text-black font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-sm">Rs.</span>
                        <span>{products.price}</span>
                      
                    </p>
                    <button type='button' className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={()=>addToCart(products)}>Add to Cart</button>

                    
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
