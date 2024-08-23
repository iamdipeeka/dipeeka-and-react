import { useState } from 'preact/hooks'

import Card from './components/cards'
import './app.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p- 5 rounded-lg mb-4'>Hello tailwind</h1>
       <Card username="Samsung" btntext='visit me' />  
       <Card  username="LG" btntext='like me?'/>
       <Card username="Realme" btntext='observe me'/>

    </>
  )
}
