import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #303135;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;
