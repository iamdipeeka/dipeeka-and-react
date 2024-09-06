import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'


function App() {
 

  return (
    < >
      <div >
      <h2>RTK TODO-LIST</h2>
      <Addtodo/>
      <Todos/> </div>
    </>
  )
}

export default App
