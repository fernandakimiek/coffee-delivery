import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
    }

    body {
        background: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        width: 100%;
        height: 100%;
    }

    body, input, textarea, button {
        font-size: 1rem;
    }

`;
