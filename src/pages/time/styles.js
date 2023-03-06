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
    width: 100%;
    max-width: 80%;
    margin: 0 auto 6rem;
    color: ${props => props.theme.text};

    @media (max-width: 685px) {
        font-size: 4rem;
    }

    @media (max-width: 570px) {
        font-size: 3.6rem;
    }

    @media (max-width: 340px) {
        font-size: 3.2rem;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 6.4rem;
    margin-bottom: 4rem;

    @media (max-width: 835px) {
        grid-template-columns: 1fr;
    }
`