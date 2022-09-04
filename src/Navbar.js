import React from 'react';
import "./Navbar.css";
import logo from "./Images/animatedbutterflylogo.gif";
import cart from "./Images/carticon.png";

const Navbar = () => {
  return (
    <nav>
      <div className='navMainItems'>
        <div className='logoAndTitleContainer'>
            <div className='logoContainer'><img src={logo} alt={logo} /></div>
            <div className='titleContainer'>PRETTY PURPLE</div>
        </div>
        <div className='cartContainer'>
            <div className='cartItemNumber'><span>0</span></div>
            <div className='cartIcon'><img src={cart} alt={cart} /></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar