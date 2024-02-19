import React, {ReactNode} from 'react';
import './index.scss'
import {Link, NavLink} from "react-router-dom";
import {Dashboard, Logout, Notification, Search, Support} from "../icons";

type LayoutProps = {
    children: ReactNode
}
const Layout = ({children}: LayoutProps) => {
    return (
        <div className='layout'>
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
            <div className='container'>
                <header>
                    {/*here search button to search some information from certain content*/}
                    <div className="search">
                        <button><Search/></button>
                        <input type="text" placeholder='Search..'/>
                    </div>
                    {/*this is quick start quiz button will randomly take some quiz from db*/}
                    <button className='header-btn'>start quiz</button>
                    {/*button to profile page*/}
                    <Link to={'/dashboard/profile'} className='profile-link'>
                        <img src="/profile.png" alt="prfile"/>
                        <span>Oluwatobi..</span>
                    </Link>
                </header>
                <main>
                    {children}
                </main>
            </div>

        </div>
    );
};

export default Layout;