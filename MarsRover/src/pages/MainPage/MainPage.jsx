import { useState } from 'react'
import './MainPage.css'

import Welcome from '../../widgets/Welcome/Welcome'
import AboutPage from '../../widgets/AboutPage/AboutPage'
import { Footer } from '../../widgets/Footer/Footer'

const MainPage = () => {
    return (
        <div className='main'>
            <Welcome />
            <AboutPage />
            <Footer />
        </div>
    )
}

export default MainPage
