import React from 'react'
import {link} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"
function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button> <ReorderIcon/></button>
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
