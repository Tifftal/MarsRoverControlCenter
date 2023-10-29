import React, { useEffect } from "react"
import './Control.css'
import SideBar from "../../widgets/SideBar/SideBar"
import { useSideBar } from "../../hooks/useSideBar"
import axios from "axios"

const Control = () => {
    const { activeIndex, rover, handleGetRover, setRovers, rovers } = useSideBar();

    useEffect(() => {
        (
            axios.get('http://localhost:8082/api/rover/')
            .then(response => {
                console.log(response.data);
                setRovers(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        )
    }, [])

    return (
        <div className="control">
            <SideBar activeIndex={activeIndex} handleGetRover={handleGetRover} rovers={rovers} />
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