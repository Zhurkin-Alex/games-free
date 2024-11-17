'use client'

import Link from 'next/link'
import styled from 'styled-components'

import { ACTION_TYPE, useAppContext } from './context/AppContext'
import back from './img/back_casino.webp'
import { StyledButtonContainer, StyledGameButtons } from './style'

const StyledMain = styled.main`
  flex: 1;
  justify-content: center;
  display: flex;
`
const App = () => {
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
            🎰 Play Slot Machine
          </Link>
          <Link
            className="memory"
            href="/MemoryMatch"
          >
            🧠 Play Memory Game
          </Link>
        </StyledButtonContainer>
      </StyledGameButtons>
    </StyledMain>
  )
}

export default App
