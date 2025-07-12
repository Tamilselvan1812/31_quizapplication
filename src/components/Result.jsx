import React, { useContext } from 'react'
import { quizContext } from '../App';
import questions from '../assets/questions.json';

function Result() {
  const { setGamestate, setUsername, score, username,setScore } = useContext(quizContext);

  function restartQuiz() {
    setUsername("");
    setScore(0);
    setGamestate("users");          // Go back to the username input screen
  }

  return (
    <div>
      <h1>Result</h1>
      <h1>{`${username} scored ${score} out of ${questions.length}`}</h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Result;
