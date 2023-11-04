import React from 'react'
import './promotion.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Promotion = () => {
  return (
    <div className='promotion-flex-container'>
          <div className="promotion-content">
              <h3>Get free</h3>
              <h1>FRIED<br />WONTON</h1>
              <p>For every purchase NUKE BURGERS<br />variants</p>
          </div>
          <div className="promotions-action-button">
              <button>Learn More</button>
          </div>
          <div className="slider-buttons">
            <div id='active'></div>
            <div></div>
            <div></div>
          </div>
          
            <a className='next'><AiOutlineArrowRight size={30} color='white'/></a>

    </div>
  )
}

export default Promotion