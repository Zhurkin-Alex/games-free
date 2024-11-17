'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import slotBackGold from '../../img/slots/slot-back-gold.png'
import slotBack from '../../img/slots/slot-back.png'
import style from './Slot.module.scss'

interface ISlot {
  isRunning: boolean
  symbols: string[]
  timeInterval: number
  startIndex: number
  setViewLastPage: (el: number) => void
  slot: number
  winNumberSlot: number[][]
}

const Slot = ({
  isRunning,
  symbols,
  timeInterval,
  startIndex,
  setViewLastPage,
  slot,
  winNumberSlot,
}: ISlot) => {
  const [currentSymbolIndex, setCurrentSymbolIndex] = useState(startIndex)
  const [winSlot, setwinSlot] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    setwinSlot(false)

    if (isRunning) {
      interval = setInterval(() => {
        setCurrentSymbolIndex((prevIndex: number) => {
          if (prevIndex === symbols.length - 1) {
            return 0
          }

          return prevIndex + 1
        })
      }, timeInterval)
    }

    setViewLastPage(currentSymbolIndex + 1)

    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    if (winNumberSlot.length > 0) {
      for (let el = 0; el < winNumberSlot.length; el += 1) {
        if (winNumberSlot[el][0] + 1 === slot) {
          // console.warn('winNumberSlot-el', slot);
          setwinSlot(true)
        }
      }
    }
    // console.warn('winNumberSlot', winNumberSlot, slot);
  }, [winNumberSlot])

  return (
    <motion.div
      className={style.slot}
      style={{
        width: '115px',
        height: '115px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: !winNumberSlot.length || winSlot ? 1 : 0.3,
      }}
    >
      {!winSlot && (
        <img
          src={slotBack.src}
          alt="image"
          className={style.border}
        />
      )}
      {winSlot && (
        <img
          src={slotBackGold.src}
          alt="image"
          className={style.border_gold}
        />
      )}
      <img
        src={symbols[currentSymbolIndex]}
        alt="image"
        className={style.item}
      />
    </motion.div>
  )
}

export default Slot
