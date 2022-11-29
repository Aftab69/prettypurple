import React, { useContext } from 'react'
import "./Product.css"
import { CartContext } from "./Context.js"

const Product = (props) => {
  
  //from Context.js
  let { itemnumber, setItemnumber, cart, setCart } = useContext(CartContext)

  const handleAddToCart = (e) =>{
    e.preventDefault();
    setItemnumber(itemnumber=itemnumber+1)
      setCart([...cart,props.data])
  }

  const handleRemoveFromCart = (e) =>{
    e.preventDefault();
    setItemnumber(itemnumber=itemnumber-1)
      setCart(cart.filter((item)=>(
        item.name !== props.data.name
      )))
  }
  const handleIncrease = (e) =>{
    e.preventDefault();
    let newObj = cart.filter((item)=>(
         item.name === props.data.name
       ))
       let reqInd = cart.indexOf(newObj[0])
       // eslint-disable-next-line
       {((cart[reqInd].quantity > cart[reqInd].amount) ?
       cart[reqInd].amount = (Number(cart[reqInd].amount) + 1).toString() :
       cart[reqInd].amount = (Number(cart[reqInd].amount)).toString())
       setCart([...cart])}
  }
  const handleDecrease = (e) =>{
    e.preventDefault();
    let newObj = cart.filter((item)=>(
      item.name === props.data.name
    ))
    let reqInd = cart.indexOf(newObj[0])
    if(Number(cart[reqInd].amount>1)){cart[reqInd].amount = (Number(cart[reqInd].amount) - 1).toString()}
    setCart([...cart])
  }
  return (
    <>
        <div className='productContainer'>
          <div className='productImage'>
              <img src={props.productImage} alt={props.productImage} />
          </div>
          
          <div className='productName'>
              <p>{props.productName}</p>
          </div>
          <div className='productPricing'>
              <p>₹ {props.productPrice}</p>
          </div>
          <div className='productButton'>
            { 
            Number(props.data.quantity)<1 ? <button>Out of Stock</button> :
            cart.includes(props.data) ?
            <button id={props.productName} onClick={handleRemoveFromCart}>Remove from Cart</button> :
            <button id={props.productName} onClick={handleAddToCart}>Add to Cart</button>
            }
            { window.location.pathname === "/cart" ? 
            <div className='quantityContainer'>
              <button onClick={handleDecrease}>-</button>
              <span>{props.data.amount}</span>
              <button onClick={handleIncrease}>+</button>
            </div> : 
            <div></div>
            }
          </div>
        </div>
    </>
  )
}

export default Product