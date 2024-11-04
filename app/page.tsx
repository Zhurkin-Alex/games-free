"use client"
import React from "react";
import styled from "styled-components";
import { ACTION_TYPE, useAppContext } from "./context/AppContext";
import { useEffect, useState } from "react";

 

const StyledMain = styled.main`
  flex: 1;
  justify-content: center;
  display: flex;
  margin: 50px 0 0;
`
const App = () => {
  const { dispatch } = useAppContext();

  const [srcIframe, setSrcIframe] = useState("https://vk.com/video_ext.php?oid=825304720&id=456239112&hd=2&autoplay=1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const srcUrl = url.searchParams.get('src');
      if (srcUrl) {
        setSrcIframe(srcUrl);
      }
    }
  }, []);

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
