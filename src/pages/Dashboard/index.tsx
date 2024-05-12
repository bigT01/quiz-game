import React from 'react';
import {Link} from "react-router-dom";
import {useStore} from "../../store/useStore";
import TextSubtext from "../../components/textSubtext";
import "./index.scss"

const Dashboard = () => {
    const quiz = useStore((state) => state.quiz)
    return (
        <>
            <TextSubtext text={'Select Topic'} subText={'Featured Category'}/>
            <section className={"dashboard"}>
                {quiz[0] ? quiz.map((element) => (
                    <div className='item-topic'>
                        <img src={element.image} alt={`img:${element.name}`}/>
                        <p>{element.name}</p>
                        <Link to={`quiz/${element.id}`}>link</Link>
                    </div>
                )) : null}
            </section>
        </>
    );
};

export default Dashboard;