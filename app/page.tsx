"use client"
import styled from "styled-components";
import { useAppContext } from "./context/AppContext";

 

const StyledMain = styled.main`
flex: 1;
`
const Home = () => {
  const { state, dispatch } = useAppContext();

  const clickMenu = () => {
    dispatch({ type: "OVERLAY_CLICK_ClOSE_BURGER", payload: true })
  };

  return (
    <StyledMain onClick={clickMenu}>
      home page
    </StyledMain>
  );
}

export default Home
