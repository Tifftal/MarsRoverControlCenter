import './Footer.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="team">
            <h1>Our team:</h1>
            <div className="party">
                <div className="participant">
                    <div className="info">
                        <NavLink to="https://t.me/gramizor" target="_blank">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                        </NavLink>
                        <div className="text">
                            <div className="name">
                                Granin Mikhail
                            </div>
                            <div className="telegramm">
                                <NavLink to="https://t.me/gramizor" target="_blank">@gramizor</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="participant">
                    <div className="info">
                        <NavLink to="https://t.me/Sh1bari" target="_blank">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                        </NavLink><div className="text">
                            <div className="name">
                                Krasnov Vladimir
                            </div>
                            <div className="telegramm">
                                <NavLink to="https://t.me/Sh1bari" target="_blank">@Sh1bari</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="participant">
                    <div className="info">
                        <NavLink to="https://t.me/yourmurkysoulmate" target="_blank">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                        </NavLink>
                        <div className="text">
                            <div className="name">
                                Talankina Varvara
                            </div>
                            <div className="telegramm">
                                <NavLink to="https://t.me/yourmurkysoulmate" target="_blank">@yourmurkysoulmate</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="participant">
                    <div className="info">
                        <NavLink to="https://t.me/tayushiev" target="_blank">
                            <img className="icon" src="./img/telegramm.png" alt="telegram icon" />
                        </NavLink>
                        <div className="text">
                            <div className="name">
                                Ayushiev Timur
                            </div>
                            <div className="telegramm">
                                <NavLink to="https://t.me/tayushiev" target="_blank">@tayushiev</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};