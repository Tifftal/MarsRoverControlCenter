import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { useMap } from '../../hooks/useMap';


export const Mapper = ({ handleOpenModal }) => {
    const { URL, MAP, handleShowDescription } = useMap();

    return (
        <ImageMapper
            src={URL}
            map={MAP}
            onClick={handleOpenModal}
            onMouseEnter={handleShowDescription}
        />
    )
}