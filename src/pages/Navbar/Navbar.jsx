import React from 'react'
import pic1 from '../../assets/Pasted image.png'
import menu from '../../assets/menu.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <img src={menu} alt="" className='menu' />
            <img src={pic1} alt="" className='logo' />
            <h1>MubaCast</h1>
            <input type="text" placeholder='Search Movies/Tv Shows' className="movie-search" />
            <button>Download App</button>

        </div>
    )
}

export default Navbar