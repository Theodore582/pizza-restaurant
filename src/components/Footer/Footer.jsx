import React from 'react'
import './Footer.css'
import pizza1 from '../../images/pizza1.png'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'


const Footer = () => {
  return (
    <div className="footer">
      <img src={pizza1} alt="" />
      <h2>LA CARAVANA</h2>
     
      
      <div className="footer-icons">
        <div className='icon'><BsInstagram /></div>
        <div className='icon'> <FaFacebookF /></div>
        <div className='icon'> <ImWhatsapp /></div>
      </div>

      </div>
    
  )
}

export default Footer