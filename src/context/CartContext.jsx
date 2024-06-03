import { createContext,useContext,useState } from "react";

const CartContext=createContext()

function CartProvider({children}){
    const [cart,setCart]=useState([])

    function addToCart(product){
        setCart([...cart,product])
    }

    function removeFromCart(product){
        const newCart=cart.filter((item)=>item.id!==product.id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

const CartGlobal=()=>{
    return useContext(CartContext)
}

export {CartProvider,CartContext,CartGlobal}