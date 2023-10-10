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
      <Introduction 
        handleClick={() => changeQuestion()}
      />

      {questions && <Questions questionState={questions}/>}
    </>
  )
}

export default App
