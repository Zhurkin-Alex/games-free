'use client'

import React from 'react'

import style from './ButtonContainer.module.scss'

type ButtonContainerType = {
  startSlotMachine: () => unknown
  totalPlus: () => unknown
  totalMinus: () => unknown
  isDisabledBet: boolean
  total: number
}

function ButtonContainer({
  totalMinus,
  startSlotMachine,
  isDisabledBet,
  total,
  totalPlus,
}: ButtonContainerType) {
  return (
    <div className={style.total}>
      <button
        className={style.total_minus}
        type="button"
        onClick={totalMinus}
      >
        -50
      </button>
      <button
        className={style.button}
        type="button"
        onClick={startSlotMachine}
        disabled={isDisabledBet}
      >
        BET
        <div className={style.total_bet}>{total}</div>
      </button>
      <button
        className={style.total_plus}
        type="button"
        onClick={totalPlus}
      >
        +50
      </button>
    </div>
  )
}

export default ButtonContainer
