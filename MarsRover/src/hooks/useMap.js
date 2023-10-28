
import { MapSize } from "../config/config";
import { points } from "../mocks/mapMock";

export const useMap = () => {

    const createSectors = (existingPoints) => {
        const squareSize = 100;
        const areas = [];

        for (let x = 0; x < MapSize.width; x += squareSize) {
            for (let y = 0; y < MapSize.height; y += squareSize) {
                areas.push({
                    shape: 'rect',
                    coords: [x, y, x + squareSize, y + squareSize],
                });
            }
        }

        existingPoints.forEach((point) => {
            areas.push({
                shape: 'circle',
                coords: [point.x, point.y, point.radius],
                
            });
        });

        return areas;
    }

    const URL = '/PIA24096.jpeg';
    const MAP = {
        name: 'Mars Map',
        areas: createSectors(points),
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