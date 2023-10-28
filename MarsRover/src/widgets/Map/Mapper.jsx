import React from 'react';
import ImageMapper from 'react-img-mapper';
import { useMap } from '../../hooks/useMap';


export const Mapper = ({ handleOpenModal }) => {
    const { URL, MAP } = useMap();

    return (
        <div className="ImageMapperContainer">
            <ImageMapper src={URL} map={MAP} onClick={handleOpenModal} />
        </div>
    )
}
