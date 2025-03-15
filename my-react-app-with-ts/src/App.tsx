import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'

function App() {
    const handleClick = () => alert("Button clicked");

  return <Button onclick={handleClick} label="Click me"/>
    
  
}

export default App
