import React, { useContext, useState } from 'react'
import questions from '../assets/questions.json'
import { quizContext } from '../App';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen,setOptionChosen] = useState("");
  const {setGamestate} = useContext(quizContext);          //destructuring


  function next() {
    setCurrentQuestion(currentQuestion + 1);
    console.log(optionChosen===questions[currentQuestion]['answer']);
    
  }
  function finish(){
    setGamestate("result");
  }

  return (
    <div>
       {questions[currentQuestion]['prompt']}                    {/* for questions */}
      {
        ['A', 'B', 'C', 'D'].map((opt) => (
          <button onClick={()=>setOptionChosen(`option${opt}`)}>{questions[currentQuestion][`option${opt}`]}</button>  // for options 
        ))
      }
      {
      (questions.length-1 === currentQuestion) ? (<button onClick={finish}>Finish</button> ) : ( <button onClick={next}>Next</button> )
      }
      
    </div>
  )
}

export default Quiz