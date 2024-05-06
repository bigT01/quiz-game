import React, {useEffect, useState} from 'react';
import TextSubtext from "../../../components/textSubtext";
import "./quiz.scss"
import { useNavigate, useParams } from "react-router-dom";
import {quiz, useStore} from "../../../store/useStore";

const Quiz = () => {
    const navigate = useNavigate()
    let { id } = useParams();

    const [data, setData] = useState<quiz| null>(null)

    const setDuration = useStore(state => state.setDuration)
    const quiz = useStore(state => state.quiz)

    useEffect(() => {
        if(quiz[0]){
            setData(quiz.filter(element => element.id === Number(id))[0])
        }
    }, [quiz]);

    const onStartHandler = () => {
        if(data){
            setDuration(data.duration)
            navigate('start/1')
        }
    }

    return data ? (
        <>
            <TextSubtext text={`${data.name} Quiz`} subText={'Read the following instructions'}/>
            <section className={"quiz"}>
                <div className="header_wrapper">
                    <img src={data.image} alt="" width={503} height={296}/>
                    <div className="right-content">
                        <div className="info-item">
                            <p className="left">Date:</p>
                            <p>{data.deadline}</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Time Limit: </p>
                            <p>{Math.round(data.duration/60)} Mins</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Attempts:</p>
                            <p>{data.attempt}</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Points:</p>
                            <p>{data.point} Points</p>
                        </div>
                    </div>
                </div>
                <div className="additional">
                    <h5>Instructions</h5>
                    <p>This quiz consists of {data.allQuestions} multiple-choice questions. To be successful with the quizzes, it’s
                        important to conversant with the topics. Keep the following in mind:<br/>
                        <br/>
                        Timing - You need to complete each of your attempts in one sitting, as you are allotted {Math.round(data.duration/60) + ' '}
                        minutes to each attempt. Answers - You may review your answer-choices and compare them to the
                        correct answers after your
                        final attempt.<br/>
                        <br/>
                        To start, click the "Start" button. When finished, click the "Submit " button.</p>
                </div>
                <div className="startBtn-wrapper">
                    <button className='startBtn' onClick={() => onStartHandler()}>Start</button>
                </div>
            </section>
        </>
    ): null
};

export default Quiz;