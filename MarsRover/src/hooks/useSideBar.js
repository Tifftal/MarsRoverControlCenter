import { useState } from "react";
// import { rovers } from "../mocks/roverMock";
import api from "../api";
import axios from "axios";

export const useSideBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [rover, setRover] = useState(null);
    const [rovers, setRovers] = useState(null);
    const [response, setResponse] = useState("");

    const handleGetRover = (idx) => {
        setRover(rovers[idx]);
        setActiveIndex(idx);
    }

    const handleSubmitForm = (e, handleCloseModal) => {
        e.preventDefault();

        const name = document.getElementById("Name").value;
        const maneuverability = Number(document.getElementById("Maneuverability").value);
        const speed = Number(document.getElementById("Speed").value);

        const data = {
            maneuverability: maneuverability,
            name: name,
            speed: speed,
        }

        axios.post("http://localhost:8082/api/rover/", data)
            .then((response) => {
                console.log(response);
                handleCloseModal();
            }).catch((error) => {
                setResponse(error.response.data.message);
            });
    }

    return {
        response,
        activeIndex,
        setActiveIndex,
        rover,
        setRover,
        rovers,
        setRovers,
        handleGetRover,
        handleSubmitForm
    }
}
