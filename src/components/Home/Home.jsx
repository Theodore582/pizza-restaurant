import React from 'react'
import './Home.css'
import pizza1 from '../../images/pizza1.png'

const Home = () => {
    return (
        <div className='Home'>
            <div className="home-text">
                <h2>LA CARAVANA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.</p>
            </div>
            <div className='home-img'>
            <img src={pizza1} alt="" />
            </div>
        </div>
    )
}

export default Home