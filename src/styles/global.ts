import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, #root, html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
