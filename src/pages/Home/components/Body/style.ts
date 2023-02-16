import styled from "styled-components";

export const BodyContainer = styled.body`
    display: flex;
    justify-content: space-between;
`

export const MapContainer = styled.div`
    max-width: 989px;
    max-height: height 759px;
    width: 800px;
    height: 700px;
    margin-left: 2rem;
    margin-top: 3rem;
    background-color: #ccc;
    position: relative;

    .labels {
        display: flex;
        justify-content: space-between;
        margin-top: -20px;

        .label {
            color: ${(props) => props.theme.gray500};
        }

        .status_label {
            display: flex;
            gap: 20px;

            .less_than_ten_days,
            .more_than_ten_days,
            .more_than_twenty_days {
                width: 16px;
                height: 16px;
            }
        }
    }
`