import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background-color: ${({ theme }) => theme.color.whiteLilac};
        font-family: 'Inter', sans-serif;
        max-width: 1216px;
        margin: auto;
        font-size: 18px;
        letter-spacing: 0.05em;
        color: ${({ theme }) => theme.color.slateGray};
    }
`;