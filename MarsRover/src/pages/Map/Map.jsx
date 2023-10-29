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

export const Map = () => {
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

    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    };

    const HandleCloseNote = () => {
        setIsOpen(false)
    };

    const model = {
        id: 5,
        x: 1.77,
        y: 1.77,
        obstacleTraverseCoefficient: 1.77,
        roubion: 1.77,
        montdenier: 1.77,
        montagnac: 1.77,
        salette: 1.77,
        robine: 1.77,
        swiftRun: 1.77,
        crosswindLake: 1.77,
        roverId: 5,
    };

    return (
        <>
            <MapWrapper>
                <SideTab
                    header="Маркеры"
                    side={{ left: "0px" }}
                    open={leftTab}
                    setIsOpen={openLeftTab}
                    setIsClose={closeLeftTab}
                >
                    {points.map((point, index) => (
                        <Tabs key={index}>
                            <p key={index}>#{index + 1} {point.name}</p>
                        </Tabs>
                    ))}
                </SideTab>
                <SideTab
                    header="Марсоходы"
                    side={{ right: "0px" }}
                    open={rightTab}
                    setIsOpen={openRightTab}
                    setIsClose={closeRightTab}
                >
                    {rovers && rovers.map((rover, index) => (
                        <Tabs>
                            <p key={index} onClick={() => { handleGetRover(index) }}>#{rover.id} {rover.name}</p>
                        </Tabs>
                    ))}
                </SideTab>
                {isOpen && (
                    <Popup onClose={HandleCloseNote} setIsOpen={setIsOpen}>
                        <div>
                            {/* Popup
                            <p>{model.id}</p> */}
                            <h4>Coordinates where the check took place</h4>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10%",
                            }}>
                                <p>x: {model.x}</p>
                                <p>y: {model.y}</p>
                            </div>

                            <h4 style={{
                                marginTop: "2%",
                            }}>
                                ObstacleTraverseCoefficient</h4>
                            <p>{model.obstacleTraverseCoefficient}</p>

                            <h4 style={{
                                marginTop: "2%",
                            }}>
                                Rocks discovered:</h4>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '2%',
                            }}>
                                <p>Roubion: {model.roubion}%</p>
                                <p>Montdenier: {model.montdenier}%</p>
                                <p>Montagnac: {model.montagnac}%</p>
                                <p>Salette: {model.salette}%</p>
                                <p>Robine: {model.robine}%</p>
                                <p>SwiftRun: {model.swiftRun}%</p>
                                <p>CrosswindLake: {model.crosswindLake}%</p>
                                {/* <p>{model.roverId}</p> */}
                            </div>
                        </div>
                    </Popup>
                )}
                <button onClick={HandleOpenNote}>Popup</button>
                {open && (
                    <Modal
                        header={point.name}
                        handleClose={handleCloseModal}
                    >
                        <p>Долгота: {point.coords[0]}</p>
                        <p>Широта: {point.coords[1]}</p>
                    </Modal>
                )}
                <RoverController>
                    {rover && (
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <div className="rover-data"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "20%",
                                }}
                            >
                                {rover && (
                                    <>
                                        <h4>Name: {rover.name}</h4>
                                        <h4>Speed: {rover.speed}</h4>
                                        <h4>Maeuverability: {rover.maneuverability}</h4>
                                    </>
                                )}
                            </div>
                            <div className="logs"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "60%",
                                }}>
                                {
                                    history.map((hist, idx) => (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                width: "100%"
                                            }}
                                            key={idx}
                                        >
                                            <p>{hist.roverId}</p>
                                            <p>{hist.timestamp}</p>
                                            <p>{hist.x}</p>
                                            <p>{hist.y}</p>
                                            <p>{hist.movementStatus}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="rover-controller"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "20%",
                                }}
                            >
                                <>
                                    <form onSubmit={(e) => {
                                        handleSendToOperation(e, rover.id);
                                    }}>
                                        <input type="text" placeholder="Longitude" id="longitude"></input>
                                        <input type="text" placeholder="Latitude" id="latitude"></input>
                                        <button type="submit">Send</button>
                                    </form>
                                    <form onSubmit={(e) => {
                                        handleMoveRover(e, rover.id)
                                    }}>
                                        <select placeholder="COMMAND" id="command">
                                            <option>MOVE</option>
                                        </select>
                                        <input placeholder="Longitude" id="MoveToX"></input>
                                        <input placeholder="Latitude" id="MoveToY"></input>
                                        <button>Send</button>
                                    </form>
                                </>
                            </div>
                        </div>
                    )}
                </RoverController>
                <Mapper
                    handleOpenModal={handleOpenModal}
                />
            </MapWrapper>
        </>
    )
};