import React, { useState,createContext } from 'react'
import image1 from "./Images/camera.jpg"
import image2 from "./Images/drone.jpg"
import image3 from "./Images/television.jpg"
export const CartContext = createContext();

const Context = ({children}) => {
  const [products] = useState([
    {
      image:image1,
      name:"CAMERA",
      description:"This product is used for photoshoot.",
      price:"50000"
    },
    {
      image:image2,
      name:"DRONE",
      description:"This product is used for flying and clicking photos.",
      price:"150000"
    },
    {
      image:image3,
      name:"TELEVISION",
      description:"This product is used for watching movies and series.",
      price:"25000"
    }
  ])
    let [ itemnumber, setItemnumber ] = useState(0);
    let [ cart, setCart ] = useState([]);
    let [ total, setTotal ] = useState();
  return (
    <>
        <CartContext.Provider value={{ itemnumber, setItemnumber, cart, setCart, products, total, setTotal }}>
            {children}
        </CartContext.Provider>
    </>
  )
}

export default Context