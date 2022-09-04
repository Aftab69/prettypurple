import React from 'react'
import "./Productspage.css"
import Product from './Product'
import image1 from "./Images/camera.jpg"
import image2 from "./Images/drone.jpg"
import image3 from "./Images/television.jpg"

const Productspage = () => {
  return (
    <>
      <div className='productspageContainer'>
        <Product productImage={image1} productName="CAMERA" productDes="This product is used for photoshoot." productPrice="Rs 50,000" />
        <Product productImage={image2} productName="DRONE" productDes="This product is used for flying and clicking photos." productPrice="Rs 1,50,000" />
        <Product productImage={image3} productName="TELEVISION" productDes="This product is used for watching movies and series." productPrice="Rs 25,000" />
        <Product productImage={image1} productName="CAMERA" productDes="This product is used for photoshoot." productPrice="Rs 50,000" />
        <Product productImage={image2} productName="DRONE" productDes="This product is used for flying and clicking photos." productPrice="Rs 1,50,000" />
        <Product productImage={image3} productName="TELEVISION" productDes="This product is used for watching movies and series." productPrice="Rs 25,000" />
        <Product productImage={image1} productName="CAMERA" productDes="This product is used for photoshoot." productPrice="Rs 50,000" />
      </div>
    </>
  )
}

export default Productspage