
import { MapSize } from "../config/config";
import { points } from "../mocks/mapMock";

export const useMap = () => {

    const createSectors = (existingPoints) => {
        const squareSize = 200;
        const areas = [];

        existingPoints.forEach((point) => {
            areas.push({
                ...point
            });
        });


        for (let x = 0; x < MapSize.width; x += squareSize) {
            for (let y = 0; y < MapSize.height; y += squareSize) {
                areas.push({
                    fillColor: "rgba(255, 255, 255, 0.2)",
                    shape: 'rect',
                    coords: [x, y, x + squareSize, y + squareSize],
                });
            }
        }


        console.log(areas);

        return areas;
    }

    const URL = '/PIA24096.jpeg';
    const MAP = {
        name: 'Mars Map',
        areas: createSectors(points),
        center: [1098, 123],
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