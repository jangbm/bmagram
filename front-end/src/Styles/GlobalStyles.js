import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
        color:${(props) => props.theme.fontColor}

    }
    body{
        background-color:${(props) => props.theme.bgColor};
        font-family:-apple-system, 'Noto Sans KR', BlinkMacSystemFont, cursive, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:${(props) => props.theme.fontColor}

    }
    a{
        color:${(props) => props.theme.yellowColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
    button{
        font-family:-apple-system, 'Noto Sans KR', BlinkMacSystemFont, cursive, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    input{
        font-family:-apple-system, 'Noto Sans KR', BlinkMacSystemFont, cursive, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

`;
