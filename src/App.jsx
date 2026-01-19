import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { createContext, useEffect, useState } from 'react';
export const quizContext = createContext();
function App() {


  const [gamestate, setGamestate] = useState("users");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <quizContext.Provider value={{ gamestate, setGamestate, username, setUsername, score, setScore }}>
          {gamestate === 'users' && <User />}               {/*   conditional rendering */}
          {gamestate === 'playing' && <Quiz />}
          {gamestate === 'result' && <Result />}
        </quizContext.Provider>
      </header>
    </div>
  );
}

export default App;   
