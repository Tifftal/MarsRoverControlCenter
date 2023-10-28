import { useState } from 'react';

export const useHookTab = () => {
    const [leftTab, setLeftTab] = useState(true);
    const [rightTab, setRightTab] = useState(false);

    const openLeftTab = () => {
        setLeftTab(true);
    };

    const closeLeftTab = () => {
        setLeftTab(false);
    };

    const openRightTab = () => {
        setRightTab(true);
    };

    const closeRightTab = () => {
        setRightTab(false);
    };

    return {
        leftTab,
        rightTab,
        openLeftTab,
        closeLeftTab,
        openRightTab,
        closeRightTab
    }
}