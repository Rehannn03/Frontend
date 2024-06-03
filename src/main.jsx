import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import { CartProvider } from './context/CartContext'  
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route index element={<Home/>} />
//       <Route path='products' element={<Products/>} />
//       <Route path='cart' element={<Cart/>} />
//     </Route>
//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
)
