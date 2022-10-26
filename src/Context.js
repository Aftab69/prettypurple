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
import image20 from "./Images/20.jpg"
import image21 from "./Images/21.jpg"
import image22 from "./Images/22.jpg"
import image23 from "./Images/23.jpg"
import image24 from "./Images/24.jpg"
import image25 from "./Images/25.jpg"
import image26 from "./Images/26.jpg"
import image27 from "./Images/27.jpg"
import image28 from "./Images/28.jpg"
import image29 from "./Images/29.jpg"
import image30 from "./Images/30.jpg"
import image31 from "./Images/31.jpg"
import image32 from "./Images/32.jpg"
import image33 from "./Images/33.jpg"
import image34 from "./Images/34.jpg"
import image35 from "./Images/35.jpg"
import image36 from "./Images/36.jpg"
import image37 from "./Images/37.jpg"
import image38 from "./Images/38.jpg"
import image39 from "./Images/39.jpg"
import image40 from "./Images/40.jpg"
import image41 from "./Images/41.jpg"
import image42 from "./Images/42.jpg"
import image43 from "./Images/43.jpg"
import image44 from "./Images/44.jpg"
import image45 from "./Images/45.jpg"
import image46 from "./Images/46.jpg"
import image47 from "./Images/47.jpg"

export const CartContext = createContext();

const Context = ({children}) => {
  const [ products ] = useState([
    {
      image:image1,
      name:"BLACK RESIN EARRING",
      price:"149",
      category:"earrings",
      amount:"1"
    },
    {
      image:image2,
      name:"HOWL'S MOVING CASTLE EARRING",
      price:"99",
      category:"earrings",
      amount:"1"
    },
    {
      image:image3,
      name:"SEQUENCE FABRIC EARRING",
      price:"99",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image4,
      name:"ALPHABET KEYRING (M)",
      price:"99",
      category:"keyrings",
      amount:"1"
    },
    {
      image:image5,
      name:"GAMUSA EARRING #01",
      price:"149",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image6,
      name:"GAMUSA EARRING #02",
      price:"149",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image7,
      name:"GAMUSA JEWELLERY SET",
      price:"199",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image8,
      name:"GAMUSA EARRING #03",
      price:"149",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image9,
      name:"GAMUSA EARRING #04",
      price:"149",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image10,
      name:"GAMUSA EARRING #05",
      price:"149",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image11,
      name:"FLAT PEARL EARRING",
      price:"99",
      category:"earrings",
      amount:"1"
    },
    {
      image:image12,
      name:"FLOWER HEART EARRING",
      price:"99",
      category:"earrings",
      amount:"1"
    },
    {
      image:image13,
      name:"GLOW IN THE DARK PENDANT",
      price:"149",
      category:"necklaces",
      amount:"1"
    },
    {
      image:image14,
      name:"SIMLY CHARM EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1"
    },
    {
      image:image15,
      name:"SILVER FAN EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1"
    },
    {
      image:image16,
      name:"CHAIN BEADS EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1"
    },
    {
      image:image17,
      name:"GLOW IN THE DARK KEYCHAIN (T)",
      price:"149",
      category:"keyrings",
      amount:"1"
    },
    {
      image:image18,
      name:"HEART CHARM EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1"
    },
    {
      image:image19,
      name:"WHITE PEARL ON CHAIN",
      price:"99",
      category:"earrings",
      amount:"1"
    },
    {
      image:image20,
      name:"LETTER KEYCHAIN (A)",
      price:"129",
      category:"keyrings",
      amount:"1"
    },
    {
      image:image21,
      name:"CUTE CLOUD EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1"
    },
    {
      image:image22,
      name:"WHITE PEARL FLOWER",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image23,
      name:"BLACK PEARL FLOWER",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image24,
      name:"GOLDEN KORI HOOPS",
      price:"79",
      category:"earrings",
      amount:"1"
    },
    {
      image:image25,
      name:"KORI HANGERS",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image26,
      name:"RECTANGULAR FABRIC EARRING (PINK)",
      price:"129",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image27,
      name:"FABRIC ON HOOPS",
      price:"59",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image28,
      name:"YELLOW FABRIC STUD",
      price:"69",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image29,
      name:"CLAY TRIPLE FLOWER (RED)",
      price:"159",
      category:"earrings",
      amount:"1"
    },
    {
      image:image30,
      name:"CLAY YELLOW SUNFLOWER",
      price:"59",
      category:"earrings",
      amount:"1"
    },
    {
      image:image31,
      name:"CLAY TRIPLE LAYER FLOWER (BLACK AND PINK)",
      price:"159",
      category:"earrings",
      amount:"1"
    },
    {
      image:image32,
      name:"CLAY TRIPLE LAYER FLOWER (BLACK AND GOLDEN)",
      price:"159",
      category:"earrings",
      amount:"1"
    },
    {
      image:image33,
      name:"BLUE FABRIC EARRING",
      price:"59",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image34,
      name:"PEACH HOOPS",
      price:"59",
      category:"earrings",
      amount:"1"
    },
    {
      image:image35,
      name:"PEACH HOOPS (BIG)",
      price:"69",
      category:"earrings",
      amount:"1"
    },
    {
      image:image36,
      name:"RING UNCUT PEARL",
      price:"59",
      category:"earrings",
      amount:"1"
    },
    {
      image:image37,
      name:"SILVER PEARL BUTTERFLY",
      price:"59",
      category:"earrings",
      amount:"1"
    },
    {
      image:image38,
      name:"PINK STAR",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image39,
      name:"UNCUT BLUE GLASS EARRING",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image40,
      name:"TRANSPARENT BEADS HOOPS",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image41,
      name:"RED FABRIC V CUT EARRING",
      price:"59",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image42,
      name:"GOLD FABRIC WITH BEADS",
      price:"59",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image43,
      name:"WHITE EMBROIDERY EARRING",
      price:"55",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image44,
      name:"PRINTED BLUE AND WHITE EARRING",
      price:"69",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image45,
      name:"BLUE AND WHITE FABRIC STUD",
      price:"49",
      category:"earrings",
      amount:"1"
    },
    {
      image:image46,
      name:"FABRIC EARRING #01",
      price:"49",
      category:"fabric jewellery",
      amount:"1"
    },
    {
      image:image47,
      name:"GOLDEN KORI BRACELET",
      price:"59",
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