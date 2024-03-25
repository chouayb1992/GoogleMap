import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='Header'>
    <nav>
        <div className='logo'>
             <a href=''>WEWORK</a>
        </div>
        <div className='links'>
             <a href=''>HOME</a>
             <a href=''>ABOUT US</a>
             <a href=''>CALL US</a>
        </div>
    </nav>
        <img className='accueil-pic' src='https://img.freepik.com/photos-gratuite/espace-bureau-moderne-ordinateurs-bureau-modernes-crees-technologie-generative-ai_185193-110089.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1711152000&semt=ais'/>
    <div>
        <p className='map-text'>Find us in Google Map</p>
    </div>

</div>
  )
}

export default Header