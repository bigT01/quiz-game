import React from 'react';
import {Link} from "react-router-dom";
import {useStore} from "../../store/useStore";
import TextSubtext from "../../components/textSubtext";
import "./index.scss"

const Dashboard = () => {
    const isLogin = useStore((state) => state.isLogin)
    return (
        <>
            <TextSubtext text={'Select Topic'} subText={'Featured Category'}/>
            <section className={"dashboard"}>
                <div className='item-topic'>
                    <img src="./history.png" alt="img:history"/>
                    <p>History</p>
                    <Link to='/dashboard/quiz/1'>link</Link>
                </div>
                <div className='item-topic'>
                    <img src="./med.png" alt="img:history"/>
                    <p>Medicine</p>
                    <Link to='/dashboard/quiz/1'>link</Link>
                </div>
                <div className='item-topic'>
                    <img src="./technology.png" alt="img:history"/>
                    <p>Technology</p>
                    <Link to='/dashboard/quiz/1'>link</Link>
                </div>
                <div className='item-topic'>
                    <img src="./Agriculture.png" alt="img:history"/>
                    <p>Agriculture</p>
                    <Link to='/dashboard/quiz/1'>link</Link>
                </div>
            </section>
        </>
    );
};

export default Dashboard;