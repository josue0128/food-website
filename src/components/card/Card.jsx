import React from 'react';
import './card.css';

export const Card = (props) => {  
  return (
    <div className='menu-card'>
      <img src={props.image} alt={props.desc} />
      <div className='menu-detail'>
        <p>{props.desc}</p>
        <div className='menu-price'>
          <p>RP {props.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
