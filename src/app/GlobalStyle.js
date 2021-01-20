import { createGlobalStyle } from "styled-components";

export const Globalstyled = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
  }
    html,body{
        margin:0px;
        height: 100%;
        overflow: hidden;
        color: #ffffff;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
