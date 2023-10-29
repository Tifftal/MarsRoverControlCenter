import { useState } from "react"

export const useRoverHsitory = () => {
    const [history, setHistory] = useState([]);

    const addEventToHistory = (event) => {
        const newHistory = history;
        newHistory.push(event);

        setHistory(newHistory);
    }

    return {
        history,
        addEventToHistory,
    }
}