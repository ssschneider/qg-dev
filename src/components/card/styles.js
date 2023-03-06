import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 60%;
    margin: 3.2rem auto;
    background-color: ${props => props.theme.text};
    border-radius: .8rem;
    padding: 2.4rem 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition); 

    &:hover {
        box-shadow:  ${props => props.theme.text} 0px 0px 20px;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: flex-start;
    color: ${props => props.theme.main};
    max-width: 50rem;
`

export const Title = styled.h3`
    font-size: 3.2rem;
    font-weight: 700;
`

export const Text = styled.p`
    font-size: 2.4rem;
    text-align: justify;
`