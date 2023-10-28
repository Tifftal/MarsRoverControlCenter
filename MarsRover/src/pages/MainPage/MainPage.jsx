import { useState } from 'react'
import './MainPage.css'
import Welcome from './Welcome/Welcome'
import AboutPage from './AboutPage/AboutPage'

const MainPage = () => {
    return (
        <div className='main'>
            <Welcome />
            <AboutPage />
        </div>
    )
}

export default MainPage
