import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #FFF;
        font-family: 'Inter', sans-serif;
    }

    a {
        text-decoration: none;
    }

    .active {
        background-color: rgba(0,176,80, 0.2);
        border-bottom: 2px solid ${(props) => props.theme.green300};
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 100%;
    width: 1280px;

    margin-top: 3rem;
`