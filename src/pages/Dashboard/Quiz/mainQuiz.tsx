import React, {useEffect, useState} from 'react';
import TextSubtext from "../../../components/textSubtext";

import './mainQuiz.scss'
import Timer from "../../../components/timer";
import {useNavigate, useParams} from "react-router-dom";
import {question, useStore} from "../../../store/useStore";

const MainQuiz = () => {
    const navigate = useNavigate()
    let { id, questionId } = useParams();

    const [data, setData] = useState<question| null>(null)
    const [selectedTemp, setSelectedTemp] = useState('0')

    const quiz = useStore(state => state.quiz)
    const setSelected = useStore(state => state.setSelected)
    const setSelectedEmpty = useStore(state => state.setSelectedEmpty)

    useEffect(() => {
        if(quiz[0]){
            setData(quiz.filter((element) => element.id === Number(id))[0].questions.filter((element) => element.questionNumber === Number(questionId))[0])
        }
    }, [quiz, questionId]);

    const onNextPage = () => {
        if(data && questionId){
            if(data?.questionNumber + 1 <= data?.allQuestions){
                setSelectedTemp('0')
                setSelected({questionNumber: Number(questionId), value: Number(selectedTemp)})
                navigate(`/dashboard/quiz/${id}/start/${Number(questionId)+1}`)
            } else{
                setSelectedEmpty()
            }
        }
    }

    const onPreviewsPage = () => {
        if(data){
            if(data?.questionNumber - 1 > 0){
                setSelectedTemp('0')
                setSelected({questionNumber: Number(questionId), value: Number(selectedTemp)})
                navigate(`/dashboard/quiz/${id}/start/${Number(questionId)-1}`)
            }
        }
    }

    return data ? (
        <>
            <div className={'main-quiz-header'}>
                <TextSubtext text={`${data.name} Quiz`} subText={'Answer the question below'}/>
                <Timer/>
            </div>
            <section className={'main-quiz'}>
                <div className="header_wrapper">
                    <img src="/history.png" alt="" width={503} height={296}/>
                    <div className="right-content">
                        <h5>Question {data.questionNumber}/{data.allQuestions}</h5>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="additional">
                    <h5>Choose answer</h5>
                    <div className="input-wrapper">
                        {data.variants[0] ? data.variants.map( (element) =>
                            (
                                <label className="custom-radio">
                                    <input type="radio" name={element.label} value={element.value} checked={selectedTemp === `${element.value}`}
                                           onChange={(e) => setSelectedTemp(e.target.value)}/>
                                    <span></span>
                                    <p>{element.label}</p>
                                </label>
                            )
                        ) : null}
                    </div>
                </div>
                <div className="Btn-wrapper">
                    <button className={`btn-${data.questionNumber === 1 ? 'disable': 'able'}`} onClick={() => onPreviewsPage()}>Previews</button>
                    <button className={`btn-able`} onClick={() => onNextPage()}>{data.questionNumber === data.allQuestions ? 'Submit': 'Next'}</button>
                </div>
            </section>
        </>
    ): null
};

export default MainQuiz;