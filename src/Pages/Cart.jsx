import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { CartGlobal} from '../context/CartContext'
function Cart() {
    const {cart,removeFromCart}=useContext(CartContext)
    {console.log(useContext(CartContext));}
    const price=0
    useEffect(()=>{
        cart.map((product)=>{
            price+=product.price
        })
    },[cart])
  return (
    <section class="pt-12 pb-24 overflow-hidden bg-blueGray-100">
  <div class="container px-4 mx-auto">
    <div class="mb-8 pb-8 border-b border-gray-200 border-opacity-40">
      <h1 class="text-center text-4xl xl:text-6xl font-heading font-medium">Your cart</h1>
    </div>
    <div class="flex flex-wrap -mx-4 mb-14 xl:mb-24">
      <div class="w-full md:w-8/12 xl:w-9/12 px-4 mb-14 md:mb-0">
        <div class="py-12 px-8 md:px-12 bg-white rounded-3xl">
          <span class="inline-block mb-16 text-darkBlueGray-300 font-medium">{cart.length}</span>
          <div class="xl:px-10">
            {
                

            cart.map((product)=>()=>(
                
            <div class="relative flex flex-wrap items-center xl:justify-between -mx-4 mb-8 pb-8 border-b border-gray-200 border-opacity-40">
              <div class="relative w-full md:w-auto px-4 mb-6 xl:mb-0">
                <a class="block mx-auto max-w-max" href="#">
                  <img class="h-28 object-cover" src={product.img} alt=""/>
                </a>
              </div>
              <div class="w-full md:w-auto px-4 mb-6 xl:mb-0">
                <a class="block mb-5 text-xl font-heading font-medium hover:underline" href="#">{product.title}</a>
              </div>
              <div class="w-full xl:w-auto px-4 mb-6 xl:mb-0 mt-6 xl:mt-0">
                <div class="flex items-center">
                  <h4 class="mr-4 font-heading font-medium">Qty:</h4>
                  <input class="w-16 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" placeholder="1"/>
                </div>
              </div>
              <div class="w-full xl:w-auto px-4">
                <span class="text-xl font-heading font-medium text-blue-500">
                  <span class="text-sm">Rs.</span>
                  <span>{product.price}</span>
                </span>
              </div>
              <button class="absolute top-0 right-0 lg:mt-6 lg:-mr-4 text-gray-200 hover:text-gray-300" onClick={()=>removeFromCart(product)}>
                <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="currentColor"></rect><line x1="20.495" y1="8.49497" x2="8.49498" y2="20.495" stroke="currentColor" stroke-width="1.4"></line><line x1="19.505" y1="20.495" x2="7.50503" y2="8.49498" stroke="currentColor" stroke-width="1.4"></line></svg>
              </button>
            </div>
            ))
}
            </div>
            <div class="relative flex flex-wrap items-center xl:justify-between -mx-4">
              <div class="relative w-full md:w-auto px-4 mb-10 xl:mb-0">
                <a class="block mx-auto max-w-max" href="#">
                  <img class="h-28 object-cover" src="uinel-assets/images/ecommerce-product-info/smartwatch.png" alt=""/>
                </a>
              </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 xl:w-3/12 px-4">
        <div class="mb-14">
          <h2 class="mb-7 md:mt-6 text-3xl font-heading font-medium">Cart totals</h2>
          <div class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
            <span>Subtotal</span>
            <span class="flex items-center text-xl">
              <span class="mr-2 text-base">Rs.</span>
              <span>{price}</span>
            </span>
          </div>
          <div class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
            <span>Shipping</span>
            <span class="flex items-center text-xl">
              <span class="mr-2 text-base">Rs.</span>
              <span>10</span>
            </span>
          </div>
          <div class="flex items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-3xl">
            <span>Total</span>
            <span class="flex items-center text-xl text-blue-500">
              <span class="mr-2 text-base">Rs.</span>
              <span>{price+10}</span>
            </span>
          </div>
          <a class="inline-block w-full lg:w-auto px-3 py-3 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Checkout</a>
        </div>
      </div>
    </div>
    <div class="md:w-96"><a class="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="/products">Back to shop</a></div>
  </div>
</section>
  )
}

export default Cart