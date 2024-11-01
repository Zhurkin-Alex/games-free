"use client"
import styled from "styled-components";
import { ACTION_TYPE, useAppContext } from "./context/AppContext";

 

const StyledMain = styled.main`
flex: 1;
`
const App = () => {
  const { state, dispatch } = useAppContext();
  const url = new URL(window.location.href)
  const srcUrl = url.searchParams.get('src')
  let srcIframe = "https://vk.com/video_ext.php?oid=825304720&id=456239112&hd=2&autoplay=1" 
  if (srcUrl) {
    srcIframe = srcUrl
  }

  const clickMenu = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
  };

  return (
    <StyledMain onClick={clickMenu}>
      <iframe src={srcIframe} width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"  allowFullScreen></iframe>
    </StyledMain>
  );
}

export default App
