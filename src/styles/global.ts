import {createGlobalStyle} from 'styled-components';

export  default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #fff url('https://www.develcode.com.br/img/bg_tudo.png') no-repeat right top; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 600 1rem Roboto, sans-serif; 
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
` 