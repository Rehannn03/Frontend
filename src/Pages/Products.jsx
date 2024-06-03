import React from 'react'
import ProductCard from '../components/ProductCard'
import Test from './Test'
import Header from '@/components/Header'
function Products() {
  return (
      <div >
          <Header/>
            <h1 className='text-3xl font-semibold text-center mt-10'>Products</h1>
          <ProductCard/>
          {/* <Test/> */}
      </div>
  )
}

export default Products