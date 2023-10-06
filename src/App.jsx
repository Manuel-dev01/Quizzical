import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction.jsx'

function App() {
  const [initialScreen, setInitialScreen] = useState(false)

  return (
    <>
      <Introduction />
    </>
  )
}

export default App
