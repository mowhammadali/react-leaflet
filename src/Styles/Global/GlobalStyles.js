import { createGlobalStyle } from "styled-components";;

export const GlobalStyles =  createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: arial;
    background-color: ${props => props.theme.color.bgColor};
    color: ${props => props.theme.color.textColor};
}

`