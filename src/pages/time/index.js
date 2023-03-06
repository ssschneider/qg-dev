import Profile from "../../components/profile"
import Button from "../../components/button"
import { Banner, Section, SectionTitle, Wrapper } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"

const Time = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Banner src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <SectionTitle theme={theme}>
                No QG você vai ter verdadeiros Mestres como Mentores
            </SectionTitle>
            <Section>
                <Profile 
                    image="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    name="Alice Rodrigues"
                    role="CEO e Mentora de Carreira"
                    about="Com mais de 10 anos de mercado, Alice criou o QG Dev com o objetivo de ser uma formação diferenciada. Realiza mentorias semanais junto a Olga para ajudar os agentes a se destacarem no mercado."
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    name="Olga Azeredo"
                    role="COO e Mentora de Carreira"
                    about="Com mais de 15 anos de mercado como Tech Recruiter, Olga topou o desafio de transformar vidas de maneira diferente. Com passagens pela Google, Microsoft, Tesla e outras big techs, ela te ajuda a se diferenciar"
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Daniel Oliveira"
                    role="Mentor do Bootcamp Gama"
                    about="Daniel já tem mais de 17 anos de mercado, trabalhou em várias big-techs e startups, ajudou a formar mais de 5000 pessoas e agora vai ter ensinar o que você precisa saber de HTML, CSS e te introduzir ao Javascript de uma maneira única."
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    name="Eduardo Félix"
                    role="Mentor do Bootcamp Javascript"
                    about="João é o mestre. Apelidado de Senhor do Javascript por todo lugar que passou nos últimos 15 anos como dev, ele vai te ensinar a fazer tudo o que você precisa para ser um profissional diferenciado e dominar o JS."
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Carla Torres"
                    role="Mentor da Bootcamp Gama e Beta"
                    about="Carla é a sensação. Com quase 10 anos de mercado, ela é a uma profissional altamente especializada em Typescript, React e React Native e vai passar todos esses conhecimentos para você de uma maneira única e cheia de projetos."
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    name="Iago Santos"
                    role="Mentor da Missão Back-End"
                    about="Iago desenvolve aplicações FullStack desde os 15 anos e é o mentor das Missão Back-End, ensinando Java ou NodeJS para os Agentes, além de vários Bancos de Dados. Quem vem lá não é um homem, é uma máquina!"
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
                    name="Flávia Souza"
                    role="Mentora da Bootcamp Soft-Skills e Agile"
                    about="Flávia é especialista quando falamos de profissional diferenciada. Ela vai ensinar como desenvolver, criar e manter as soft-skills necessárias para te destacar, definir e diferenciar da concorrência no mercado e também sobre as Metodologias Ágeis mais usadas no mercado tech. "
                />
                <Profile 
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    name="Bruno da Silva"
                    role="Mentor do Bootcamp de Contratação"
                    about="Tech Recruiter há anos, Bruno vai te contar todos os bastidores por trás da seleção de currículos, entrevistas e testes técnicos, além de te dar dicas e um cronograma pronto de como melhorar suas redes e seu currículo para se destacar no mercado."
                />
            </Section>

            <Button>Quero ter esses mentores!</Button>
        </Wrapper>
    )
}

export default Time