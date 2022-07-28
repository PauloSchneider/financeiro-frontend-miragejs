import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --negative: #e52e40;
    --positive: #33cc95;

    --green: #029F74;
    --green-light: #33cc95;

    --text-tile: #363f5f;
    --text-body: #969cb3;

    --input: #e7e9ee;
    --input-border: #d7d7d7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Por padrao o font-size em Desktop e de 16px
  html {
    @media(max-width: 1080px) {
      font-size: 93,75%; // Se a tela for fullhd a font sera 15px (16 x 0,9375 = 15)  
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // Se a tela for hd a font sera 14px (16 x 0,875 = 14)
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer; //faz o botao ser clicavel
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`