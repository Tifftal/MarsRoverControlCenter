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