import { useContext } from "react"
import { Text, TextSection, Title, Wrapper } from "./styles"
import { theme, ThemeContext } from "../../context/theme-context"

const Card = ({ icon, title, text}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            {icon}
            <TextSection theme={theme}>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TextSection>
        </Wrapper>
    )
}

export default Card