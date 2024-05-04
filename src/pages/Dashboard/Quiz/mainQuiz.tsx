import React, { useState } from 'react';
import TextSubtext from "../../../components/textSubtext";

import './mainQuiz.scss'

const MainQuiz = () => {
    const [selected, setSelected] = useState('1')

    const obj = {
        questionNumber: 3,
        allQuestions: 10,
        description: 'Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?',
        variant: [
            {value: 1, label: 'London'},
            {value: 2, label: 'Edinburgh'},
            {value: 3, label: 'Liverpool'},
            {value: 4, label: 'Canary Wharf'},
        ]
    }

    return (
        <>
            <div className={'main-quiz-header'}>
                <TextSubtext text={'History Quiz'} subText={'Answer the question below'}/>
                <h3>Timer: 29:09 Mins</h3>
            </div>
            <section className={'main-quiz'}>
                <div className="header_wrapper">
                    <img src="/history.png" alt="" width={503} height={296}/>
                    <div className="right-content">
                        <h5>Question 1/5</h5>
                        <p>Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest
                            against a bus company that refused to employ black and Asian drivers in which UK city?</p>
                    </div>
                </div>
                <div className="additional">
                    <h5>Choose answer</h5>
                    <div className="input-wrapper">
                        <label className="custom-radio">
                            <input type="radio" name="group1" value="1" checked={selected === '1'}
                                   onChange={(e) => setSelected(e.target.value)}/>
                            <span></span>
                            <p>Option 1</p>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="group2" value="2" checked={selected === '2'}
                                   onChange={(e) => setSelected(e.target.value)}/>
                            <span></span>
                            <p>Option 2</p>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="group3" value="3" checked={selected === '3'}
                                   onChange={(e) => setSelected(e.target.value)}/>
                            <span></span>
                            <p>Option 3</p>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="group4" value="4" checked={selected === '4'}
                                   onChange={(e) => setSelected(e.target.value)}/>
                            <span></span>
                            <p>Option 4</p>
                        </label>
                    </div>
                </div>
                <div className="Btn-wrapper">
                    <button className='btn'>Previews</button>
                    <button className='btn'>Next</button>
                </div>
            </section>
        </>
    );
};

export default MainQuiz;