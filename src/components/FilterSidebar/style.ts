import styled from "styled-components"

export const SidebarContainer = styled.aside`
    border-left: 1px solid ${(props) => props.theme.gray500};
    height: 100vh;
    padding: 10px 24px;

    .label {
        display: block;

        margin-bottom: 3rem;
        color: ${(props) => props.theme.gray500};
        font-size: 1.25rem;

        margin-top: 2rem;
    }

    button {
        display: block;
        width: 128px;
        height: 40px;
        background-color: ${(props) => props.theme.green300};

        border: 0;
        border-radius: 4px;

        cursor: pointer;
    }

    button:hover {
        background-color: ${(props) => props.theme.green500};
        transition: background-color ease 0.3s;
    }
`

export const DropdownContainer = styled.div`
    margin-bottom: 2rem;
`

export const SelectContainer = styled.select`
    display: flex;

    margin-top: 0.5rem;

    width: 232px;
    height: 40px;
    padding: 10px;
    border-color: #dedede;
    color: ${(props) => props.theme.black};
    border-radius: 4px;
`