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
                <li onClick={() => setCategory(0)}>
                    <Home size={18} /> Home
                </li>
                <li onClick={() => setCategory(28)}>
                    <Zap size={18} /> Action
                </li>
                <li onClick={() => setCategory(12)}>
                    <Map size={18} /> Adventure
                </li>
                <li onClick={() => setCategory(35)}>
                    <Laugh size={18} /> Comedy
                </li>
                <li onClick={() => setCategory(18)}>
                    <Drama size={18} /> Drama
                </li>
                <li onClick={() => setCategory(27)}>
                    <Ghost size={18} /> Horror
                </li>
                <li onClick={() => setCategory(10749)}>
                    <Heart size={18} /> Romance
                </li>
                <li onClick={() => setCategory(53)}>
                    <AlertTriangle size={18} /> Thriller
                </li>
                <li onClick={() => setCategory(878)}>
                    <Rocket size={18} /> Sci-Fi
                </li>
            </ul>
        </div>
    )
}

export default Sidebar