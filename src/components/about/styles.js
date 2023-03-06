import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 2.4rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.4rem;

    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50rem;
    color: ${props => props.theme.text};
`

export const TitleBig = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 855px) {
        font-size: 4rem;
    }

    @media (max-width: 740px) {
        font-size: 3.6rem;
    }
`

export const TitleSmall = styled.h2`
    font-size: 3.2rem;

    @media (max-width: 400px) {
        font-size: 2.4rem;
    }
`

export const Content = styled.p`
    font-size: 2.4rem;
    text-align: justify;

    @media (max-width: 400px) {
        font-size: 1.8rem;
    }
`

export const ImageBig = styled.img`
    width: 35rem;
    height: 35rem;
    border-radius: 100%;

    @media (max-width: 1000px) {
        width: 25rem;
        height: 25rem;
    }

    @media (max-width: 950px) {
        width: 20rem;
        height: auto;
    }

    @media (max-width: 600px) {
        width: 20rem;
        height: 20rem;
    }
`

export const ImageSmall = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
`