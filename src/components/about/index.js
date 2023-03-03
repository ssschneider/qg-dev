import { useContext } from "react"
import { Content, ImageBig, ImageSmall, TextWrapper, TitleBig, TitleSmall, Wrapper } from "./styles"
import Button from "../button"

import { theme, ThemeContext } from "../../context/theme-context"

const About = ({ titleBig, titleSmall, content, imageBig, imageSmall, button}) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Wrapper>
            <TextWrapper theme={theme}>
                {titleBig ? 
                    <TitleBig>{titleBig}</TitleBig>: 
                    <TitleSmall>{titleSmall}</TitleSmall>
                }
                <Content>
                    {content}
                </Content>
                {button ? <Button>Quero ser Agente Dev!</Button> : null}
                </TextWrapper>
                {imageBig ? 
                    <ImageBig src={imageBig}/>: 
                    <ImageSmall src={imageSmall}/>
                }
        </Wrapper>
    )
}

export default About