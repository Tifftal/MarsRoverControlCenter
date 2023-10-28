import React from "react"
import './SideBar.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"

const SideBar = ({ rover, setRover }) => {
    const rovers = [
        {
            name: "Rover 1",
            info: "Info1"
        },
        {
            name: "Rover 2",
            info: "Info2",
        },
        {
            name: "Rover 3",
            info: "Info3",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleGetRover = (idx) => {
        setRover(rovers[idx]);
        setActiveIndex(idx);
    }

    return (
        <div className="side-bar">
            <button>+ Add Rover</button>
            {rovers.map((rover, idx) => (
                <p className={idx === activeIndex ? "active-class side-bar-link" : "non-active-class side-bar-link"} onClick={() => { handleGetRover(idx) }} key={idx}>{rover.name}</p>
            ))}
        </div>
    )
}

export default SideBar;