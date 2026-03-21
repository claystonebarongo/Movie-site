import React from 'react'
import pic1 from '../../assets/Pasted image.png'
import menu from '../../assets/menu.png'
import './Navbar.css'
const Navbar = ({ toggleSidebar, setSearchQuery }) => {
    return (
        <div className='Navbar'>
            <img src={menu} alt="" className='menu' onClick={toggleSidebar} />
            <img src={pic1} alt="" className='logo' />
            <h1>MubaCast. <span>Recommendation Site</span></h1>
            <input type="text" placeholder='Get Movies/Tv Shows Recommendations' className="movie-search" onChange={(e) => setSearchQuery(e.target.value)} />
            <button>Download App</button>

        </div>
    )
}

export default Navbar