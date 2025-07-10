import React, { useContext, useState } from 'react'
import questions from '../assets/questions.json'
import { quizContext } from '../App';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen,setOptionChosen] = useState("");
  const {setGamestate,score,setScore} = useContext(quizContext);          //destructuring




  function next() {
      if(optionChosen===questions[currentQuestion]['answer'])
      {
        setScore(score+1);
      }
       setCurrentQuestion(currentQuestion + 1);
  
    
  }
  function finish(){
     if(optionChosen === questions[currentQuestion]['answer']) 
      {
      setScore(score + 1);
      }
    setGamestate("result");
  }

  return (
  <div>
      <div className="quiz-question">
         {questions[currentQuestion]['prompt']}                         {/* for questions */}
      </div>

      <div className="quiz-options">
        {
          ['A', 'B', 'C', 'D'].map((opt) => (
            <button  onClick={() => setOptionChosen(`option${opt}`)}>       {/*for options */}
              {questions[currentQuestion][`option${opt}`]}
            </button>
          ))
        }
      </div>

      {
        (questions.length - 1 === currentQuestion)                      //length=5, questions index = 4
          ? <button onClick={finish}>Finish</button>                    //true.
          : <button onClick={next}>Next</button>                        //false. 
      }
    </div>
  )
}

export default Quiz