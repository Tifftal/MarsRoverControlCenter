import React from "react"
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="container">
            <img className="background" src="/marsBackgroundBlack.jpg" alt="Mars PLanet" />
            <div class="text-overlay">
                <h1>Mars Rover Real-Time Control Center</h1>
                <p>It is a program designed for real-time control of a Mars rover, providing an efficient and reliable means of remotely managing a rover situated on the surface of Mars. This project combines information technology, communication, and robotics to offer scientists and engineers the capability to interact with the rover, perform tasks, and receive real-time feedback.</p>
            </div>
        </div>
    )
}

export default AboutPage