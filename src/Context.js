import React, { useState,createContext } from 'react'
import image1 from "./Images/camera.jpg"
import image2 from "./Images/drone.jpg"
import image3 from "./Images/television.jpg"
export const CartContext = createContext();

const Context = ({children}) => {
  const [ products ] = useState([
    {
      image:image1,
      name:"SONY CAMERA",
      price:"50000",
      category:"camera",
      amount:"1"
    },
    {
      image:image2,
      name:"MICROMAX DRONE",
      price:"150000",
      category:"drone",
      amount:"1"
    },
    {
      image:image3,
      name:"REALME TELEVISION",
      price:"25000",
      category:"television",
      amount:"1"
    }
  ])
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