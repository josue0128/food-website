import React from 'react';
import './menu.css';
import { Card } from '../../components/card/Card';
import { getMenuList } from '../../assets/MenuList';
import { AiOutlineDown } from 'react-icons/ai';


const Menu = () => {
  var menuList = getMenuList();

  return (
    <div className='food-menu'>
      <h1>Our top five meals</h1>
      <p>Try our five best meals today.</p>
      <div className="menu-container">
        {
          menuList.map((image) => {
            return <Card image={image.image} desc={image.desc} price={image.price}/>
          })
        }
      </div>
      <div className='menu-action'>
        <p>See more menus</p>
        <AiOutlineDown size={40} color='red'/>
      </div>
    </div>
  )
}

export default Menu
