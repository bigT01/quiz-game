import React from 'react';
import TextSubtext from "../../../components/textSubtext";
import "./quiz.scss"

const Quiz = () => {
    return (
        <>
            <TextSubtext text={'History Quiz'} subText={'Read the following instructions'}/>
            <section className={"quiz"}>
                <div className="header_wrapper">
                    <img src="/history.png" alt="" width={503} height={296}/>
                    <div className="right-content">
                        <div className="info-item">
                            <p className="left">Date:</p>
                            <p>28/07/2021</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Time Limit: </p>
                            <p>30 Mins</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Attempts:</p>
                            <p>Once</p>
                        </div>
                        <div className="info-item">
                            <p className="left">Points:</p>
                            <p>200 Points</p>
                        </div>
                    </div>
                </div>
                <div className="additional">
                    <h5>Instructions</h5>
                    <p>This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s
                        important to conversant with the topics. Keep the following in mind:<br/>
                        <br/>
                        Timing - You need to complete each of your attempts in one sitting, as you are allotted 30
                        minutes to each attempt. Answers - You may review your answer-choices and compare them to the
                        correct answers after your
                        final attempt.<br/>
                        <br/>
                        To start, click the "Start" button. When finished, click the "Submit " button.</p>
                </div>
                <div className="startBtn-wrapper">
                    <button className='startBtn'>Start</button>
                </div>

            </section>
        </>
    );
};

export default Quiz;