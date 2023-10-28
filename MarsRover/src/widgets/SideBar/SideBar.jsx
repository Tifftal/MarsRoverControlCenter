import React from "react"
import './SideBar.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useModal } from "../../hooks/useModal"
import { Modal } from "../../shared/ModalWindow/Modal"

const SideBar = ({ rover, setRover }) => {
    const { open, point, handleOpenModal, handleCloseModal } = useModal();
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
            {open && (
                <Modal
                    bgColor={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    header={"Add Rover"}
                    handleClose={handleCloseModal}
                >
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Info" />
                        <button type="submit">Send</button>
                    </form>
                </Modal>
            )}
            <button className="addBtn" onClick={() => { handleOpenModal() }}>+ Add Rover</button>
            {rovers.map((rover, idx) => (
                <p className={idx === activeIndex ? "active-class side-bar-link" : "non-active-class side-bar-link"} onClick={() => { handleGetRover(idx) }} key={idx}>{rover.name}</p>
            ))}
        </div>
    )
}

export default SideBar;