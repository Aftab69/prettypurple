import React, { useContext, useEffect, useRef } from 'react'
import "./Cartpage.css"
import { CartContext } from "./Context.js"
import Product from './Product'
import emailjs from "@emailjs/browser";

const Cartpage = () => {
  let { cart, total, setTotal, checkoutform, setCheckoutform } = useContext(CartContext)
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    // eslint-disable-next-line
  },[cart])
  console.log(total)

  let productnames = "";
  cart.map((each)=>(
    productnames=productnames+": "+each.name
  ))
  console.log(productnames)

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

    emailjs.sendForm('service_8pat0om', 'template_ui3wpc9', form.current, 'ZiJUUW6UQfngNLJ73')
      .then((result) => {
          console.log(result.text);
          window.alert("Message sent successfully");
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
            <Product key={product.name} data={product} productImage={product.image} productName={product.name} productDes={product.description} productPrice={product.price} />
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
                  <textarea type="text" name="message" placeholder='Enter your address' required />
                  <textarea type="number" name="message" placeholder='Enter your phone number' required />
                  <textarea style={{display:"none"}} type="text" name="message" value={`Amount to pay- Rs ${total}; Items${productnames}`} placeholder='Enter your address' required />
                  <button type="submit" value="Send">Order</button>
               </form>
               </div>
           </div>
       </div>
    </>
  )
}

export default Cartpage