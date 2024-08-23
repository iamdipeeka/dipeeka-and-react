import { useState ,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [characterAllowed,setcharacterAllowed] = useState(false)
  const [password,setpassword] = useState('')

  const passwordGenerator =useCallback( ()=>{
     let pass ="";
     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabqwertyuiopasdfghjklzxvbnm";
     if(numberAllowed){
      str+='1234567890'
     }
     if(characterAllowed){
      str+="!@#%^&*()_+~:<>?/;"
     }

     for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
     }
     setpassword(pass)
  },[length,numberAllowed,characterAllowed,setpassword])

   useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])
  //useRef hook
  const passwordref = useRef(null)

  const copypasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)

  },[password])



  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-red-400 bg-gray-800  text-center content-center'>
       <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-5 text-lg'>
          <input 
          type="text" 
          value={password}
          className='outline-dashed w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button onClick={copypasswordtoclipboard}
          className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
         <div className="flex text-lg mb-3 gap-x-3">
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/> 
            <label htmlFor="length">length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            
            defaultChecked={numberAllowed}
             onChange={()=>{setnumberAllowed((prev)=>!prev)}}/> 
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            
            defaultChecked={characterAllowed}
             onChange={()=>{setcharacterAllowed((prev)=>!prev)}}/> 
            <label htmlFor="characters">characters</label>
          </div>
         </div>


        </div>
       
    </>
  )
}

export default App
