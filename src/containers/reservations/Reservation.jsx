import {useEffect, useState} from 'react';
import reseravation_image from '../../assets/reservations.png';
import reservation_mobile from '../../assets/3959915 2.png';
import './reservation.css';
const Reservation = () => {


  return (
    <div className='reservation-flex-container'>
      <div className="container">
      <div className="reservation-content">
        <div className="title">
          <h3>Get Your</h3>
          <h1>RESERVATION</h1>
        </div>
        <div className="action">
        <button>Book Now</button>
      </div>
      </div>
      </div>
     
    </div>
    
  )
}

export default Reservation