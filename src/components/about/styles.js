import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 2.4rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 49rem;
    height: 20rem;
    color: ${props => props.theme.text};
`

export const TitleBig = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin-bottom: 4rem;
`

export const TitleSmall = styled.h2`
    font-size: 3.2rem;
`

export const Content = styled.p`
    font-size: 2.4rem;
    text-align: justify;
`

export const ImageBig = styled.img`
    width: 35rem;
    height: 35rem;
    border-radius: 40rem;
`

export const ImageSmall = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
`