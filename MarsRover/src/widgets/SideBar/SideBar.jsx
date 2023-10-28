import React from "react"
import './SideBar.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useModal } from "../../hooks/useModal"
import { Modal } from "../../shared/ModalWindow/Modal"
import { useSideBar } from "../../hooks/useSideBar"
import { rovers } from "../../mocks/roverMock"

const SideBar = ({ activeIndex, handleGetRover }) => {
    const { open, handleOpenModal, handleCloseModal, handleSubmitForm } = useModal();

    return (
        <div className="side-bar">
            {open && (
                <Modal
                    bgColor={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    header={"Add Rover"}
                    handleClose={handleCloseModal}
                >
                    <form onSubmit={() => { handleSubmitForm(e) }}>
                        <input type="text" placeholder="Name" id="Name" />
                        <input type="text" placeholder="Maneuverability" id="Maneuverability" />
                        <input type="text" placeholder="Speed" id="Speed" />
                        {/* <input type="text" placeholder="Fuel" /> */}
                        <button className="submit" type="submit">Send</button>
                    </form>
                </Modal>
            )}
            <button className="addBtn" onClick={() => { handleOpenModal() }}>+ Add Rover</button>
            {rovers.map((rover, idx) => (
                <p className={idx === activeIndex ? "active-class side-bar-link" : "non-active-class side-bar-link"} onClick={() => { handleGetRover(idx) }} key={idx}>{rover.name} <button><img src="../../img/icons8-редактировать-96.png"/></button></p>
            ))}
        </div>
    )
}

export default SideBar;