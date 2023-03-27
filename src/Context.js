import React, { useState,createContext, useEffect } from 'react'

export const CartContext = createContext();

const Context = ({children}) => {
  const [ products, setProducts ] = useState([])

    const getData = async() =>{
      try{
        const res = await fetch("https://prettypurple.cyclic.app/apis",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const datanew = await res.json();
        setFilter(datanew)
        setProducts(datanew.reverse())
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      getData()
    },[])
    
    let [ itemnumber, setItemnumber ] = useState(0);
    let [ cart, setCart ] = useState([]);
    let [ total, setTotal ] = useState();
    let [ filter, setFilter ] = useState(products)
    const [ checkoutform, setCheckoutform ] = useState({display:"none"})
  return (
    <>
        <CartContext.Provider value={{ itemnumber, setItemnumber, cart, setCart, products, filter, setFilter, total, setTotal,checkoutform, setCheckoutform }}>
            {children}
        </CartContext.Provider>
    </>
  )
}

export default Context