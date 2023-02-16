import styled from "styled-components";


export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;

    h2 {
        margin-bottom: 5rem;
    }
`


export const ContainerLoginModal = styled.div`
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    width: 444px;
    height: 454px;

    border-radius: 4px;

    padding: 60px 40px;

    h3 {
        margin-bottom: 1.75rem;
    }

    a {
        display: block;

        margin-top: 1.25rem;

        text-align: center;

        font-size: 0.75rem;
        font-weight: bold;

        color: ${(props) => props.theme.green300};
    }
`

export const SelectContainer = styled.div`
    display: flex;

    margin-top: 0.5rem;
    margin-bottom: 16px;

    border-color: #dedede;
    color: #000;
    border-radius: 4px;

    flex-direction: column;

    label {
        font-size: 14px;
        margin-bottom: 9px;
    }

    input {
        display: block;
        width: 352px;
        height: 45px;
        border: none;
        border: 1px solid #DEDEDE;
        border-radius: 4px;

        padding-left: 10px;
    }
`

export const ButtonLogin = styled.button`
    display: flex;
    width: 352px;
    height: 45px;

    align-items: center;
    justify-content: center;

    border: none;

    text-transform: uppercase;
    font-weight: bold;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.green300};

    border-radius: 6px;

    cursor: pointer;
`