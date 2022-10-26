import React, { useContext } from 'react'
import "./Productspage.css"
import Product from './Product'
import facebookicon from "./Images/facebookicon.png"
import instagramicon from "./Images/instagramicon.png"
import whatsappicon from "./Images/whatsappicon.png"

import { CartContext } from "./Context.js"
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>Pretty Purple Store</title>
        <meta name="description" content="Pretty Purple is an e-commerce website where you can purchase earrings, necklaces, keyrings and other sorts of jewellery." />
        <meta name="keywords" content="pretty purple, pretty purple store, jewellery shop, online store, earrings, neklaces, keyrings" />
      </Helmet>
      <div className='filteroptionContainer'>
        <button onClick={handleallproducts}>ALL PRODUCTS</button>
        <button name="earrings" onClick={handlefilter}>EARRINGS</button>
        <button name="keyrings" onClick={handlefilter}>KEYRINGS</button>
        <button name="fabric jewellery" onClick={handlefilter}>FABRIC JEWELLERY</button>
        <button name="necklaces" onClick={handlefilter}>NECKLACES</button>
        <button name="accessories" onClick={handlefilter}>ACCESSORIES</button>
      </div>
      <div className='productspageContainer'>
        {
          filter.map((product)=>(
            <Product key={product.image} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
          ))
        }
      </div>
      <div className='footerContainer'>
        <p>CONTACT US :</p>
        <div className='footerInfo'>
          <div className='footerFirstContainer'>
            <a href="https://www.facebook.com/profile.php?id=100063737004697" target="_blank"  rel="noreferrer"><img src={facebookicon} alt={facebookicon} /></a>
            <a href="https://www.instagram.com/prettypurple_store/" target="_blank"  rel="noreferrer"><img src={instagramicon} alt={instagramicon} /></a>
            <a href="https://wa.me/+918402017850/" target="_blank"  rel="noreferrer"><img src={whatsappicon} alt={whatsappicon} /></a>
          </div>
          <div className='footerSecondContainer'>
            <p>Email Us : prettypurplestoreonline@gmail.com</p>
            <p>Our Location : Assam, India </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productspage