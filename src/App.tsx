import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import { Mynav } from './Components/Mynav'

function App() {

  const [theme, setTheme] = useState<string>("dark");



 

  return (
    <div >
      <Mynav theme={theme} setTheme={setTheme} />
      <Hero />
    </div>


  )
}

export default App
