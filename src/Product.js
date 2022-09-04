import React from 'react'
import "./Product.css"
import image1 from "./Images/camera.jpg"

const Product = () => {
  return (
    <>
      <div className='productContainer'>
        <div className='productImage'>
            <img src={image1} alt={image1} />
        </div>
        <div className='productName'>
            <p>CAMERA</p>
        </div>
        <div className='productDescription'>
            <p>This product is used for photoshoot.</p>
        </div>
        <div className='productPricing'>
            <p>Rs 50,000</p>
        </div>
        <div className='productButton'>
            <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default Product