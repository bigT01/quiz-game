import React from 'react';
import {Navigate} from "react-router-dom";
import {useStore} from "../store/useStore";
import Layout from "../Layout";
import TextSubtext from "../components/textSubtext";

const Dashboard = () => {
    const isLogin = useStore((state) => state.isLogin)
    return (
        <Layout>
            <TextSubtext text={'Select Topic'} subText={'Featured Category'}/>
        </Layout>
    ) ;
};

export default Dashboard;