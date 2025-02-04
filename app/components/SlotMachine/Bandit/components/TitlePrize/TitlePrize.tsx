'use client'

import { useAppContext } from '@/app/context/AppContext'
import { useAuth } from '@/app/context/AuthTokenContext'
import React from 'react'

import slotBackGold from '../../img/slots/slot-back-gold.png'
import slotBack from '../../img/slots/slot-back.png'
import style from './TitlePrize.module.scss'
import TitlePrizeTexts from './TitlePrizeTexts'

type TitlePrizeType = {
  totalForWin: number
  addCashRewardisHandler: () => unknown
  widthPrize: string
  setIsStartAuth: (value: boolean) => void
}

const TitlePrize = ({
  totalForWin,
  addCashRewardisHandler,
  widthPrize,
  setIsStartAuth,
}: TitlePrizeType) => {
  const { isAuthToken, isLoading } = useAuth()
  const { state } = useAppContext()

  const authHandler = () => {
    if (!isAuthToken) {
      setIsStartAuth(true)
    }
  }

  return (
    <div className={style.advertising}>
      {totalForWin > 0 ? (
        <img
          className={style.advertisingBack}
          src={slotBack.src}
          alt="prize-back"
          onClick={authHandler}
        />
      ) : (
        <img
          className={style.advertisingBackGold}
          src={slotBackGold.src}
          alt="prize-back"
        />
      )}
      {!isAuthToken && !isLoading && !state.isUserAuth ? (
        <div className={style.advertisingCard}>
          <span className={style.totalWinText}>Sign In and Win Real Prizes</span>
        </div>
      ) : (
        <>
          <TitlePrizeTexts
            totalForWin={totalForWin}
            addCashRewardisHandler={addCashRewardisHandler}
          />
          <div className={style.progressBox}>
            <div
              style={{ width: widthPrize }}
              className={style.advertisingProgress}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default TitlePrize
