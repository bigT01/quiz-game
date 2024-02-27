import React from 'react';
import {NavLink} from "react-router-dom";
import {Dashboard, Logout, Notification, Support} from "../../icons";

import './index.scss'
const Aside = () => {
    return (
        <aside>
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
    );
};

export default Aside;