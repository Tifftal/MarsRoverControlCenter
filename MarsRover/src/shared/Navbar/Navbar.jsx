import React, { useState } from "react"
import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [coordinates, setCoordinates] = useState({ longitude: 2048, latitude: 1939.5 });
    return (
        <div className="navbar">
            <h1>NotNull</h1>
            <NavLink className='nav-link' to={"/"}>Home</NavLink>
            <NavLink
                className='nav-link'
                to={{
                    pathname: "/map",
                    state: { coordinates },
                }}
            >
                Map
            </NavLink>
            <NavLink className='nav-link' to={"/control"}>Rover Control</NavLink>
        </div>
    )
}

export default Navbar