import React, { useState,createContext } from 'react'

export const CartContext = createContext();

const Context = ({children}) => {
    let [ itemnumber, setItemnumber ] = useState(0);
  return (
    <>
        <CartContext.Provider value={{ itemnumber, setItemnumber }}>
            {children}
        </CartContext.Provider>
    </>
  )
}

export default Context