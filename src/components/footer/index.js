import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import { Author, Title, Wrapper } from "./styles"

const Footer = () => {
    const title = "< QG Dev />"
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Title>{title}</Title>
            <Author>Desenvolvido por Sarah Schneider</Author>
        </Wrapper>
    )
}

export default Footer