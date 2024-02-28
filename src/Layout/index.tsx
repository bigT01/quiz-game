import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './index.scss'

import {BurgerMenu, Dashboard, Logout, Notification, Search, Support} from "../icons";
import Aside from "../components/aside";
import AsideMobile from "../components/aside/asideMobile";

type LayoutProps = {
    children: ReactNode
}
const Layout = ({children}: LayoutProps) => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)


    return (
        <div className='layout'>
            <Aside/>

            <AsideMobile isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>

            <div className='container'>
                <header>
                    <button className='mobile menu' onClick={() => setIsMenuActive(old => !old)}>
                        <BurgerMenu/>
                    </button>
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