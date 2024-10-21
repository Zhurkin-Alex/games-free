import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
    background-color: #f8f9fa;
    color: #212529;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export {GlobalStyle}