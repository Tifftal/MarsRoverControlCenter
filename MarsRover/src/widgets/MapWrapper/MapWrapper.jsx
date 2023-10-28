import React from 'react';
import ImageMapper from 'react-img-mapper';
import { MapSize } from '../../config/config';


export const MapWrapper = props => {
    const URL = '/PIA24096.jpeg';

    const MAP = {
        name: "my-map",
        areas: [
            {
                name: "base",
                shape: "circle",
                coords: [MapSize.width / 2, MapSize.height / 2, 20],
                preFillColor: "rgba(255, 255, 255, 0.5)",
                fillColor: "rgba(255, 255, 255, 0.5)",
                strokeColor: "rgba(255, 255, 255, 0.5)",
                lineWidth: 1,
            },
        ]
    };

    return <ImageMapper src={URL} map={MAP} />
}
