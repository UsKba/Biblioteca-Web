import { createGlobalStyle } from 'styled-components';

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

  /* Input search enrollment */

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
`;

/* #AACC00, #2B9348 */
