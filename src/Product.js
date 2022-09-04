import React, { useContext } from 'react'
import "./Product.css"
import { CartContext } from "./Context.js"

const Product = (props) => {

  //from Context.js
  let { itemnumber, setItemnumber } = useContext(CartContext)
  
  const handleAddToCart = () =>{
    setItemnumber(itemnumber=itemnumber+1)
    document.getElementById(props.productName).disabled = true;
  }
  console.log(itemnumber)
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
            <p>{props.productPrice}</p>
        </div>
        <div className='productButton'>
            <button id={props.productName} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default Product