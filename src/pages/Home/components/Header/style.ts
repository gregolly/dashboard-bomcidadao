import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.gray500};

    svg {
        position: absolute;
        right: 20px;
        top: 10px;
    }

    nav {
        display: flex;
        padding-top: 60px;
        position: relative;
        top: 1px;
    }

    a {
        display: block;
        padding: 10px;
        color: ${(props) => props.theme.black};
        // background-color: rgba(0,176,80, 0.2);
        animation: border-bottom 1s ease;
    }

    a:hover {
        background-color: rgba(0,176,80, 0.2);
        border-bottom: 2px solid ${(props) => props.theme.green300};
    }
`