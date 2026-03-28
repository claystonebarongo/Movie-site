import React from 'react'
import './Sidebar.css'
import {
    Home,
    Zap,
    Map,
    Laugh,
    Drama,
    Ghost,
    Heart,
    AlertTriangle,
    Rocket
} from 'lucide-react';

const Sidebar = ({ openSidebar, setCategory }) => {
    return (
        <div className={openSidebar ? "Side" : "Side2"}>
            <ul>

                <li onClick={() => setCategory(0)}>Home</li>


                <li onClick={() => setCategory(28)}>Action</li>
                <li onClick={() => setCategory(12)}>Adventure</li>



                <li onClick={() => setCategory(35)}>Comedy</li>
                <li onClick={() => setCategory(18)}>Drama</li>


                <li onClick={() => setCategory(27)}>Horror</li>


                <li onClick={() => setCategory(10749)}>Romance</li>
                <li onClick={() => setCategory(53)}>Thriller</li>
                <li onClick={() => setCategory(878)}>Sci-Fi</li>


            </ul>
        </div>
    )
}

export default Sidebar