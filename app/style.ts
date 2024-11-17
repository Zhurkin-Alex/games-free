import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
    background-color: #f8f9fa;
    color: #212529;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledGameButtons = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  height: 100px;
  flex-wrap: wrap;

  .slotMachine,
  .memory {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    text-align: center;
    transition:
      transform 0.3s,
      box-shadow 0.3s;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    width: 200px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .slotMachine {
    background: linear-gradient(45deg, black, gold);
    color: white;
    border: 2px solid gold;
  }

  .memory {
    background: linear-gradient(45deg, lightblue, white);
    color: black;
    border: 2px solid lightblue;
  }
`

const StyledPage = styled.div`
  font-size: 60px;
`

const StyledText = styled.div``

export { StyledPage, StyledText, GlobalStyle, StyledGameButtons, StyledButtonContainer }
