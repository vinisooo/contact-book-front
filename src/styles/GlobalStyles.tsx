import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }

    :root {
        --total-white : #FFFFFF;
        --color-grey-1: #90a4ae;
        --color-grey-2: #455A64;
        --color-grey-3: #263238;
    }

    button{
        cursor: pointer;
        transition: 0.3s;
    }

    button:active{
        transform: translateY(2px);
    }

`
