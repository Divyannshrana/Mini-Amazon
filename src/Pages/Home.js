import React from 'react'
import Products from '../Components/Products'

export default function Home() {
  return (
    <div>
      <h2 className='heading'> Welcome to the Amazon Mini Store</h2>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </div>
  )
}
