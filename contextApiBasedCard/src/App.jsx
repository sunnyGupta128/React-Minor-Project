import  { useState, useEffect} from 'react'
import './App.css'
import { ThemeProvide } from './context/Theme'
import Btn from './components/Btn';
import Card from './components/Cards';



function App() {
  const [themeMode, setThemeMode]=useState("light");

  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvide value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn/>           
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>     
          </div>
        </div>
      </div>
    </ThemeProvide>
  )
}

export default App
