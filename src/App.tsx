import React from 'react';
import './App.scss';
import Layout from "./Layout";
import {Navigate, Outlet} from "react-router-dom";
import {useStore} from "./store/useStore";

function App() {
    const isLogin = useStore((state) => state.isLogin)


    return isLogin ? (
        <Layout>
            <Outlet/>
        </Layout>
    ) : <Navigate to="/login" replace={true} />
}

export default App;
