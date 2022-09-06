import React, { useContext } from 'react'
import "./Product.css"
import { CartContext } from "./Context.js"

const Product = (props) => {
  
  //from Context.js
  let { itemnumber, setItemnumber, cart, setCart } = useContext(CartContext)

  const handleAddToCart = () =>{
    setItemnumber(itemnumber=itemnumber+1)
      setCart([...cart,props.data])
  }

  const handleRemoveFromCart = () =>{
    setItemnumber(itemnumber=itemnumber-1)
      setCart(cart.filter((item)=>(
        item.name !== props.data.name
      )))
  }
  console.log(cart)
  console.log(props.data)
  return (
    <>
      <div className='productContainer'>
        <div className='productImage'>
            <img src={props.productImage} alt={props.productImage} />
        </div>
        <div className='productName'>
            <p>{props.productName}</p>
        </div>
        <div className='productDescription'>
            <p>{props.productDes}</p>
        </div>
        <div className='productPricing'>
            <p>₹ {props.productPrice}</p>
        </div>
        <div className='productButton'>
          { cart.includes(props.data) ?
          <button id={props.productName} onClick={handleRemoveFromCart}>Remove from cart</button> :
          <button id={props.productName} onClick={handleAddToCart}>Add to cart</button>
          }
            
        </div>
      </div>
    </>
  )
}

export default Product