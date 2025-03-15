import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPosts from './components/SearchPosts/SearchPosts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <SearchPosts />
    </>
  )
}

export default App
