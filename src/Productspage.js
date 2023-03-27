import React, { useContext } from 'react'
import { useState } from 'react'
import "./Productspage.css"
import Product from './Product'
import facebookicon from "./Images/facebookicon.png"
import instagramicon from "./Images/instagramicon.png"
import whatsappicon from "./Images/whatsappicon.png"
import Zoom from 'react-reveal/Zoom';
import { CartContext } from "./Context.js"
import { Helmet } from 'react-helmet'

const Productspage = () => {
  const [ startnum, setStartnum ] = useState(-1)
  const [ endnum, setEndnum ] = useState(10)

  let { products, filter, setFilter } = useContext(CartContext)

  const handlefilter = (e) =>{
    e.preventDefault();
    setStartnum(-1)
    setEndnum(10)
    setFilter(products.filter((product)=>(
      product.category === e.target.name
    )))
    console.log(e.target.name)
  }
  const handleallproducts = (e) =>{
    e.preventDefault();
    setStartnum(-1)
    setEndnum(10)
    setFilter(products)
  }

  const handleNextButton = (e) =>{
    e.preventDefault()
    if(endnum>=filter.length){
      setStartnum(startnum)
      setEndnum(endnum)
    } else {
      setStartnum(startnum+10)
      setEndnum(endnum+10)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  const handlePreviousButton = (e) =>{
    e.preventDefault()
    if(startnum === -1 && endnum === 10){
      setStartnum(startnum)
      setEndnum(endnum)
    } else {
      setStartnum(startnum-10)
      setEndnum(endnum-10)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        <button name="jewellery set" onClick={handlefilter}>JEWELLERY SET</button>
        <button name="phonecharms" onClick={handlefilter}>PHONE CHARMS</button>
      </div>
      <div className='productspageContainer'>
        {
          filter.map((product, index)=>(
            (index>startnum && index<endnum) && <Zoom><Product key={product.image} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} /></Zoom>
          ))
        }
      </div>
      <div className='paginationContainer'>
        <button onClick={handlePreviousButton}>&larr; PREVIOUS PAGE</button>
        <button onClick={handleNextButton}>NEXT PAGE &rarr;</button>
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