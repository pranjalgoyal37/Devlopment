import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInForm from './component/login'

function App() {
  let [color, setColor] = useState('black')

  return (
    <div className='bg--400 w-screen	 h-screen duration-3 flex justify-center items-center'
      style={{ backgroundColor: color }}>
      <div className=' p-3 flex flex-wrap gap-5 ' >

        <button
          className='bg-green-500 rounded-xl pl-6 pr-6  ' onClick={() => setColor("red")} style={{ backgroundColor: "red" }}> Red</button>
        <button className='bg-green-500 rounded-xl pl-6 pr-6 ' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>yellow</button>
        <button className='bg-green-500 rounded-xl pl-6 pr-6 ' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>green</button>

      </div>
      <LogInForm />
    </div >

  )
}

export default App
