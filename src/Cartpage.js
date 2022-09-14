import React, { useContext, useEffect, useRef } from 'react'
import "./Cartpage.css"
import { CartContext } from "./Context.js"
import Product from './Product'
import emailjs from "@emailjs/browser";

const Cartpage = () => {
  let { cart, total, setTotal, checkoutform, setCheckoutform } = useContext(CartContext)
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price*curr.amount), 0))
    // eslint-disable-next-line
  },[cart])

  let productnames = "";
  cart.map((each)=>(
    productnames=productnames+" : "+each.amount+" X "+each.name
  ))

  const handlecheckout = (e) =>{
    e.preventDefault();
    setCheckoutform({display:"block"})
  }
  const handlecloseform = (e) =>{
    e.preventDefault();
    setCheckoutform({display:"none"})
  }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9eg4swo', 'template_guc6s4m', form.current, 'VlmeDF_H35GNGqnMy')
      .then((result) => {
          console.log(result.text);
          window.alert("Your Order was Successful");
      }, (error) => {
          console.log(error.text);
          window.alert("Error");
      });
      e.target.reset();
  };


  return (
    <>
      <div className='cartTotalDisplayContainer'>
        <p>YOUR CART TOTAL : Rs {total}</p>
      </div>
      <div className='cartpageContainer'>
      {
          cart.map((product)=>(
            <Product key={(Math.random()*Number(product.amount)).toString()} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
          ))
        }
      </div>
      <div className='checkoutButtonDisplayContainer'>
        <button onClick={handlecheckout}>Checkout</button>
      </div>
      <div style={checkoutform} id='contact' className='contactpageContainer'>
           <div className='contactformContainer'>
               <div className='closeContainerButtonContainer'><button onClick={handlecloseform}>X</button></div>
                <div>
                <form ref={form} onSubmit={sendEmail} className='formContainer'>
                  <input type="text" name="user_name" placeholder='Enter your name' required />
                  <input type="email" name="user_email" placeholder='Enter a valid email address' required />
                  <textarea type="text" name="message" placeholder='Enter your whatsapp number' id='whatsapptextarea' required />
                  <textarea type="number" name="message" placeholder='Enter your address' required />
                  <textarea style={{display:"none"}} type="text" name="message" value={`Amount to pay- Rs ${total}; Items${productnames}`} placeholder='Enter your address' required />
                  <div className='disclaimerContainer'>
                    <p>Disclaimer:</p>
                    <p>1. No refunds &amp; online payments accepted only.</p>
                    <p>2. We will contact you shortly on your whatsapp number for payment process.</p>
                    <p>3. Extra Rs 50-100 delivery charges applicable on each order.</p>
                  </div>
                  <button type="submit" value="Send">Order</button>
                  
               </form>
               </div>
           </div>
       </div>
    </>
  )
}

export default Cartpage