import Card from "../../components/card"
import { Code, Clock, UsersThree, Student } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import { Banner, Section, SectionTitle, Wrapper } from "./styles"
import About from "../../components/about"
import Button from "../../components/button"

const QG = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Banner src="https://images.unsplash.com/photo-1518818608552-195ed130cdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="Foto embaçada com um homem no fundo segurando um post-it com foco escrito Code"/>
            <SectionTitle theme={theme}>O Agente Dev é dividido em três momentos:</SectionTitle>
            <Section>
                <About 
                    titleSmall="Agente Gama"
                    content="Programador iniciante. Ainda precisa de ajuda e muitas consultas para escrever seu código. Consegue desenvolver páginas em HTML, CSS e Javascript Básico"
                    imageSmall="https://images.unsplash.com/photo-1528820624198-03cf9845bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
                <About 
                    titleSmall="Agente Beta"
                    content="Programador mais avançado. Consegue desenvolver seus códigos sem problemas e é capaz de resolver seus bug. Apto para Pair Programming ou Group Programming."
                    imageSmall="https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
                <About 
                    titleSmall="Agente Alfa"
                    content="Programador avançado. Líder de grupos e mentor de iniciantes, é desenvolve projetos back-to-back, testados e com deploy feito. Está mais que apto a entrar ou progredir no mercado de trabalho em múltiplas linguagens de programação e tecnologias."
                    imageSmall="https://images.unsplash.com/photo-1591541104670-b08b8d8ea044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                />
                <Button>Me tornar agente</Button>
            </Section>
            <SectionTitle theme={theme}>O QG Dev oferece:</SectionTitle>
            <Section>
                <Card
                    icon={<Code weight="bold" color={theme.main} size={160}/>}
                    title="Formação Fullstack QG Dev "
                    text="Formação fullstack nas linguagens e tecnologias mais atuais e pedidas do mercado, do zero ao avançado. Na Missão Front-End o Agente vai aprender tudo o que precisa sobre HTML, CSS, Javascript, Typescript e React. Na Missão Back-End o Agente vai conhecer Bancos de Dados e poder optar pelo Briefing Java ou Briefing NodeJS."
                />
                <Card
                    icon={<Clock weight="bold" color={theme.main} size={160}/>}
                    title="Acesso Vitalício"
                    text="Acreditamos muito no Life-Long Learning e, por isso, seu acesso ao QG é vitalício. Assim, além de concluir o melhor curso do mercado, você pode sempre revisar,  conferir as atualizações dos módulos e ter acesso aos cursos extras que vão fazer toda a diferença."
                />
                <Card
                    icon={<UsersThree weight="bold" color={theme.main} size={160}/>}
                    title="Hub Community"
                    text="Uma das coisas mais importantes para os devs é ter uma boa comunidade, e o nosso Hub é exatamente o que você precisa! Uma comunidade secreta e exclusiva para tirar dúvidas, bater um papo, receber dicas e vagas, marcar missões com outros agentes e muito mais."
                />
                <Card
                    icon={<Student weight="bold" color={theme.main} size={160}/>}
                    title="Mentorias em Grupo"
                    text="Agente que é agente sabe todos os hacks para as coisas, por isso, três vezes por semana nós temos mentorias com os profissionais mais incríveis do mercado e os agentes também podem interagir com nosso convidade do dia da melhor maneira possível."
                />
                <Button>Entrar para o QG Dev</Button>
            </Section>
        </Wrapper>
    )
}

export default QG