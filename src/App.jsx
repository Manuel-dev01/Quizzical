import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction.jsx'
import Questions from './components/Questions.jsx'

function App() {
  const [questions, setQuestions] = useState(false)
  
  function changeQuestion() {
    setQuestions(!questions)
  }

  return (
    <>
      {
        questions ? <Questions questionState={questions}/> : 
        <Introduction 
          handleClick={() => changeQuestion()}
        />
      }
    </>
  )
}

export default App
