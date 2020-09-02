import { createGlobalStyle } from 'styled-components';

// import background from '~/assets/doodles.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px
  }

  *, input, button {
    font-family: 'Roboto', 'sans-serif';
  }

  button{
    outline: none;
    cursor: pointer;
  }

input{
  outline: none;
}

  html{
    background-color: #F0F2F5;

  }

  body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
  }

  a{
    text-decoration:none;
  }

  div#root{
    display: flex;
    flex: 1;
    flex-direction: column;
  }

`;

/* #AACC00, #2B9348 */
