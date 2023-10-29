import React, { useState } from "react";
import Notification from "./Notification";
import "./NotificationTest.css";

function App() {
    const [notifications, setNotifications] = useState([]);

    const createNotification = (message) => {
        const newNotification = {
            message,
            id: notifications.length,
        };
        setNotifications([...notifications, newNotification]);
    };

    const deleteNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    return (
        <div className="App">
            <h1>Уведомления</h1>
            <button onClick={() => createNotification("да да да это уведомление. чел уже на марсе.")}>Уведомление</button>
            {notifications.map(({ id, message }) => (
                <Notification key={id} message={message} onDelete={() => deleteNotification(id)} />
            ))}
        </div>
    );
}

export default App;
