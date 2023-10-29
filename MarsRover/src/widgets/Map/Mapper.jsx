import React, { useEffect, useRef, useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { useMap } from '../../hooks/useMap';

import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import axios from 'axios';

export const Mapper = ({ handleOpenModal }) => {
    const { URL, MAP, handleShowDescription } = useMap();

    let stompClient = useRef(null);

    const onConnected = () => { // подключаемся)))
        console.log('WS connected');

        stompClient.subscribe('/rover/statusInfo', getStatusInfo);
        stompClient.subscribe('/rover/movementHistory', getMovementHistory)
    };

    const getStatusInfo = (payload) => {
        const data = JSON.parse(payload.body);
        console.log(data);
    }

    const getMovementHistory = (payload) => {
        const data = JSON.parse(payload.body);
        console.log(data);
    }

    const onError = () => {
        console.log('WS error');
    };

    useEffect(() => {
        stompClient = over(new SockJS('http://localhost:8082/api/ws'));
        stompClient.connect({}, onConnected, onError);
    }, []);

    return (
        <ImageMapper
            src={URL}
            map={MAP}
            onClick={handleOpenModal}
            onMouseEnter={handleShowDescription}
        />
    )
}