import { useContext, createContext, useState } from 'react'

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({children}: {children: React.ReactNode}){
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
    </>
   
  )
}

export default App