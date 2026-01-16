import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light")

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const handleChangeTheme = (value) => {
        const root = document.getElementById("root");
        const jsonValue = JSON.stringify(value)
        setTheme(value)
        if(value === "light") root.classList.remove("dark");
        else root.classList.add("dark");
        localStorage.setItem("theme", jsonValue)
    }

    useEffect(() => {
        const root = document.getElementById("root");
        const themeObj = localStorage.getItem("theme");
        const themeValue = themeObj ? JSON.parse(themeObj) : "light";
        if(themeValue === "light") root.classList.remove("dark");
        else root.classList.add("dark");
        setTheme(themeValue)
    }, [])

    return <ThemeContext value={{theme, handleChangeTheme}}>
        {children}
    </ThemeContext>
}