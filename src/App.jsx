import './App.css'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
