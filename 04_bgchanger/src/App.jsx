import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
      <div className='w-full h-screen' style = {{backgroundColor:color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2">
          <div className='fixed flex flex-wrap justify-center gap-6 shadow-lg rounded-xl bottom-12 bg-slate-500 px-3 py-1'>
            <button
            onClick={()=> setColor("white")} className='px-4 py-1 rounded-xl bg-white shadow-md text-lg' >White</button>
            <button 
            onClick={()=> setColor("crimson")}className='px-4 py-1 rounded-xl bg-red-700 shadow-md text-lg' >Red</button>
            <button 
            onClick={()=> setColor("green")}className='px-4 py-1 rounded-xl bg-green-950 shadow-md text-lg' >Green</button>
            <button
            onClick={()=> setColor("purple")} className='px-4 py-1 rounded-xl bg-purple-700 shadow-md text-lg' >Purple</button>
            <button 
            onClick={()=> setColor("yellow")}className='px-4 py-1 rounded-xl bg-yellow-500 shadow-md text-lg' >Yellow</button>
            <button 
            onClick={()=> setColor("brown")}className='px-4 py-1 rounded-xl bg-orange-950 shadow-md text-lg' >Brown</button>
            <button 
            onClick={()=> setColor("blue")}className='px-4 py-1 rounded-xl bg-blue-700 shadow-md text-lg' >Blue</button>
            <button 
            onClick={()=> setColor(" orange")}className='px-4 py-1 rounded-xl bg-orange-600 shadow-md text-lg' >Orange</button>
            <button 
            onClick={()=> setColor("magenta")}className='px-4 py-1 rounded-xl bg-pink-600 shadow-md text-lg' >Pink</button>
          </div>
          
        </div>
      </div>
    
  )
}

export default App
