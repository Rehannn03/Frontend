import './App.css'
import Products from './Pages/Products'

import Cart from './Pages/Cart.jsx'
import { Route,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
