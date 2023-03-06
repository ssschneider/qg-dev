import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: ${props => props.theme.main};
    padding: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
    }
`

export const Title = styled.h1`
    font-size: 6.4rem;
    color: ${props => props.theme.text};
    font-weight: 700;

    @media (max-width: 415px) {
        font-size: 4.8rem;
    }

    @media (max-width: 335px) {
        font-size: 4rem;
    }
`

export const Menu = styled.nav`
    display: flex;
    gap: 1.6rem;
    justify-content: flex-end;
    align-items: center;
`

export const Nav = styled.button`
    background-color: transparent;
    outline: none;
    border: 1px solid transparent;
    padding: .4rem .8rem;
    font-size: 3.2rem;
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        scale: var(--scale);
        border-bottom: 1px solid ${props => props.theme.text};
    }

    @media (max-width: 470px) {
        font-size: 2.4rem;
    }

    @media (max-width: 415px) {
        font-size: 1.8rem;
        padding: 0;
    }
`