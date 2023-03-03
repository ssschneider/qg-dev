import { useContext } from "react"
import About from "../../components/about"
import { ThemeContext } from "../../context/theme-context"
import { Banner, Wrapper } from "./styles"

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Banner src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Mulher ruiva mexendo no computador"/>
            <About 
                titleBig="Seja o Dev que o mercado corre atrás!" 
                content="Garanta agora a sua vaga para o QG Dev, onde você vai aprender a se tornar o profissional desejado por todas as empresas." 
                imageBig="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                button={true}
                />
        </Wrapper>
    )
}

export default Home