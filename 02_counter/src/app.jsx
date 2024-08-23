import { useState } from 'react'

import './app.css'

export function App() {
  let [count, setCounter] = useState(0)
  
   const Addvalue =() =>{
    if(count<20){
      setCounter(count+1)
      console.log('clicked',count);
      
    }
   }
   
   const removevalue =() =>{
    if(count>0){
      setCounter(count-1)
    }
   }
   
  return (
    <>
      <h1 >Chai aur react</h1>
       <h2>counter value : {count}</h2>
      <button
      onClick={Addvalue}>add value</button>
      <br />
      <button
      onClick={removevalue}>remove value</button>
    </>
  )
}
export default App