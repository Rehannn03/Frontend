import React, { useEffect ,useState} from "react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { CartGlobal } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart, updateQuantity} = useContext(CartContext);
  const[price,setPrice]= useState(0)
  const [error, setError] = useState('');
  useEffect(()=>{
    let total=0;
    cart.forEach(item=>{
      total += item.price * item.quantity
    })
    setPrice(total)
  },[cart])
  const handleQtyChange=(productId,newQty)=>{
    console.log(productId);
    const quantity = Math.max(Number(newQty), 1);
    const success=  updateQuantity(productId,quantity)
    if (!success) {
      setError('Quantity exceeds available stock.');
      alert('Quantity exceeds available stock.')
    } else {
      setError('');
    }
  }
  return (
    <section className="pt-12 pb-24 overflow-hidden bg-blueGray-100">
      <div className="container px-4 mx-auto">
        <div className="mb-8 pb-8 border-b border-gray-200 border-opacity-40">
          <h1 className="text-center text-4xl xl:text-6xl font-heading font-medium">
            Your cart
          </h1>
        </div>
        <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24">
          <div className="w-full md:w-8/12 xl:w-9/12 px-4 mb-14 md:mb-0">
            <div className="py-12 px-8 md:px-12 bg-white rounded-3xl">
              <span className="inline-block mb-16 text-darkBlueGray-300 font-medium text-lg">
                {cart.length} item in your cart
              </span>
              <div className="xl:px-10">
                {cart.length === 0 ? (
                  <h1 className="text-center text-4xl xl:text-6xl font-heading font-medium">
                    Cart is Empty
                  </h1>
                ) : (
                  cart.map((product) => (
                    <div className="flex items-center justify-between py-4 border-b border-gray-200 border-opacity-40"
                    key={product.id}>
                      <div className="flex items-center">
                        <img
                          className="h-20 w-20 object-cover rounded-xl"
                          src={product.image_url}
                          alt=""
                        />
                        <div className="ml-6">
                          <h3 className="text-xl font-heading font-medium">
                            {product.name}
                          </h3>
                          <p className="text-base font-medium text-blueGray-300">
                            {product.rating}
                          </p>
                        </div>
                      </div>
                      <div class="w-full xl:w-auto px-4 mb-6 xl:mb-0 mt-6 xl:mt-0">
                <div class="flex items-center">
                  <h4 class="mr-4 font-heading font-medium md:mr-2 md:text-sm sm:mr-1 sm:text-sm">Qty:</h4>
                  <input class="w-16 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="number" 
                  min={1} placeholder="1" value={product.quantity} onChange={(e)=>handleQtyChange(product.id,e.target.value)}/>
                </div>
              </div>
                      <div className="flex items-center">
                        <span className="text-xl font-heading font-medium"
                          >
                          Rs. {product.price * product.quantity}
                        </span>
                        <button
                          className="ml-6 text-red-500"
                          onClick={() => removeFromCart(product)}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="relative flex flex-wrap items-center xl:justify-between -mx-4">
                <div className="relative w-full md:w-auto px-4 mb-10 xl:mb-0">
                  <a className="block mx-auto max-w-max" href="#">
                    <img
                      className="h-28 object-cover"
                      src="uinel-assets/images/ecommerce-product-info/smartwatch.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 xl:w-3/12 px-4">
            <div className="mb-14">
              <h2 className="mb-7 md:mt-6 text-3xl font-heading font-medium">
                Cart totals
              </h2>
              <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                <span>Subtotal</span>
                <span className="flex items-center text-xl">
                  <span className="mr-2 text-base">Rs.</span>
                  <span>{Math.round(price)}</span>
                </span>
              </div>
              <div className="flex items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-3xl">
                <span>Total</span>
                <span className="flex items-center text-xl text-blue-500">
                  <span className="mr-2 text-base">Rs.</span>
                  <span>{Math.round(price)}</span>
                </span>
              </div>
              <a
                className="inline-block w-full lg:w-auto px-3 py-3 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-96">
          <Link
            className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            to="/"
          >
            Back to shop
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
