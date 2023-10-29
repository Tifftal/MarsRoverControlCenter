import { Tabs } from "../../entities/Tabs/Tabs";
import { useModal } from "../../hooks/useModal";
import { points } from "../../mocks/mapMock";
import { Modal } from "../../shared/ModalWindow/Modal";
import { SideTab } from "../../shared/SideTab/SideTab";
import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import { useHookTab } from "../../hooks/useHookTab";
import { useSideBar } from "../../hooks/useSideBar";
import { useEffect } from "react";
import axios from "axios";
import { RoverController } from "../../widgets/RoverController/RoverController";
import { useRoverHsitory } from "../../hooks/useRoverHistory";

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
                                {rover.sendToOperationDate === null ?
                                    (   <>
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
                                        
                                    )
                                    :
                                    (
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
                                    )
                                }
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