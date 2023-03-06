import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${props => props.theme.background};
    padding-bottom: 10rem;
`

export const Banner = styled.img`
    width: 100%;
    margin-bottom: 14rem;
`

export const SectionTitle = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin: 8rem auto 4rem;
    color: ${props => props.theme.text};
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
`