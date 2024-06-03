import { createContext,useContext,useState } from "react";

const CartContext=createContext()

function CartProvider({children}){
    const [cart,setCart]=useState([])

    const addToCart = (product) => {
        setCart((prevCart) => {
          const productIndex = prevCart.findIndex((item) => item.id === product.id);
          if (productIndex > -1) {
            // If the product is already in the cart, increase its quantity
            const newCart = [...prevCart];
            newCart[productIndex].quantity += 1;
            return newCart;
          } else {
            // Add the product with a quantity of 1
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
    
      const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
      };
    
      const updateQuantity = (id, quantity) => {
        setCart((prevCart) => {
          const product = prevCart.find((p) => p.id === id);
          if (product && product.max_quantity >= quantity) {
            return prevCart.map((item) =>
              item.id === id ? { ...item, quantity: quantity } : item
            );
          }
          return prevCart;
        });
        return cart.find((p) => p.id === id)?.max_quantity >= quantity;
      };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

const CartGlobal=()=>{
    return useContext(CartContext)
}

export {CartProvider,CartContext,CartGlobal}