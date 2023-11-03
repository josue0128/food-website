import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar-flex-box'>
        <div className="logo">
          <h1>TASTY GOOD</h1>
        </div>
        <div className="content">
          <div className="menu">
              <a href='#'>Menu</a>
              <a href='#'>Reservation</a>
              <a href='#'>Blog</a>
              <a href='#'>About Us</a>
          </div>
          <div className="navbar-action-button">
            <button>Order Now</button>
          </div>
          <div className="mobile-menu">
          {
              toggleMenu
              ?<RiCloseLine color='#111' size={30} onClick={()=>{setToggleMenu(false)}} />
              :<RiMenu3Line color='#111' size={30} onClick={()=>{setToggleMenu(true)}}/>
            }
            {
              toggleMenu && (
                <div className='mobile-menu-links'>
                  <a href='#'>Menu</a>
                  <a href='#'>Reservation</a>
                  <a href='#'>Blog</a>
                  <a href='#'>About Us</a>
                </div>
              )
                
              
            }
             
          </div>
        </div>
    </div>
    
  )
}

export default Navbar

