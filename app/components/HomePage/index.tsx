'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import FlyingElementsPage from '../../FlyingElements/page'
import { ACTION_TYPE, useAppContext } from '../../context/AppContext'
import back from '../../img/back_casino.webp'
import { StyledButtonContainer, StyledGameButtons, StyledPage, StyledText } from '../../style'

const StyledMain = styled.main`
  flex: 1;
  justify-content: center;
  display: flex;
`

const HomePage = () => {
  const { dispatch } = useAppContext()

  const clickMenu = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
  }

  return (
    <StyledMain onClick={clickMenu}>
      <img
        src={back.src}
        width={'100%'}
        height={'100%'}
        style={{ objectFit: 'cover', position: 'absolute' }}
        alt="logo"
      />
      <StyledGameButtons>
        <StyledButtonContainer>
          <Link
            className="slotMachine"
            href="/SlotMachine"
          >
            <StyledPage>🎰</StyledPage>
            <StyledText>Slot Machine</StyledText>
          </Link>
          <Link
            className="memory"
            href="/MemoryMatch"
          >
            <StyledPage>🧠</StyledPage>
            <StyledText>Memory Game</StyledText>
          </Link>
          <FlyingElementsPage />
        </StyledButtonContainer>
      </StyledGameButtons>
    </StyledMain>
  )
}

export default HomePage
