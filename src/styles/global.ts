import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px
  }

  html{
    height: 100%;
  }
  body {
    background-image: linear-gradient(to right, #483D8B, #7B68EE);
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
  }

  a{
    text-decoration:none;
  }

  div#root{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

`;
