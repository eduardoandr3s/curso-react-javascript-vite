import { useState } from 'react'
import Card from './components/Card';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["React", "JavaScript","Vite" ];
  return (
  <section>
    <h1>Hola Mundo</h1>
    <Card title="React" description="React es un framework de JavaScript para construir interfaces de usuario." />
    <Card title="Vite" description="Vite es un entorno de desarrollo para construir aplicaciones web modernas." />
    <Card title="JavaScript" description="JavaScript es un lenguaje de programación interpretado que se ejecuta en el navegador." />
    <ul>
      {items.map((item, index)=>
      <li key={index}>{item}</li>
      )}
    </ul>
  </section>
  );
}
export default App
