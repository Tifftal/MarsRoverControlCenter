import React from "react"
import './SideBar.css'
import { useModal } from "../../hooks/useModal"
import { Modal } from "../../shared/ModalWindow/Modal"
import { useSideBar } from "../../hooks/useSideBar"

const SideBar = ({ activeIndex, handleGetRover, rovers }) => {
    const { open, handleOpenModal, handleCloseModal } = useModal();
    const { handleSubmitForm, response } = useSideBar();

    return (
        <div className="side-bar">
            {open && (
                <Modal
                    bgColor={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    header={"Add Rover"}
                    handleClose={handleCloseModal}
                >
                    <form onSubmit={(e) => {handleSubmitForm(e, handleCloseModal)}}>
                        <input type="text" placeholder="Name" id="Name" required/>
                        <input type="text" placeholder="Maneuverability" id="Maneuverability" required/>
                        <input type="text" placeholder="Speed" id="Speed" required/>
                        {/* <input type="text" placeholder="Fuel" /> */}
                        {response === "" ? (null) : (response)}
                        <button className="submit" type="submit">Send</button>
                    </form>
                </Modal>
            )}
            <button className="addBtn" onClick={() => { handleOpenModal() }}>+ Add Rover</button>
            {rovers && rovers.map((rover, idx) => (
                <p className={idx === activeIndex ? "active-class side-bar-link" : "non-active-class side-bar-link"} onClick={() => { handleGetRover(idx) }} key={idx}>{rover.name} <button><img src="../../img/icons8-редактировать-96.png"/></button></p>
            ))}
        </div>
    )
}

export default SideBar;