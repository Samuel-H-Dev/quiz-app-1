import Card from "./Card";
import Result from "./Result";
import data from "../../data/quiz.json"
import "./QuizApp.css"
import { useState } from "react";


const quizLength = data.length;

export default function QuizApp(){
const [questionId, setQuestionId] = useState(0)
const [score, setScore] = useState(0)
const  [showresult, setShowResult] = useState(false)


const handleAnswer =(isCorrect) => {
    if(isCorrect) setScore(score + 1);

    const newQuestionId = questionId + 1;

    (newQuestionId < quizLength)
    ? setQuestionId(newQuestionId)
    : setShowResult(true)
}

    const handleRestart = () => {
        setQuestionId(0);
        setScore(0);
        setShowResult(false);
    }



    return(
        <>
        <h2>Quiz App</h2>
        {showresult
        ? <Result 
            quizLength={quizLength}
            score={score}
            handleRestart={handleRestart}/>

        : <Card data={data}
        quizLength={quizLength}
        questionId={questionId}
        handleAnswer={handleAnswer}/>
}
        </>
    )
}