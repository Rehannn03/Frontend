import React from 'react'
import ProductCard from '../components/ProductCard'
import Test from './Test'
import Header from '@/components/Header'
import { useState } from 'react'
function Products() {
  const[search,setSearch]=useState('')
  return (
      <div >
          <Header setSearch={setSearch}/>
            <h1 className='text-3xl font-semibold text-center mt-10'>Products</h1>
          <ProductCard search={search}/>
          {/* <Test/> */}
      </div>
  )
}

export default Products