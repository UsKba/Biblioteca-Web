import { createGlobalStyle } from 'styled-components';

import background from '~/assets/doodles.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px
  }

  html{
    background-image: linear-gradient(to right, #AACC00, #2B9348);
    height: 100%;
  }
  body {
    /* background-image: linear-gradient(to right, #AACC00, #2B9348); */

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
    background-size:cover;
    background-attachment:fixed;
    background-image: url(${background});

    display: flex;
    flex: 1;
    flex-direction: column;
  }

`;

/* #AACC00, #2B9348 */
