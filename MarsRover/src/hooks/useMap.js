
import { points } from "../mocks/mapMock";

export const useMap = () => {

    const URL = '/PIA24096.jpeg';
    const MAP = {
        name: 'Mars Map',
        areas: points.map((point) => ({
            ...point,
            title: `${point.name}, Координаты: ${point.coords.join(', ')}`,
        })),
    };

    const handleShowDescription = (area) => {
        console.log(area);
    }

    return {
        URL,
        MAP,
        handleShowDescription,
    }
}