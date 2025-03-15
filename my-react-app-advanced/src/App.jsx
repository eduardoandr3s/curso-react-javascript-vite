import { useContext, createContext, useState } from 'react'
import './App.css'

import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook'
import CounterWithReactMemo from './components/CounterWithReactMemo/CounterWithReactMemo'
const ThemeContext = createContext();

function ThemeProvider({children}){
  const [theme, setTheme] = useState('light');
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
function ThemeButton(){
const {theme, toggleTheme} = useContext(ThemeContext);
    return(
      <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}>
        Cambiar Tema
      </button>
    )
}

function App() {
  return (
    <>
     <ThemeProvider>
      <ThemeButton/>
      </ThemeProvider>
      <CounterWithCustomHook/>
      <CounterWithReactMemo/>
    </>
   
  )
}

export default App
