
import { points } from "../mocks/mapMock";

export const useMap = () => {

    const URL = '/PIA24096.jpeg';
    const MAP = {
        name: 'Mars Map',
        areas: points,
    };

    return {
        URL,
        MAP,
    }
}