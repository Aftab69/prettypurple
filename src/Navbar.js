import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Images/animatedbutterflylogo.gif";
import cart from "./Images/carticon.png";
import { CartContext } from "./Context.js"

const Navbar = () => {
  let { itemnumber } = useContext(CartContext)

  return (
    <nav>
      <div className='navMainItems'>
        <div className='logoAndTitleContainer'>
            <Link to="/"><div className='logoContainer'><img src={logo} alt={logo} /></div></Link>
            <Link style={{textDecoration:"none", color:"white"}} to="/"><div className='titleContainer'>ONLINE STORE</div></Link>
        </div>
        <div className='cartContainer'>
            <div className='cartItemNumber'><span>{itemnumber}</span></div>
            <Link to="/cart"><div className='cartIcon'><img src={cart} alt={cart} /></div></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar