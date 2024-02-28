import React, {useRef} from 'react';
import './asideMobile.scss'
import {NavLink} from "react-router-dom";
import {Dashboard, Logout, Notification, Support} from "../../icons";

type AsideMobileProps = {
    isMenuActive: boolean,
    setIsMenuActive: (isMenuActive : boolean) => void
}
const AsideMobile = ({isMenuActive, setIsMenuActive} :AsideMobileProps) => {
    const refMenu = useRef<HTMLElement>(null)


    return (
        <div className='mobile-aside-container'>
            <aside className={`mobile ${isMenuActive ? 'active' : 'non-active'}`} ref={refMenu}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/dashboard'>
                                <Dashboard/>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/support'>
                                <Support/>
                                <span>Support</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/notification'>
                                <Notification/>
                                <span>Notification</span>
                            </NavLink>
                        </li>

                        <li className='logout'>
                            <NavLink to='/login'>
                                <Logout/>
                                <span>Log out</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className={`blur-aside ${isMenuActive ? 'active' : 'non-active'}`}
                 onClick={() => setIsMenuActive(false)}></div>
        </div>

    );
};

export default AsideMobile;