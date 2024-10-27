import styled from "styled-components";
import back from './img/back.webp'

const StyledWrapper = styled.div`
    font-family: 'Londrina Solid', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: 0;
    background-image: url(${back.src});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(50% 50% at 50% 50%, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 72%) 100%);
    }
`
  
const StyledBody = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

export {StyledWrapper, StyledBody}