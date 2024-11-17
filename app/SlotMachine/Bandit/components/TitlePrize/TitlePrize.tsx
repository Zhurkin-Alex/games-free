'use client'

import React from 'react'

import slotBackGold from '../../img/slots/slot-back-gold.png'
import slotBack from '../../img/slots/slot-back.png'
import style from './TitlePrize.module.scss'

type TitlePrizeType = {
  totalForWin: number
  addCashRewardisHandler: () => unknown
  widthPrize: string
}

function TitlePrize({ totalForWin, addCashRewardisHandler, widthPrize }: TitlePrizeType) {
  return (
    <div className={style.advertising}>
      {totalForWin > 0 ? (
        <img
          className={style.advertisingBack}
          src={slotBack.src}
          alt="prize-back"
        />
      ) : (
        <img
          className={style.advertisingBackGold}
          src={slotBackGold.src}
          alt="prize-back"
        />
      )}
      {totalForWin > 0 ? (
        <div className={style.advertisingCard}>
          <span className={style.totalWinText}>Win {totalForWin} and take the</span>
          <span className={style.totalWin}>Iphone 14 pro </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={addCashRewardisHandler}
          className={style.advertisingCardGold}
        >
          <span className={style.totalWinText}>Touch and take your prize</span>
        </button>
      )}
      <div className={style.progressBox}>
        <div
          style={{ width: widthPrize }}
          className={style.advertisingProgress}
        />
      </div>
    </div>
  )
}

export default TitlePrize
