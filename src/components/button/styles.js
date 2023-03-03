import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

export const Btn = styled.button`
    font-size: 2.4rem;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.main};
    border-radius: .8rem;
    padding: 1.6rem 4rem;
    outline: none;
    border: none;
    cursor: pointer;
    animation: ${pulsate} 1s ease-in-out infinite both;
    transition: var(--transition);
    margin-top: 2.4rem;

    &:hover {
        box-shadow:  ${props => props.theme.text} 0px 5px 15px;
        scale: 1.1;
        animation: none;
    }
`