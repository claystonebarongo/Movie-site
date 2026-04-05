import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './pages/Navbar/Navbar'


import Home from './pages/Home/Home'


import Sidebar from './pages/sidebar/Sidebar'

function App() {


  const [category, setCategory] = useState(0)



  const [openSidebar, setOpenSidebar] = useState(true)


  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }


  return (
    <div>


      <Navbar toggleSidebar={toggleSidebar} setSearchQuery={setSearchQuery} />

      <div className="main">



        <Sidebar openSidebar={openSidebar} setCategory={setCategory} />
        <Home category={category} searchQuery={searchQuery} />
      </div>


    </div>
  )

}

export default App
