import { Container, Menu, Nav, Title, Wrapper } from "./styles"
import { Moon, Sun } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext, themes } from "../../context/theme-context"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const title = "< QG Dev />"
    const { theme, setTheme } = useContext(ThemeContext)
    const navigate = useNavigate()

    return (
        <Container theme={theme}>
            <Wrapper>
                <Title theme={theme}>{title}</Title>
                <Menu>
                    <Nav theme={theme} onClick={() => navigate("/")}>
                        Home
                    </Nav>
                    <Nav theme={theme} onClick={() => navigate("/qg")}>
                        O QG
                    </Nav>
                    <Nav theme={theme} onClick={() => navigate("/time")}>
                        Time
                    </Nav>
                    <Nav onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                        {theme === themes.light ? 
                            <Moon size={32} weight="fill" fill={theme.text}/> : 
                            <Sun size={32} weight="fill" fill={theme.text}/>
                        }
                    </Nav>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Header