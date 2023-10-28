import { useState } from 'react'
import './MainPage.css'
import Welcome from './Welcome/Welcome'
import AboutPage from '../AboutPage/AboutPAge'

const MainPage = () => {
    return (
        <div className='main'>
            <Welcome />
        </div>
    )
}

export default MainPage
