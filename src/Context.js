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
import image48 from "./Images/48.jpg"
import image49 from "./Images/49.jpg"
import image50 from "./Images/50.jpg"
import image51 from "./Images/51.jpg"
import image52 from "./Images/52.jpg"
import image53 from "./Images/53.jpg"
import image54 from "./Images/54.jpg"
import image55 from "./Images/55.jpg"
import image56 from "./Images/56.jpg"
import image57 from "./Images/57.jpg"
import image58 from "./Images/58.jpg"
import image59 from "./Images/59.jpg"
import image60 from "./Images/60.jpg"
import image61 from "./Images/61.jpg"
import image62 from "./Images/62.jpg"
import image63 from "./Images/63.jpg"
import image64 from "./Images/64.jpg"
import image65 from "./Images/65.jpg"
import image66 from "./Images/66.jpg"
import image67 from "./Images/67.jpg"
import image68 from "./Images/68.jpg"
import image69 from "./Images/69.jpg"
import image70 from "./Images/70.jpg"
import image71 from "./Images/71.jpg"
import image72 from "./Images/72.jpg"
import image73 from "./Images/73.jpg"
import image74 from "./Images/74.jpg"
import image75 from "./Images/75.jpg"
import image76 from "./Images/76.jpg"
import image77 from "./Images/77.jpg"
import image78 from "./Images/78.jpg"
import image79 from "./Images/79.jpg"
import image80 from "./Images/80.jpg"
import image81 from "./Images/81.jpg"
import image82 from "./Images/82.jpg"
import image83 from "./Images/83.jpg"
import image84 from "./Images/84.jpg"
import image85 from "./Images/85.jpg"
import image86 from "./Images/86.jpg"
import image87 from "./Images/87.jpg"
import image88 from "./Images/88.jpg"
import image89 from "./Images/89.jpg"
import image90 from "./Images/90.jpg"
import image92 from "./Images/92.jpg"
import image93 from "./Images/93.jpg"
import image94 from "./Images/94.jpg"
import image96 from "./Images/96.jpg"
import image97 from "./Images/97.jpg"
import image98 from "./Images/98.jpg"
import image99 from "./Images/99.jpg"
import image100 from "./Images/100.jpg"
import image101 from "./Images/101.jpg"
import image102 from "./Images/102.jpg"
import image103 from "./Images/103.jpg"
import image104 from "./Images/104.jpg"
import image105 from "./Images/105.jpg"


export const CartContext = createContext();

const Context = ({children}) => {
  const [ products ] = useState([
    {
      image:image1,
      name:"BLACK RESIN EARRING",
      price:"149",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image2,
      name:"HOWL'S MOVING CASTLE EARRING",
      price:"99",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image3,
      name:"SEQUENCE FABRIC EARRING",
      price:"99",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image4,
      name:"ALPHABET KEYRING (M)",
      price:"99",
      category:"keyrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image5,
      name:"GAMUSA EARRING #01",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image6,
      name:"GAMUSA EARRING #02",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image7,
      name:"GAMUSA JEWELLERY SET",
      price:"199",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image8,
      name:"GAMUSA EARRING #03",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image9,
      name:"GAMUSA EARRING #04",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image10,
      name:"GAMUSA EARRING #05",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image11,
      name:"FLAT PEARL EARRING",
      price:"99",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image12,
      name:"FLOWER HEART EARRING",
      price:"99",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image13,
      name:"GLOW IN THE DARK PENDANT",
      price:"149",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image14,
      name:"SIMLY CHARM EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image15,
      name:"SILVER FAN EARRINGS",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image16,
      name:"CHAIN BEADS EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image17,
      name:"GLOW IN THE DARK KEYCHAIN (T)",
      price:"149",
      category:"keyrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image18,
      name:"HEART CHARM EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image19,
      name:"WHITE PEARL ON CHAIN",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image20,
      name:"LETTER KEYCHAIN (A)",
      price:"129",
      category:"keyrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image21,
      name:"CUTE CLOUD EARRINGS",
      price:"119",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image22,
      name:"WHITE PEARL FLOWER",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image23,
      name:"BLACK PEARL FLOWER",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image24,
      name:"GOLDEN KORI HOOPS",
      price:"79",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image25,
      name:"KORI HANGERS",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image26,
      name:"RECTANGULAR FABRIC EARRING (PINK)",
      price:"129",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image27,
      name:"FABRIC ON HOOPS",
      price:"59",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image28,
      name:"YELLOW FABRIC STUD",
      price:"99",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image29,
      name:"CLAY TRIPLE FLOWER (RED)",
      price:"159",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image30,
      name:"CLAY YELLOW SUNFLOWER",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image31,
      name:"CLAY TRIPLE LAYER FLOWER (BLACK AND PINK)",
      price:"159",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image32,
      name:"CLAY TRIPLE LAYER FLOWER (BLACK AND GOLDEN)",
      price:"159",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image33,
      name:"BLUE FABRIC EARRING",
      price:"59",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image34,
      name:"PEACH HOOPS",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image35,
      name:"PEACH HOOPS (BIG)",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image36,
      name:"RING UNCUT PEARL",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image37,
      name:"SILVER PEARL BUTTERFLY",
      price:"69",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image38,
      name:"PINK STAR",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image39,
      name:"UNCUT BLUE GLASS EARRING",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image40,
      name:"TRANSPARENT BEADS HOOPS",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image41,
      name:"RED FABRIC V CUT EARRING",
      price:"59",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image42,
      name:"GOLD FABRIC WITH BEADS HANGING",
      price:"89",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image43,
      name:"WHITE EMBROIDERY EARRING",
      price:"69",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image44,
      name:"PRINTED BLUE AND WHITE EARRING",
      price:"129",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image45,
      name:"BLUE AND WHITE FABRIC STUD",
      price:"79",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image46,
      name:"FABRIC EARRING #01",
      price:"119",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image47,
      name:"GOLDEN KORI BRACELET",
      price:"59",
      category:"accessories",
      amount:"1",
      quantity:"99"
    },
    {
      image:image48,
      name:"FABRIC EARRING #02",
      price:"129",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image49,
      name:"FABRIC EARRING #03",
      price:"99",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image50,
      name:"FABRIC EARRING #04",
      price:"129",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image51,
      name:"FABRIC EARRING #05",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image52,
      name:"GAMUSA EARRING #06",
      price:"119",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image53,
      name:"GAMUSA EARRING #07",
      price:"159",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image54,
      name:"GAMUSA EARRING #08",
      price:"169",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image55,
      name:"GAMUSA EARRING #09",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"0"
    },
    {
      image:image56,
      name:"GAMUSA EARRING #10",
      price:"149",
      category:"fabric jewellery",
      amount:"1",
      quantity:"1"
    },
    {
      image:image57,
      name:"UNCUT PEARL EARRINGS",
      price:"99",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image58,
      name:"MOON AND STAR EARRINGS",
      price:"149",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image59,
      name:"WATERMELON EARRINGS",
      price:"139",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image60,
      name:"KORI SHELL EARRINGS (SILVER)",
      price:"49",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image61,
      name:"BUTTERFLY EARRINGS (PINK)",
      price:"139",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image62,
      name:"RED CHERRY EARRINGS",
      price:"139",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image63,
      name:"RESIN FLOWER IN HOOPS EARRINGS",
      price:"129",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image64,
      name:"PEARL HEART EARRINGS",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image65,
      name:"GLASS BEADS EARRINGS (WHITE)",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image66,
      name:"RESIN BLACK AND WHITE EARRINGS",
      price:"149",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image67,
      name:"WHITE DAISY EARRINGS",
      price:"139",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image68,
      name:"CLAY EARRING (FLOWER)",
      price:"59",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image69,
      name:"CHARM #01",
      price:"139",
      category:"phonecharms",
      amount:"1",
      quantity:"99"
    },
    {
      image:image70,
      name:"CHARM #02",
      price:"99",
      category:"phonecharms",
      amount:"1",
      quantity:"99"
    },
    {
      image:image71,
      name:"CHARM #03",
      price:"149",
      category:"phonecharms",
      amount:"1",
      quantity:"99"
    },
    {
      image:image72,
      name:"CHARM #04",
      price:"99",
      category:"phonecharms",
      amount:"1",
      quantity:"99"
    },
    {
      image:image73,
      name:"HAIR CLIP #01",
      price:"59",
      category:"accessories",
      amount:"1",
      quantity:"99"
    },
    {
      image:image74,
      name:"HAIR CLIP #02",
      price:"59",
      category:"accessories",
      amount:"1",
      quantity:"99"
    },
    {
      image:image75,
      name:"HAIR CLIP #03",
      price:"59",
      category:"accessories",
      amount:"1",
      quantity:"99"
    },
    {
      image:image76,
      name:"HAIR CLIP #04",
      price:"59",
      category:"accessories",
      amount:"1",
      quantity:"99"
    },
    {
      image:image77,
      name:"PENDANT #01",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image78,
      name:"PENDANT #02",
      price:"129",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image79,
      name:"PENDANT #03",
      price:"139",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image80,
      name:"PENDANT #04",
      price:"179",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image81,
      name:"PENDANT #05",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image82,
      name:"PENDANT #06",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image83,
      name:"PENDANT #07",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image84,
      name:"PENDANT #08",
      price:"179",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image85,
      name:"PENDANT #09",
      price:"139",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image86,
      name:"PENDANT #10 (Glow in the dark)",
      price:"179",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image87,
      name:"PENDANT #11",
      price:"149",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image88,
      name:"PENDANT #12",
      price:"149",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image89,
      name:"PENDANT #13",
      price:"139",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image90,
      name:"PENDANT #14",
      price:"149",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image92,
      name:"PENDANT #15 (Glow in the dark)",
      price:"189",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image93,
      name:"PENDANT #16",
      price:"179",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image94,
      name:"PENDANT #17",
      price:"149",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image96,
      name:"PENDANT #18",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image97,
      name:"PENDANT #19",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image98,
      name:"PENDANT #20",
      price:"99",
      category:"necklaces",
      amount:"1",
      quantity:"99"
    },
    {
      image:image99,
      name:"PENDANT #21",
      price:"99",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image100,
      name:"YELLOW JEWELLERY SET WITH EARRINGS AND FINGER RINGS",
      price:"449",
      category:"jewellery set",
      amount:"1",
      quantity:"99"
    },
    {
      image:image101,
      name:"JEWELLERY SET BLUE",
      price:"349",
      category:"jewellery set",
      amount:"1",
      quantity:"99"
    },
    {
      image:image102,
      name:"CLAY EARRINGS PINK #01",
      price:"159",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image103,
      name:"CLAY EARRINGS PINK #02",
      price:"159",
      category:"earrings",
      amount:"1",
      quantity:"99"
    },
    {
      image:image104,
      name:"FABRIC EARRINGS #06",
      price:"99",
      category:"fabric jewellery",
      amount:"1",
      quantity:"99"
    },
    {
      image:image105,
      name:"FABRIC EARRINGS #07",
      price:"99",
      category:"fabric jewellery",
      amount:"1",
      quantity:"99"
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