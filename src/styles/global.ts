import { createGlobalStyle } from 'styled-components';

import colors from '~/styles/colors';

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

  div{
    outline: none;
  }

  html{
    background-color: ${colors.background};
  }

  body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.background};
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



.Toastify__close-button > svg {
  margin-top: 15px;
}

.Toastify__toast--dark {
  background-color: #333333;
}

//slider

button.rec-dot:active, button.rec-dot:focus{
  box-shadow: none;
}

button.rec-dot:hover {
  background-color: rgba(50, 44, 66, 0.6);
  box-shadow: none;
}

button.rec-dot{
  background-color: rgba(50, 44, 66, 0.4);
  box-shadow: none;
}

button.rec-dot_active, button.rec-dot_active:hover {
  background-color: rgb(50, 44, 66);
  height: 18px;
  width: 18px;
}

div.rec-pagination{
  display: flex;
  align-items: center;
  height: 28px;
}


`;
