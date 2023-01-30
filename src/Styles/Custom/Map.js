import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 100%;
    border: 2px solid ${props => props.theme.color.textColor};
    border-right: 0px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 500px;
    }

    @media screen and (max-width: 576px){
        width: 100%;
        height: 500px;
    }
`