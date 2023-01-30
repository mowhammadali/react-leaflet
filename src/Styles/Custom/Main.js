import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 500px;

    @media screen and (max-width: 768px){
        height: auto;
        flex-direction: column;
    }
`