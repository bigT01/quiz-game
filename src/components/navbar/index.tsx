import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss"
import {Dashboard, Logout, Notification, Support} from "../../icons";

const Navbar = () => {
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
                    <NavLink to='/login'>
                        <Logout/>
                        <span>Log out</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;