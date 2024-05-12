import {quiz, selected, useStore} from "../store/useStore";

export const ResultCompiler = (id: number, selected: selected[], quiz: quiz[]) => {
    let correct = 0

    const correctAnswers = quiz.filter(element => element.id === Number(id))[0].correctVariants
    const allQuestions = quiz.filter(element => element.id === Number(id))[0].allQuestions


    for (const questionNumber in correctAnswers) {
        const selectedItem = selected.filter(element => element.questionNumber === correctAnswers[questionNumber]?.questionNumber)[0]
        if(selectedItem){
            if(selectedItem.value === correctAnswers[questionNumber].value){
                correct += 1
            }
        }
    }

    return correct * 100 / allQuestions
}