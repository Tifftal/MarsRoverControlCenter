import React, { useState, useEffect } from "react";
import "./Notification.css";
import { Popup } from "../../shared/PopupMission/Popup";

function Notification({ message, onDelete }) {
    const [isClosing, setIsClosing] = useState(false);

    const closeNotification = () => {
        setIsClosing(true);
        setTimeout(() => {
            onDelete();
        }, 300);
    };

    useEffect(() => {
        if (!isClosing) {
            const timeoutId = setTimeout(closeNotification, 5000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isClosing]);

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

        <div className={`notification ${isClosing ? "closing" : "opening"}`}>
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
            <div className="visible-part">
                <button className="textNtfy" onClick={HandleOpenNote}>{message}</button>
                <button className="closeBtn" onClick={closeNotification}>close</button>
            </div>
        </div>
    );
}

export default Notification;
