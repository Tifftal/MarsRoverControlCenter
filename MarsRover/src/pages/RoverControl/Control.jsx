import React from "react"
import './Control.css'
import SideBar from "../../widgets/SideBar/SideBar"
import MainPage from "../MainPage/MainPage"
import { useState } from "react"

const Control = () => {
    const [rover, setRover] = useState(null);

    return (
        <div className="control">
            <SideBar rover={rover} setRover={setRover} />
            <div className="rover-info">
                {
                    rover && (
                        <div>
                            {rover.info}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Control