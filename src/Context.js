import React, { useState,createContext } from 'react'
import image1 from "./Images/01.jpg"
import image2 from "./Images/02.jpg"
import image3 from "./Images/03.jpg"
import image4 from "./Images/04.jpg"
import image5 from "./Images/05.jpg"
import image6 from "./Images/06.jpg"
import image7 from "./Images/07.jpg"
import image8 from "./Images/08.jpg"
import image9 from "./Images/09.jpg"
import image10 from "./Images/10.jpg"
import image11 from "./Images/11.jpg"
import image12 from "./Images/12.jpg"
import image13 from "./Images/13.jpg"
import image14 from "./Images/14.jpg"
import image15 from "./Images/15.jpg"
import image16 from "./Images/16.jpg"
import image17 from "./Images/17.jpg"
import image18 from "./Images/18.jpg"
import image19 from "./Images/19.jpg"

export const CartContext = createContext();

const Context = ({children}) => {
  const [ products ] = useState([
    {
      image:image1,
      name:"BLACK RESIN EARRING",
      price:"150",
      category:"earrings",
      amount:"1"
    },
    {
      image:image2,
      name:"HOWL'S MOVING CASTLE EARRING",
      price:"100",
      category:"earrings",
      amount:"1"
    },
    {
      image:image3,
      name:"SEQUENCE FABRIC EARRING",
      price:"100",
      category:"earrings",
      amount:"1"
    },
    {
      image:image4,
      name:"ALPHABET KEYRING (M)",
      price:"100",
      category:"keyrings",
      amount:"1"
    },
    {
      image:image5,
      name:"GAMUSA EARRING #01",
      price:"150",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image6,
      name:"GAMUSA EARRING #02",
      price:"150",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image7,
      name:"GAMUSA JEWELLERY SET",
      price:"200",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image8,
      name:"GAMUSA EARRING #03",
      price:"150",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image9,
      name:"GAMUSA EARRING #04",
      price:"150",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image10,
      name:"GAMUSA EARRING #05",
      price:"150",
      category:"gamusa jewellery",
      amount:"1"
    },
    {
      image:image11,
      name:"FLAT PEARL EARRING",
      price:"100",
      category:"earrings",
      amount:"1"
    },
    {
      image:image12,
      name:"FLOWER HEART EARRING",
      price:"100",
      category:"earrings",
      amount:"1"
    },
    {
      image:image13,
      name:"GLOW IN THE DARK PENDANT",
      price:"150",
      category:"necklaces",
      amount:"1"
    },
    {
      image:image14,
      name:"SIMLY CHARM EARRINGS",
      price:"120",
      category:"earrings",
      amount:"1"
    },
    {
      image:image15,
      name:"SILVER FAN EARRINGS",
      price:"120",
      category:"earrings",
      amount:"1"
    },
    {
      image:image16,
      name:"CHAIN BEADS EARRINGS",
      price:"120",
      category:"earrings",
      amount:"1"
    },
    {
      image:image17,
      name:"GLOW IN THE DARK KEYCHAIN (T)",
      price:"150",
      category:"keyrings",
      amount:"1"
    },
    {
      image:image18,
      name:"HEART CHARM EARRINGS",
      price:"120",
      category:"earrings",
      amount:"1"
    },
    {
      image:image19,
      name:"WHITE PEARL ON CHAIN",
      price:"100",
      category:"earrings",
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