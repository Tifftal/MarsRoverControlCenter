import { NavLink } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome-title'>
                <h1>Mars Rover</h1>
                <p>NotNullMission</p>
            </div>
            <div className='welcome-info'>
                <div className='welcome-info-div'>
                    <h2>The Rover is now located</h2>
                    <p>ndcjdjnddnc</p>
                </div>
                <div className='welcome-info-div'>
                    <h2>Rover extracted</h2>
                    <p>ndcjdjnddnc</p>
                </div>
                <div className='welcome-info-div'>
                    <h2>Rover has been on Mars for</h2>
                    <p>ndcjdjnddnc</p>
                </div>
                <NavLink to={'/control'}><button>Go to rover control</button></NavLink>
            </div>
            {/* <div className='welcome-footer'>
                <div className='welcome-footer-div'>
                    <h3>See map</h3>
                    <img src='../../img/PIA24923_MAIN.png' />
                </div>
                <div className='welcome-footer-div'>
                    <h3>Order a sample</h3>
                    <img src='../../img/PIA24923_MAIN.png' />
                </div>
                <div className='welcome-footer-div'>
                    <h3>Read more</h3>
                    <img src='../../img/PIA24923_MAIN.png' />
                </div>
            </div> */}
        </div>
    )
}

export default Welcome
