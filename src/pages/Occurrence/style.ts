import styled from "styled-components";

export const ContainerOcurrence = styled.div`
    display: flex;
`

export const OcurrenceWrappper = styled.div`
    width: 1080px;
    padding: 40px 80px;
    flex: 2;

    h3 {
        font-weight: normal;
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }
`

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.th`
    text-align: inherit;
`

export const TableRow = styled.tr`
    width: 100%;
    height: 120px;
    padding: 30px;

    border-bottom: 1px solid rgba(0, 0, 0, .3);

    .inner_link {
        background-color: ${(props) => props.theme.green500};
        color: #fff;
        padding: 10px 20px;

        border-radius: 8px;
    }

    .inner_link:hover {
        background-color: ${(props) => props.theme.green300};
    }
`