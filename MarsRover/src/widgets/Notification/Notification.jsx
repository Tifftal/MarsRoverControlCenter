import React, { useState, useEffect } from "react";
import "./Notification.css";

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

    return (
        <div className={`notification ${isClosing ? "closing" : "opening"}`}>
            <button className="textNtfy">{message}</button>
            <button className="closeBtn" onClick={closeNotification}>close</button>
        </div>
    );
}

export default Notification;
