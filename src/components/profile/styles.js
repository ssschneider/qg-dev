import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    max-width: 48rem;
    border: 1px solid ${props => props.theme.background};
    border-radius: .8rem;
    padding: 1.6rem .8rem;
    transition: var(--transition);
    
    &:hover {
        border: 1px solid ${props => props.theme.text};
        box-shadow:  ${props => props.theme.text} 0px 0px 2px;
    }

    @media (max-width: 415px) {
        padding: .8rem .4rem;
    }
`

export const Image = styled.img`
    width: 35rem;
    height: 35rem;
    border-radius: 100%;

    @media (max-width: 415px) {
        width: 28rem;
        height: 28rem;
    }
`

export const TextSection = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.text};
`

export const Name = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
`

export const Role = styled.h5`
    font-size: 2.4rem;
`

export const About = styled.p`
    font-size: 2.4rem;
    margin-top: 1.8rem;

    @media (max-width: 415px) {
        font-size: 1.8rem;
    }
`