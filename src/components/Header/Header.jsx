import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <h2>LA CARAVANA</h2>
        <ul>
            <li><Link to={'/'}>HOME</Link></li>
            <li><a href='#'>ABOUT</a></li>
            <li><Link to={'/menu'}>MENU</Link></li>
            <li><a href='#'>CONTACT</a></li>
        </ul>
    </div>


    
  )

  
}



export default Header