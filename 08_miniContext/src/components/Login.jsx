import React,{useState,useContext} from "react";
import userContext from "../context/userContext";
function Login(){
    const [username,setusername] =useState("")
    const[password,setpassword] = useState("")

    const {setuser} =useContext(userContext)
       const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})
       }
       return(
        <div>
            <h2>Login</h2>
            <input type="text" value={username}
            onChange={(e) =>setusername(e.target.value)} placeholder="username"/>
            {" "}
            <input type="text" value={password}
             onChange={(e) =>setpassword(e.target.value)} placeholder="password" />
            <button onClick={handlesubmit}> submit</button>
            
            </div>
    )
}


export default Login