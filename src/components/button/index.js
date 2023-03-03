import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import { Btn } from "./styles"

const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Btn {...props} theme={theme}/>
    )
}

export default Button