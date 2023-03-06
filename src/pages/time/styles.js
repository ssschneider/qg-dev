import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${props => props.theme.background};
    padding-bottom: 10rem;
    text-align: center;
`

export const Banner = styled.img`
    width: 100%;
    margin-bottom: 14rem;
`

export const SectionTitle = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin: 0 auto 6rem;
    color: ${props => props.theme.text};
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 6.4rem;
    margin-bottom: 4rem;
`