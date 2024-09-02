import React from "react";
import { useContext } from "react";

const ThemeContext = React.createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme :()=>{},

})

export default ThemeContext

export const ThemeProvider = ThemeContext.Provider

export  function useTheme(){
    return(
        useContext(ThemeContext)
    )
}