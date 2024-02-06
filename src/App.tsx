import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import { Mynav } from './Components/Mynav'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import AboutUs from './Components/AboutUs';
function App() {

  const [theme, setTheme] = useState<string>("dark");
  return (
    <div >

      <BrowserRouter>
        <Mynav theme={theme} setTheme={setTheme} />
      
          <Routes >
            <Route path='/' element={<Hero />}> </Route>
            <Route path='/about' element={<AboutUs />}> </Route>
          </Routes>
       
      </BrowserRouter>


    </div>


  )
}

export default App
