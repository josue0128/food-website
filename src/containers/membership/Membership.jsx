import React from 'react';
import './membership.css';
import membership_image from '../../assets/cc.png';

const Membership = () => {
  return (
    <div className='membership-flex-container'>
        <div className="membership-content">
            <div className="membership-content-left-side">
              <h3>Get Our</h3>
              <h1>MEMBERSHIP</h1>
              <p>Get a special offers and other exclusive services by owning a membership</p>
              <div className="membership-action-button">
                <button>Learn More</button>
              </div>
            </div>
            <div className="membership-content-right-side">
                  <img src={membership_image} alt='membership' />
            </div>
           
        </div>
        <div className="membership-slider-buttons">
            <div id='active'></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Membership