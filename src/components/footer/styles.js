import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 4.4rem;
    color: ${props => props.theme.text};

    @media (max-width: 870px) {
        flex-direction: column;
        justify-content: center;
        gap: 1.8rem;
    }
`

export const Title = styled.h2`
    font-size: 6.4rem;

    @media (max-width: 450px) {
        font-size: 4rem;
    }
`

export const Author = styled.p`
    font-size: 2.4rem;

    @media (max-width: 490px) {
        font-size: 1.8rem;
    }

    @media (max-width: 395px) {
        font-size: 1.2rem;
    }
`