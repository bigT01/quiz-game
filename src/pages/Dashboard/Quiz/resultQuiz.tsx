import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {question, useStore} from "../../../store/useStore";
import TextSubtext from "../../../components/textSubtext";
import './resultQuiz.scss'

const ResultQuiz = () => {
    const navigate = useNavigate()
    let { id, questionId } = useParams();

    const [data, setData] = useState<question| null>(null)

    const quiz = useStore(state => state.quiz)
    const selected = useStore(state => state.selected)
    const setSelectedEmpty = useStore(state => state.setSelectedEmpty)


    useEffect(() => {
        // this function putting information to the data state and filtering by id which got from params
        if(quiz[0]){
            setData(quiz.filter((element) => element.id === Number(id))[0].questions.filter((element) => element.questionNumber === Number(questionId))[0])

        }
    }, [quiz, questionId]);

    //this function working when clicked button next or submit
    const onNextPage = () => {
        if(data && questionId){
            //here checking there is next question have or not in case if have it will navigate to the next question or will work submit question
            if(data?.questionNumber + 1 <= data?.allQuestions){
                navigate(`/dashboard/quiz/${id}/result/${Number(questionId)+1}`)
            } else{
                setSelectedEmpty()
                navigate(`/dashboard/quiz`)
            }
        }
    }

    const onPreviewsPage = () => {
        //here checking only for previews question and here will work only one function
        if(data){
            if(data?.questionNumber - 1 > 0){
                navigate(`/dashboard/quiz/${id}/result/${Number(questionId)-1}`)
            }
        }
    }
    return data ? (
        <>
            <div className={'main-quiz-header'}>
                <TextSubtext text={`${data.name} Quiz`} subText={'Answer the question below'}/>
                {/*<Timer/>*/}
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
                                    <input type="radio" name={element.label} value={element.value} checked={selected[0] ? selected.filter(element => element.questionNumber === Number(questionId))[0].value === element.value : false}/>
                                    <span></span>
                                    <p>{element.label}</p>
                                    {selected[0] ? selected.filter(element => element.questionNumber === Number(questionId))[0].value === element.value ? <p style={{color: 'red'}}>Your answer</p> : null : null}
                                    {quiz[0] ? quiz.filter(element => element.id === Number(id))[0].correctVariants.filter(element1 => element1.questionNumber === Number(questionId))[0].value === element.value ?
                                        <p style={{color: 'green'}}>Correct answer</p> : null : null}
                                </label>
                            )
                        ) : null}
                    </div>
                </div>
                <div className="Btn-wrapper">
                    <button className={`btn-${data.questionNumber === 1 ? 'disable': 'able'}`} onClick={() => onPreviewsPage()}>Previews</button>
                    <button className={`btn-able`} onClick={() => onNextPage()}>{data.questionNumber === data.allQuestions ? 'New Quiz': 'Next'}</button>
                </div>
            </section>
        </>
    ): null
};

export default ResultQuiz;