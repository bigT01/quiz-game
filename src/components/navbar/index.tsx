import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss"
import {Dashboard, Logout, Notification, Support} from "../../icons";
import {useStore} from "../../store/useStore";

const Navbar = () => {
    const user = useStore((state) => state.user);
    const setIsLogin = useStore((state) => state.setIsLogin);
    return (
        <nav>
            {/*navbar was wrapped with ul for increase process of Google bots and for looks more good.*/}
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
                    <button onClick={() => setIsLogin(false)}>
                        <Logout/>
                        <span>Log out</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;