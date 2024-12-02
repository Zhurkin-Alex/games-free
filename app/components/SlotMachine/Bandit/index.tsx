'use client'

import { ACTION_TYPE, useAppContext } from '@/app/context/AppContext'
import React from 'react'

import SlotMachina from './components/SlotMachina'
import { StyledBody, StyledWrapper } from './style'

const Bandit = () => {
  const { dispatch } = useAppContext()

  const clickMenu = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
  }
  return (
    <StyledWrapper onClick={clickMenu}>
      <StyledBody>
        <SlotMachina />
      </StyledBody>
    </StyledWrapper>
  )
}

export default Bandit
