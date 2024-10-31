import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-500 text-black p-5 rounded-lg'>Tailwind css</h1>
      <br />
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  )
}

export default App
