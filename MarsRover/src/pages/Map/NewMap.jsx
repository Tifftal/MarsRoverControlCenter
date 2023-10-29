import { Tabs } from "../../entities/Tabs/Tabs";
import { useModal } from "../../hooks/useModal";
import { points } from "../../mocks/mapMock";
import { Modal } from "../../shared/ModalWindow/Modal";
import { SideTab } from "../../shared/SideTab/SideTab";
import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import { useHookTab } from "../../hooks/useHookTab";
import { useSideBar } from "../../hooks/useSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { RoverController } from "../../widgets/RoverController/RoverController";
import { useRoverHsitory } from "../../hooks/useRoverHistory";
import { Popup } from "../../shared/PopupMission/Popup";
import './newMap.css'

export const NewMap = () => {
    const { open, point, handleOpenModal, handleCloseModal } = useModal();
    const { leftTab, rightTab, openLeftTab, closeLeftTab, openRightTab, closeRightTab } = useHookTab();
    const { activeIndex, rover, handleGetRover, setRovers, rovers } = useSideBar();
    const { history, addEventToHistory } = useRoverHsitory();

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

    const handleSendToOperation = (e, id) => {
        e.preventDefault();

        const longitude = Number(document.getElementById("longitude").value);
        const latitude = Number(document.getElementById("latitude").value);

        const data = {
            x: longitude,
            y: latitude,
        }

        axios.post(`http://localhost:8082/api/rover/${id}/startOperation`, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleMoveRover = (e, id) => {
        e.preventDefault();

        const command = document.getElementById("command").value;
        const moveToX = Number(document.getElementById("MoveToX").value);
        const moveToY = Number(document.getElementById("MoveToY").value);

        const data = {
            command: command,
            x: moveToX,
            y: moveToY,
        };

        axios.post(`http://localhost:8082/api/rover/${id}/commands`, data)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="map">
            map
        </div>
    )
};