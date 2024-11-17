'use client'

import React from 'react'

import SlotMachina from './components/SlotMachina'
import { StyledBody, StyledWrapper } from './style'

const Bandit = () => {
  return (
    <StyledWrapper>
      <StyledBody>
        <SlotMachina />
      </StyledBody>
    </StyledWrapper>
  )
}

export default Bandit
