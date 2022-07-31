import React from 'react'
import './Menu.css'
import menu1 from '../../images/menu1.png'
import menu2 from '../../images/menu2.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='Menu'>
    <h2>OUR MENU</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

    <div className="menu-images">
    <img src={menu1} alt="" />
    <img src={menu2} alt="" />
  
    </div>
    <Link to={'/menu'}><button className='menu-button'>MENU</button></Link>
    </div>
  )
}

export default Menu