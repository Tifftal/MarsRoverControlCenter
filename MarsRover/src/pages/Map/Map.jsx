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

export const Map = () => {
    const { open, point, handleOpenModal, handleCloseModal } = useModal();
    const { leftTab, rightTab, openLeftTab, closeLeftTab, openRightTab, closeRightTab } = useHookTab();
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

    const sendRoverToMission = (id) => {
        axios.post(`http://localhost:8082/api/rover/${id}`)
    }

    const handleSendToOperation = (e) => {
        e.preventDefault();

        const longitude = Number(document.getElementById("Longitude").value);
        const latitude = Number(document.getElementById("Latitude").value);

        // axios.post(`http://localhost:8082/api/rover`)
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

                            </div>
                            <div className="rover-controller"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "20%",
                                }}
                            >
                                {rover.sendToOperationDate === null ?
                                    (
                                        <form onSubmit={(e) => {
                                            handleSendToOperation(e);
                                        }}>
                                            <input type="text" placeholder="Longitude" id="latitude"></input>
                                            <input type="text" placeholder="Latitude" id="latidiute"></input>
                                            <button type="submit">Send</button>
                                        </form>
                                    )
                                    :
                                    (
                                        <div>
                                        </div>
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