import styled from "styled-components";

export const GeoJsonContainer = styled.div`
    width: 30%;
    height: 100%;
    padding: 20px;
    overflow-y: auto; 
    border: 2px solid black;
    border: 2px solid ${props => props.theme.color.textColor};

    code{
        word-break: break-word;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 300px;
    }
`