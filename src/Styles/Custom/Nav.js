import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 50px;
    box-shadow: 1px 1px 10px 3px ${props => props.theme.color.shadowColor};

    @media screen and (max-width: 400px){
        padding: 0 20px;
    }

    .nav__left{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .nav__logo{
        width: 40px;
    }

    .nav__title{
        user-select: none;
    }

    .nav__right{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        cursor: pointer;
        background-color: ${props => props.theme.color.primaryColor};
    }

    .nav__icon{
        font-size: 30px;
    }
`