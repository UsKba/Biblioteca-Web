import { createGlobalStyle } from 'styled-components';

import background from '../assets/doodles.png';

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
    background-image: linear-gradient(to right, #AACC00, #2B9348);
    background-image: ${background};
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

/* #AACC00, #2B9348 */
