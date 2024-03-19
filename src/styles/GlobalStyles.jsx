import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};
* {
      box-sizing: border-box;
    }
    :root {
      font-size: 62.5%;
      --main: #6200EE;
      --point: rgb(255, 127, 172);
      --light: #BB86FC;
      --main-grey: #767676;
      --sub-grey: #c4c4c4;
      --light-grey: #f2f2f2;
    }
    body {
      font-family: 'Noto Sans KR', 'Gmarket Sans', sans-serif;
      font-weight: 400;
      -ms-overflow-style: none;
      background-color: var(--white);
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
    }
    button {
      border: none;
      padding: 0;
      background-color: inherit;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    input {
      font: inherit;
      padding: 0;
    }
    textarea {
      border: none;
      overflow: auto;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      resize: none;
      font: inherit;
    }
`;

export const Cont = css`
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--white);
`;

export const IR = css`
  position: absolute;
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const Ellipsis = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
