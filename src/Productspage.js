import React, { useContext } from 'react'
import "./Productspage.css"
import Product from './Product'

import { CartContext } from "./Context.js"

const Productspage = () => {
  let { products, filter, setFilter } = useContext(CartContext)

  const handlefilter = (e) =>{
    e.preventDefault();
    setFilter(products.filter((product)=>(
      product.category === e.target.name
    )))
    console.log(e.target.name)
  }
  const handleallproducts = (e) =>{
    e.preventDefault();
    setFilter(products)
  }

  return (
    <>
      <div className='filteroptionContainer'>
        <button onClick={handleallproducts}>ALL PRODUCTS</button>
        <button name="camera" onClick={handlefilter}>CAMERAS</button>
        <button name="drone" onClick={handlefilter}>DRONES</button>
        <button name="television" onClick={handlefilter}>TELEVISIONS</button>
        <button name="gift hampers" onClick={handlefilter}>GIFT HAMPERS</button>
      </div>
      <div className='productspageContainer'>
        {
          filter.map((product)=>(
            <Product key={product.name} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
          ))
        }
      </div>
    </>
  )
}

export default Productspage