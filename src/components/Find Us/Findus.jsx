import React from 'react'
import './Findus.css'
import findus from '../../images/findus.png'

const Findus = () => {
  return (
    <div className='Findus'>
      <h2>FIND US</h2>

      <div className="findus-section">
        <div className='findus-img'>
        <img src={findus} alt="" />
        </div>

        <div className='findus-text'>
        <p>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s.
        <span>
        <h5>ATTENDANCE</h5>
        Monday to Sunday  12:00pm - 8:00pm<br></br>
        
        <h5>DELIVERY</h5>
         Monday - Sunday  12:00pm - 8:00pm
        </span></p>

        </div>
      </div>
    </div>
  )
}

export default Findus