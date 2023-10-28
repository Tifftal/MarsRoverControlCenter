import { useState } from 'react'
import './MainPage.css'
import Welcome from './Welcome/Welcome'
import AboutPage from './AboutPage/AboutPage'
import { Footer } from './Footer/Footer'

const MainPage = () => {
    return (
        <div className='main'>
            <Welcome />
            <AboutPage />
            <Footer/>
        </div>
    )
}

export default MainPage
