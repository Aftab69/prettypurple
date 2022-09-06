import React, { useContext } from 'react'
import "./Productspage.css"
import Product from './Product'

import { CartContext } from "./Context.js"

const Productspage = () => {
  let { products } = useContext(CartContext)
  return (
    <>
      <div className='productspageContainer'>
        {
          products.map((product)=>(
            <Product key={product.name} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
          ))
        }
      </div>
    </>
  )
}

export default Productspage