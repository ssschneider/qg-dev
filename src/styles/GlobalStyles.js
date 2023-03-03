import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 62.5% 'Inika', serif;
    }


    :root {
        --scale: 1.05;
        --transition: 0.5s linear;
    }
`

export default GlobalStyles