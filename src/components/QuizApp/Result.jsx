export default function Result( {quizLength, score, handleRestart}){



    return(
        <>
        <div className="card">
            <h2>Result</h2>
            <p>You got a total score of {score} out of {quizLength}</p>
            <button onClick={handleRestart}>Restart</button>
            </div>
        </>
    )
}