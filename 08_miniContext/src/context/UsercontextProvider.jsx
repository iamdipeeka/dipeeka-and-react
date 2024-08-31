import React from "react";
import userContext from "./userContext";
import { useState } from "react";


const  UsercontextProvider = ({children}) =>{

  const [User,setuser] = useState(null)

    return(
        <userContext.Provider value={{User,setuser}}>
            {children}
        </userContext.Provider>
    )
}

export default UsercontextProvider