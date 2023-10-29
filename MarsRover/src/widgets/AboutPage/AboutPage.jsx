import React, { useState } from "react"
import './AboutPage.css'
import { NavLink } from "react-router-dom";

const AboutPage = () => {
    const [activeSector, setActiveSector] = useState();
    const [coordinates, setCoordinates] = useState({ longitude: 2048, latitude: 1939.5 });

    const sectorDescriptions = {
        1: "главный",
        2: "левый",
        3: "правый",
    };

    const handleSectorHover = (sectorName) => {
        setActiveSector(sectorName);
    };

    const resetActiveSector = () => {
        setActiveSector(null);
    };

    return (
        <div className="about">
            <div className="container">
                <NavLink
                    to={{
                        pathname: "/map",
                        state: { coordinates },
                    }}
                >
                    <svg
                        className='first'
                        xmlns="http://www.w3.org/2000/svg"
                        width="402"
                        height="181"
                        viewBox="0 0 402 181"
                        fill="none"
                    >
                        <path onMouseEnter={() => handleSectorHover(sectorDescriptions[1])}
                        onMouseLeave={resetActiveSector} d="M1.46527 60.0173C1.40674 59.9236 1.35233 59.8363 1.3021 59.7555C44.6766 23.0961 100.733 1 161.949 1C274.718 1 369.991 75.9901 400.698 178.868C400.249 178.91 399.679 178.961 398.997 179.018C397.124 179.174 394.407 179.376 391.039 179.556C384.302 179.916 374.965 180.188 364.567 179.836C343.719 179.131 318.802 175.921 301.955 166.043C288.025 157.874 281.843 145.457 275.643 132.956L275.596 132.862C268.957 119.478 262.27 105.994 245.737 98.5888C231.846 92.3666 219.731 94.0013 208.486 99.6358C197.339 105.222 187.01 114.759 176.598 124.373L176.528 124.437C157.103 142.373 137.379 160.498 110.795 156.289C96.7817 154.07 82.9011 146.932 69.9306 137.399C56.9669 127.871 44.9684 115.992 34.7246 104.372C24.4833 92.7542 16.0127 81.4142 10.102 72.9775C7.14714 68.7599 4.83331 65.2696 3.25914 62.8353C2.47209 61.6181 1.87002 60.6651 1.46527 60.0173Z" fill="#903C30" fillOpacity="0.2" stroke="black" strokeWidth="2" />
                    </svg>
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/map",
                        state: { coordinates },
                    }}
                >
                    <svg
                        className="second"
                        xmlns="http://www.w3.org/2000/svg"
                        width="176"
                        height="270"
                        viewBox="0 0 176 270"
                        fill="none"
                    >
                        <path onMouseEnter={() => handleSectorHover(sectorDescriptions[2])}
                        onMouseLeave={resetActiveSector} d="M1 68.1861C1 46.9185 3.68752 26.2753 8.74338 6.57219C8.76693 6.56742 8.79115 6.56252 8.81603 6.5575C9.26363 6.46712 9.92613 6.33593 10.7826 6.17334C12.4955 5.84815 14.9838 5.3974 18.0798 4.89638C24.2727 3.89419 32.8919 2.69168 42.5965 1.89014C62.0501 0.283411 85.6975 0.304307 102.931 6.65692C104.873 7.37299 106.83 8.08702 108.791 8.80273L108.792 8.8029C125.625 14.9457 142.748 21.2025 155.393 30.2653C167.977 39.2841 176.02 51 174.895 68.1206C174.589 72.7806 173.09 76.3852 170.727 79.2365C168.353 82.101 165.06 84.2608 161.088 85.9395C153.105 89.3126 142.629 90.6482 131.975 91.9985L131.871 92.0116C121.32 93.3489 110.597 94.7078 102.402 98.2044C98.2721 99.9666 94.7201 102.296 92.1406 105.494C89.5503 108.706 87.9899 112.732 87.7546 117.793C87.07 132.515 94.9109 141.269 103.07 150.378L103.146 150.463C108.906 156.894 114.836 163.526 118.485 172.669C120.079 176.664 121.699 180.258 123.221 183.637L123.224 183.644C128.193 194.672 132.132 203.438 131.325 217.088C130.649 228.528 123.534 241.544 116.457 251.808C112.935 256.915 109.454 261.296 106.854 264.4C105.554 265.952 104.475 267.183 103.722 268.025C103.501 268.273 103.307 268.488 103.145 268.666C41.1889 223.351 1 150.426 1 68.1861Z" fill="#903C30" fillOpacity="0.2" stroke="black" strokeWidth="2" />
                    </svg>
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/map",
                        state: { coordinates },
                    }}
                >
                    <svg
                        className="third"
                        xmlns="http://www.w3.org/2000/svg"
                        width="251"
                        height="207"
                        viewBox="0 0 251 207"
                        fill="none"
                    >
                        <path  onMouseEnter={() => handleSectorHover(sectorDescriptions[3])}
                        onMouseLeave={resetActiveSector} d="M5.55242 201.812C8.58018 201.265 12.7367 200.461 17.65 199.375C28.1049 197.063 42.004 193.467 55.7519 188.337C69.4857 183.212 83.1412 176.528 93.0555 168.008C102.98 159.479 109.268 149.002 107.932 136.352C106.186 119.822 92.5257 112.411 79.5193 105.355L79.3275 105.251C65.922 97.9779 53.2686 91.0318 52.0718 75.4573C49.6309 43.6938 70.4637 24.5533 97.8904 7.44276C112.664 -1.77373 129.468 -0.386195 146.543 7.08538C163.631 14.5623 180.842 28.0765 196.223 42.833C211.594 57.579 225.084 73.5116 234.734 85.764C239.558 91.8887 243.42 97.0902 246.075 100.759C247.402 102.594 248.428 104.045 249.121 105.037C249.388 105.418 249.605 105.731 249.771 105.973C204.544 166.7 132.378 206 51.0747 206C35.524 206 20.3085 204.562 5.55242 201.812Z" fill="#903C30" fillOpacity="0.2" stroke="black" strokeWidth="2" />
                    </svg>
                </NavLink>
                <div className="text-position">
                    <div className="text-overlay">
                        <div className="text-info">
                            <h1>Mars Rover Real-Time Control Center</h1>
                            <p>It is a program designed for real-time control of a Mars rover, providing an efficient and reliable means of remotely managing a rover situated on the surface of Mars. This project combines information technology, communication, and robotics to offer scientists and engineers the capability to interact with the rover, perform tasks, and receive real-time feedback.</p>
                        </div>
                    </div>
                    {activeSector && (
                        <div className="sector">
                            <p>Вы выбрали {activeSector} сектор.</p>
                            <p>Нажмите на него, чтобы перейти к карте.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutPage