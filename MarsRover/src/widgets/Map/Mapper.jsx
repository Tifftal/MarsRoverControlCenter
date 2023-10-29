import React, { useEffect, useRef } from 'react';
import ImageMapper from 'react-img-mapper';
import { useMap } from '../../hooks/useMap';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import "./styler.css";

const CoordinateDiv = ({ x, y }) => {
    const divStyle = {
        position: 'absolute',
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        backgroundColor: 'orange', // Цвет фона можно изменить
        top: `${y}px`,
        left: `${x - window.scrollX}px`,
        zIndex: "10",
    };

    return <div style={divStyle}></div>;
};


export const Mapper = ({ handleOpenModal }) => {
    const { URL, MAP, rovers, setAllRovers, generateRovers, map, cur, setMap } = useMap();
    let stompClient = useRef(null);

    const onConnected = () => {
        console.log('WS connected');

        stompClient.subscribe('/rover/statusInfo', getStatusInfo);
        stompClient.subscribe('/rover/movementHistory', getMovementHistory);
    };

    const getStatusInfo = (payload) => {
        const data = JSON.parse(payload.body);
        console.log(data);
    };

    const getMovementHistory = (payload) => {
        const data = JSON.parse(payload.body);
        generateRovers(data); // Обновляем координаты ровера при получении данных о перемещении
    };

    const onError = () => {
        console.log('WS error');
    };

    useEffect(() => {
        setInterval(() => {
            const newMap = { ...MAP };
            newMap.areas = rovers;
            setMap(newMap);
            console.log(map);
        }, 5000);
    });

    useEffect(() => {
        stompClient = over(new SockJS('http://localhost:8082/api/ws'));
        stompClient.connect({}, onConnected, onError);
    }, []);

    return (

        <div className="styler">
            {rovers.map((rover, index) => (
                <CoordinateDiv key={index} x={rover.coords[0]} y={rover.coords[1]} />
            ))}

            {/* <ImageMapper
                src={URL}
                imgWidth={4000}
                onClick={handleOpenModal}
            /> */}
        </div>
    );
};
