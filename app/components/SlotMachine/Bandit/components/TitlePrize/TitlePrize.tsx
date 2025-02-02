'use client'

import React from 'react'

import slotBackGold from '../../img/slots/slot-back-gold.png'
import slotBack from '../../img/slots/slot-back.png'
import style from './TitlePrize.module.scss'
import TitlePrizeTexts from './TitlePrizeTexts'

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
    </div>
  )
}

export default TitlePrize
