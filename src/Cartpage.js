import React, { useContext, useEffect } from 'react'
import "./Cartpage.css"
import { CartContext } from "./Context.js"
import Product from './Product'

const Cartpage = () => {
  let { cart, total, setTotal } = useContext(CartContext)
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    // eslint-disable-next-line
  },[cart])
  console.log(total)

  return (
    <>
      <div className='cartTotalDisplayContainer'>
        <p>YOUR CART TOTAL : Rs {total}</p>
      </div>
      <div className='cartpageContainer'>
      {
          cart.map((product)=>(
            <Product key={product.name} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
          ))
        }
      </div>
      <div className='checkoutButtonDisplayContainer'>
        <button>Checkout</button>
      </div>
    </>
  )
}

export default Cartpage