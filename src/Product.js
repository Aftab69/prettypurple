import React from 'react'
import "./Product.css"

const Product = (props) => {
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
            <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default Product