import React from "react"
import './Control.css'
import SideBar from "../../widgets/SideBar/SideBar"
import { useSideBar } from "../../hooks/useSideBar"

const Control = () => {
    const { activeIndex, rover, handleGetRover } = useSideBar();

    return (
        <div className="control">
            <SideBar activeIndex={activeIndex} handleGetRover={handleGetRover} />
            <div className="rover-info">
                {
                    rover && (
                        <div className="rover-info-div">
                            <p><b>Rover Status:</b> {rover.status}</p>
                            <p><b>Rover Speed:</b> {rover.speed}</p>
                            <p><b>Rover Meneuverability:</b> {rover.maneuverability}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Control