import { createContext, useState } from "react"

export const themes = {
    light: {
        main: "#CEE8F5",
        text: "#2D3336",
        background: "#f1f1f1"
    },
    dark: {
        main: "#2D3336",
        text: "#CEE8F5",
        background: "#030303"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )
}