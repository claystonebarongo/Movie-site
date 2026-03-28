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

        </div>
    )
}

export default Sidebar