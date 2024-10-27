"use client"
import styled from "styled-components";
import { ACTION_TYPE, useAppContext } from "./context/AppContext";

 

const StyledMain = styled.main`
flex: 1;
`
const App = () => {
  const { state, dispatch } = useAppContext();

  const clickMenu = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
  };

  return (
    <StyledMain onClick={clickMenu}>
      home page
    </StyledMain>
  );
}

export default App
