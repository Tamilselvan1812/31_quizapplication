import React, { useContext, useEffect, useRef } from 'react'
import { quizContext } from '../App'

function User() {
  const { gamestate, setGamestate, username, setUsername } = useContext(quizContext)      //destructuring
  const userRef = useRef();
  
  useEffect(() => {
    userRef.current.focus();
  }, [])



  function startPlaying() {
  
    setUsername(userRef.current.value);
    setGamestate("playing");
  }
  return (
    <div>
      <input type="text" placeholder='Enter your name' ref={userRef} />
      <button onClick={startPlaying}>Start Quiz</button>
    </div>
  )
}

export default User