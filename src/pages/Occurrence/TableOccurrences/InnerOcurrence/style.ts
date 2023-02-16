import styled, { css } from "styled-components";

export const ContainerInnerOcurrences = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

export const BackLink = styled.div`
    display: flex;
    align-items: center;

    a {
        color: ${(props) => props.theme.black};
    }
`

export const SelectContainer = styled.select`
    width: 180px;
    height: 40px;
    border-color: ${(props) => props.theme.gray500};
    color: ${(props) => props.theme.black};

    border-radius: 4px;

    padding-left: 8px;

    &:focus {
        background-color: rgba(0, 176, 80, .1);
    }

    option:checked{
        background: rgba(0, 176, 80, .7);
    }
`
const containerFlex = css`
    display: flex;
    align-items: center;
`

export const UserInfo = styled.div`
    ${containerFlex}
`;

export const AdressInfo = styled.div`
    ${containerFlex}
`

export const ContainerInfos = styled.div`
    ${containerFlex}
    gap: 12px;
`

export const LabelsContainer = styled.div`
    ${containerFlex}
`

export const Category = styled.span`
    font-size: 0.875rem;
    background: rgba(0, 176, 80, 0.2);
    padding: 2px 10px;
    border-radius: 50px;
    color: ${(props) => props.theme.black};
    margin-right: 12px;
`

export const Status = styled.span`
    font-size: 0.875rem;
    background: rgba(171, 34, 46, 0.2);
    padding: 2px 10px;
    border-radius: 50px;
    color: ${(props) => props.theme.black};
`

export const TextContainer = styled.p`
    font-size: 1rem;
    margin-top: 2.5rem;
    line-height: 30px;
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: fit-content(100%);
    grid-gap: 12px;

    margin-top: 1rem;
    margin-bottom: 4rem;
`