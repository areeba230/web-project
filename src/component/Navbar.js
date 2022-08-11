import React, { useEffect, useState } from 'react'
import {link, useLocation} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"
function Navbar() {
    
    const [expandNavbar,setExpandNavbar]=useState(false);
    
    
    const location = useLocation();
    useEffect(() =>{
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "closed"}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev) => !prev)}}> <ReorderIcon/></button>
        </div>
        <div className='links'>
            <link to="/">Home</link>
            <link to="/projects">Project</link>
            <link to="/experience">Experience</link>
        </div>
    </div>
  )
}

export default Navbar
