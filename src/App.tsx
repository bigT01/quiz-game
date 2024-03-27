import React, {useState} from 'react';
import './App.scss';
import Layout from "./Layout";
import {Outlet} from "react-router-dom";

function App() {
    const [isLogined, setIslogined] = useState(false)


    return (
        <Layout>
            <Outlet/>
        </Layout>
    )
}

export default App;
