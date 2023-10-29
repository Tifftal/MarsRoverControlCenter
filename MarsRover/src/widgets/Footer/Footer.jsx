import './Footer.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="team">
            <h1>Our team:</h1>
            <div className="party">
                <div className="participant">
                    <NavLink to="https://t.me/gramizor" target="_blank">
                        <div className="info">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                            <div className="text">
                                <div className="name">Granin Mikhail</div>
                                <div className="telegramm">@gramizor</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="participant">
                    <NavLink to="https://t.me/Sh1bari" target="_blank">
                        <div className="info">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                            <div className="text">
                                <div className="name">Krasnov Vladimir</div>
                                <div className="telegramm">@Sh1bari</div>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="participant">
                    <NavLink to="https://t.me/yourmurkysoulmate" target="_blank">
                        <div className="info">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                            <div className="text">
                                <div className="name">Talankina Varvara</div>
                                <div className="telegramm">@yourmurkysoulmate</div>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="participant">
                    <NavLink to="https://t.me/tayushiev" target="_blank">
                        <div className="info">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                            <div className="text">
                                <div className="name">Ayushiev Timur</div>
                                <div className="telegramm">@tayushiev</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div >
    )
};