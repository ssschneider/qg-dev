import { useContext } from "react"
import { About, Image, Name, Role, TextSection, Wrapper } from "./styles"
import { theme, ThemeContext } from "../../context/theme-context"

const Profile = ({ image, name, role, about }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Image src={image}/>
            <TextSection theme={theme}>
                <Name>{name}</Name>
                <Role>{role}</Role>
                <About>{about}</About>
            </TextSection>
        </Wrapper>
    )
}

export default Profile