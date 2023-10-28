import React from "react"
import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>NotNull</h1>
            <NavLink className='nav-link' to={"/"}>Home</NavLink>
            <NavLink className='nav-link' to={"/map"}>Map</NavLink>
            <NavLink className='nav-link' to={"/control"}>Rover Control</NavLink>
        </div>
    )
}

export default Navbar