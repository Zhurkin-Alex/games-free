import style from './TitlePrize.module.scss'

interface ITitlePrizeTexts {
  totalForWin: number
  addCashRewardisHandler: () => void
}

const TitlePrizeTexts = ({ totalForWin, addCashRewardisHandler }: ITitlePrizeTexts) => {
  return (
    <>
      {totalForWin > 0 ? (
        <div className={style.advertisingCard}>
          <span className={style.totalWinText}>Win {totalForWin} and take the</span>
          <span className={style.totalWin}>real prizes</span>
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
    </>
  )
}

export default TitlePrizeTexts
