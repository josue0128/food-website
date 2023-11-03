import React from 'react';
import './header.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <p>Try our new meal</p>
        <h1><span style={{color:"var(--primary-color)"}}>DOUBLE <br/></span><span style={{color:"var(--tertiary-color)"}}>NUKE<br/></span><span style={{color:"white"}}>BURGER</span></h1>
        <button>Order Now!</button>
        
      </div>
      <a href="" className='next' style={{color:"white"}}><AiOutlineArrowRight size={30} color='white'/></a>
      <div className='bottom'>
        <div id='active'></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
