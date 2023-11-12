import React from 'react';
import './location.css';
import locationImage from '../../assets/locations.png'

const Location = () => {
  return (
    <div className='location'>
      <div>
        <h3>Our Restaurant</h3>
        <h1>LOCATIONS</h1>
        <p>We are available in <span>JAKARTA</span>, <span>BANDUNG</span>,<br /><span>SURABAYA</span>, and <span>BALI</span>.</p>
        <br />
        <button>Learn More</button>
      </div>
      
      <img src={locationImage} alt="" />
      
    </div>
  )
}

export default Location