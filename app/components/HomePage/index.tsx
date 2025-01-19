'use client'

import Link from 'next/link'
import { useState } from 'react'

import FlyingElementsPage from '../../FlyingElements/page'
import { ACTION_TYPE, useAppContext } from '../../context/AppContext'
import back from '../../img/back_casino.webp'
import { StyledButtonContainer, StyledGameButtons, StyledPage, StyledText } from '../../style'
import Authorization from '../Authorization'
import { StyleBAckgroundImg, StyledMain } from './style'

const HomePage = () => {
  const { dispatch } = useAppContext()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const clickMenu = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <StyledMain onClick={clickMenu}>
      <StyleBAckgroundImg
        src={back.src}
        alt="logo"
      />
      {isModalOpen && <Authorization closeModal={closeModal} />}
      <StyledGameButtons>
        <StyledButtonContainer>
          {!isModalOpen && (
            <>
              {' '}
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
            </>
          )}
          <FlyingElementsPage />
        </StyledButtonContainer>
      </StyledGameButtons>
    </StyledMain>
  )
}

export default HomePage
